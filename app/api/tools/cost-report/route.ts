import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface WasteAnalysis {
  category: string;
  currentSpend: number;
  wastePercent: number;
  wasteAmount: number;
  potentialSavings: number;
  recommendations: string[];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, results } = body;

    // Validation
    if (!email || !results) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const formatCurrency = (amount: number): string => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    };

    const {
      totalMonthlySpend,
      totalWaste,
      totalSavings,
      savingsPercent,
      annualSavings,
      wasteByCategory,
      quickWins,
    } = results;

    // HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Cloud Cost Optimization Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 30px;
      border-bottom: 3px solid #f59e0b;
    }
    .header h1 {
      color: #f59e0b;
      margin: 0 0 10px 0;
      font-size: 32px;
    }
    .header p {
      color: #666;
      margin: 0;
      font-size: 16px;
    }
    .savings-box {
      background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
      color: white;
      padding: 30px;
      border-radius: 12px;
      margin: 30px 0;
      text-align: center;
    }
    .savings-box h2 {
      margin: 0 0 10px 0;
      font-size: 24px;
    }
    .savings-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .savings-item {
      text-align: center;
    }
    .savings-item .big-number {
      font-size: 36px;
      font-weight: bold;
      margin: 10px 0;
    }
    .savings-item .label {
      font-size: 14px;
      opacity: 0.9;
    }
    .section {
      margin: 30px 0;
    }
    .section h3 {
      color: #171717;
      font-size: 20px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e5e5e5;
    }
    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .comparison-card {
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }
    .comparison-card.current {
      background-color: #fef2f2;
      border: 2px solid #ef4444;
    }
    .comparison-card.optimized {
      background-color: #f0fdf4;
      border: 2px solid #10b981;
    }
    .comparison-card h4 {
      margin: 0 0 10px 0;
      font-size: 16px;
    }
    .comparison-card .amount {
      font-size: 32px;
      font-weight: bold;
      margin: 10px 0;
    }
    .comparison-card.current .amount {
      color: #ef4444;
    }
    .comparison-card.optimized .amount {
      color: #10b981;
    }
    .waste-item {
      background-color: #fafafa;
      padding: 20px;
      margin: 15px 0;
      border-radius: 8px;
      border-left: 4px solid #ef4444;
    }
    .waste-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    .waste-name {
      font-weight: bold;
      font-size: 16px;
      color: #171717;
    }
    .waste-amount {
      font-size: 24px;
      font-weight: bold;
      color: #ef4444;
    }
    .waste-details {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }
    .recommendation {
      background-color: #fffbeb;
      border-left: 3px solid #f59e0b;
      padding: 10px 15px;
      margin: 8px 0;
      font-size: 14px;
      border-radius: 4px;
    }
    .quickwin-box {
      background-color: #f0fdf4;
      border-left: 4px solid #10b981;
      padding: 20px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .quickwin-box h4 {
      color: #10b981;
      margin: 0 0 15px 0;
      font-size: 18px;
    }
    .quickwin-item {
      padding: 10px 0;
      border-bottom: 1px solid #d1fae5;
    }
    .quickwin-item:last-child {
      border-bottom: none;
    }
    .cta-box {
      background-color: #fafafa;
      padding: 30px;
      border-radius: 8px;
      text-align: center;
      margin-top: 40px;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
      color: white;
      padding: 15px 40px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      margin-top: 15px;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      padding-top: 30px;
      border-top: 2px solid #e5e5e5;
      color: #666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Cloud Cost Optimization Report</h1>
      <p>Your Personalized Savings Analysis</p>
    </div>

    <div class="savings-box">
      <h2>Potential Savings Identified</h2>
      <div class="savings-grid">
        <div class="savings-item">
          <div class="label">Monthly Savings</div>
          <div class="big-number">${formatCurrency(totalSavings)}</div>
        </div>
        <div class="savings-item">
          <div class="label">Annual Savings</div>
          <div class="big-number">${formatCurrency(annualSavings)}</div>
        </div>
      </div>
      <div style="font-size: 20px; margin-top: 15px;">
        ${savingsPercent.toFixed(1)}% cost reduction opportunity
      </div>
    </div>

    <div class="section">
      <h3>💰 Current vs Optimized Spending</h3>
      <div class="comparison-grid">
        <div class="comparison-card current">
          <h4>⚠️ Current</h4>
          <div class="amount">${formatCurrency(totalMonthlySpend)}</div>
          <div style="font-size: 14px;">per month</div>
          <div style="margin-top: 10px; font-size: 14px;">
            Includes ${formatCurrency(totalWaste)} waste
          </div>
        </div>
        <div class="comparison-card optimized">
          <h4>✅ Optimized</h4>
          <div class="amount">${formatCurrency(totalMonthlySpend - totalSavings)}</div>
          <div style="font-size: 14px;">per month</div>
          <div style="margin-top: 10px; font-size: 14px;">
            Save ${formatCurrency(totalSavings)}/mo
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>📊 Waste Breakdown by Category</h3>
      ${(wasteByCategory as WasteAnalysis[]).map((category) => `
        <div class="waste-item">
          <div class="waste-header">
            <div class="waste-name">${category.category}</div>
            <div class="waste-amount">${formatCurrency(category.wasteAmount)}</div>
          </div>
          <div class="waste-details">
            Current spend: ${formatCurrency(category.currentSpend)}/mo |
            ${category.wastePercent}% waste identified
          </div>
          <div style="font-weight: 600; margin: 10px 0 5px 0; color: #f59e0b;">💡 Recommendations:</div>
          ${category.recommendations.slice(0, 3).map((rec) => `
            <div class="recommendation">${rec}</div>
          `).join('')}
        </div>
      `).join('')}
    </div>

    <div class="section">
      <div class="quickwin-box">
        <h4>🚀 Quick Wins - Start Here</h4>
        ${(quickWins as string[]).map((win, index) => `
          <div class="quickwin-item">
            <strong>${index + 1}.</strong> ${win}
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <h3>📅 Implementation Timeline</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background-color: #f0fdf4;">
          <td style="padding: 15px; border-left: 4px solid #10b981;">
            <strong>Week 1-2: Quick Wins</strong><br>
            <span style="font-size: 14px;">Delete old snapshots, remove unattached volumes, shut down unused instances<br>
            <strong>Savings:</strong> 10-15% (${formatCurrency(totalSavings * 0.12)}/mo)</span>
          </td>
        </tr>
        <tr style="background-color: #fffbeb;">
          <td style="padding: 15px; border-left: 4px solid #f59e0b;">
            <strong>Month 1: Rightsizing</strong><br>
            <span style="font-size: 14px;">Analyze usage patterns, rightsize instances and databases<br>
            <strong>Savings:</strong> 15-20% (${formatCurrency(totalSavings * 0.17)}/mo)</span>
          </td>
        </tr>
        <tr style="background-color: #eff6ff;">
          <td style="padding: 15px; border-left: 4px solid #0ea5e9;">
            <strong>Month 2-3: Automation</strong><br>
            <span style="font-size: 14px;">Implement auto-scaling, reserved instances, lifecycle policies<br>
            <strong>Savings:</strong> Full ${formatCurrency(totalSavings)}/mo</span>
          </td>
        </tr>
      </table>
    </div>

    <div class="section">
      <h3>🎯 Expected ROI</h3>
      <ul style="line-height: 2;">
        <li><strong>Monthly Savings:</strong> ${formatCurrency(totalSavings)}</li>
        <li><strong>Annual Savings:</strong> ${formatCurrency(annualSavings)}</li>
        <li><strong>Implementation Cost:</strong> ${formatCurrency(annualSavings * 0.15)} (FinOps service)</li>
        <li><strong>Net Annual Benefit:</strong> ${formatCurrency(annualSavings * 0.85)}</li>
        <li><strong>ROI:</strong> ${((annualSavings * 0.85) / (annualSavings * 0.15) * 100).toFixed(0)}%</li>
      </ul>
    </div>

    <div class="cta-box">
      <h3 style="margin-top:0;">Ready to Optimize Your Cloud Costs?</h3>
      <p>Our FinOps experts can help you achieve these savings in 6-8 weeks.</p>
      <a href="https://devops.com.tr/#contact" class="cta-button">Schedule Free Consultation</a>
    </div>

    <div class="footer">
      <p><strong>DevOps.com.tr</strong></p>
      <p>Enterprise DevOps Transformation Experts</p>
      <p style="margin-top: 20px; font-size: 12px;">
        This analysis is based on conservative industry benchmarks and AWS Well-Architected Framework.
        <br>Actual results may vary based on your specific cloud environment and workload patterns.
      </p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'DevOps Tools <tools@devops.com.tr>',
        to: email,
        subject: `Your Cloud Cost Report - Save ${formatCurrency(annualSavings)}/year`,
        html: htmlContent,
      });

      // Also send notification to internal team
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'DevOps Tools <tools@devops.com.tr>',
        to: process.env.RESEND_TO_EMAIL || 'info@devops.com.tr',
        subject: `New Cloud Cost Analyzer Lead: ${email}`,
        html: `
          <h2>New Cloud Cost Analyzer Submission</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Current Monthly Spend:</strong> ${formatCurrency(totalMonthlySpend)}</p>
          <p><strong>Potential Savings:</strong> ${formatCurrency(totalSavings)}/month (${formatCurrency(annualSavings)}/year)</p>
          <p><strong>Savings Percent:</strong> ${savingsPercent.toFixed(1)}%</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <h3>Waste by Category:</h3>
          <ul>
            ${(wasteByCategory as WasteAnalysis[]).map((cat) =>
              `<li><strong>${cat.category}:</strong> ${formatCurrency(cat.wasteAmount)} (${cat.wastePercent}%)</li>`
            ).join('')}
          </ul>
        `,
      });
    } else {
      // Development mode: log to console
      console.log('Cost Report would be sent to:', email);
      console.log('Potential Savings:', formatCurrency(annualSavings), '/year');
    }

    return NextResponse.json(
      { success: true, message: 'Report sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cost report error:', error);
    return NextResponse.json(
      { error: 'Failed to send report' },
      { status: 500 }
    );
  }
}
