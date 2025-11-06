import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, inputs, results } = body;

    // Validation
    if (!email || !inputs || !results) {
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

    const formatNumber = (num: number): string => {
      return new Intl.NumberFormat('en-US').format(num);
    };

    const {
      deploymentsPerWeek,
      hoursPerDeployment,
      failureRate,
      downtimeHours,
      teamSize,
      avgSalary,
      cloudCosts,
    } = inputs;

    const {
      currentTimeWaste,
      optimizedTime,
      timeSavedHours,
      timeSavedPercent,
      costSavedPerYear,
      cloudSavings,
      totalSavings,
      deploymentImprovement,
      downtimeReduction,
      roi,
      breakEvenMonths,
    } = results;

    // HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your DevOps ROI Report</title>
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
      border-bottom: 3px solid #0ea5e9;
    }
    .header h1 {
      color: #0ea5e9;
      margin: 0 0 10px 0;
      font-size: 32px;
    }
    .header p {
      color: #666;
      margin: 0;
      font-size: 16px;
    }
    .highlight-box {
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
      color: white;
      padding: 30px;
      border-radius: 12px;
      margin: 30px 0;
      text-align: center;
    }
    .highlight-box h2 {
      margin: 0 0 10px 0;
      font-size: 24px;
    }
    .highlight-box .big-number {
      font-size: 48px;
      font-weight: bold;
      margin: 20px 0;
    }
    .highlight-box .sub-text {
      font-size: 18px;
      opacity: 0.9;
    }
    .section {
      margin: 30px 0;
    }
    .section h3 {
      color: #171717;
      font-size: 20px;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e5e5e5;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .metric-card {
      background-color: #fafafa;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #0ea5e9;
    }
    .metric-label {
      font-size: 14px;
      color: #666;
      margin-bottom: 5px;
    }
    .metric-value {
      font-size: 24px;
      font-weight: bold;
      color: #171717;
    }
    .improvement-item {
      background-color: #f0fdf4;
      border-left: 4px solid #10b981;
      padding: 15px;
      margin: 10px 0;
      border-radius: 4px;
    }
    .improvement-item strong {
      color: #10b981;
      display: block;
      margin-bottom: 5px;
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
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
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
    @media only screen and (max-width: 600px) {
      body {
        padding: 10px;
      }
      .container {
        padding: 20px;
      }
      .metrics-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your DevOps ROI Report</h1>
      <p>Personalized analysis based on your inputs</p>
    </div>

    <div class="highlight-box">
      <h2>Total Annual Savings</h2>
      <div class="big-number">${formatCurrency(totalSavings)}</div>
      <div class="sub-text">ROI: ${roi.toFixed(0)}% | Break-even: ${breakEvenMonths} months</div>
    </div>

    <div class="section">
      <h3>📊 Your Current Situation</h3>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-label">Deployments per Week</div>
          <div class="metric-value">${deploymentsPerWeek}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Hours per Deployment</div>
          <div class="metric-value">${hoursPerDeployment}h</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Failure Rate</div>
          <div class="metric-value">${failureRate}%</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Team Size</div>
          <div class="metric-value">${teamSize}</div>
        </div>
      </div>
      <p><strong>Current time waste:</strong> ${formatNumber(currentTimeWaste)} hours/year spent on deployments and failures</p>
    </div>

    <div class="section">
      <h3>🚀 After DevOps Transformation</h3>

      <div class="improvement-item">
        <strong>⏱️ Time Savings</strong>
        Reduce deployment time from ${formatNumber(currentTimeWaste)}h/year to ${formatNumber(optimizedTime)}h/year
        <br>Save ${formatNumber(timeSavedHours)} hours annually (${timeSavedPercent.toFixed(0)}% reduction)
      </div>

      <div class="improvement-item">
        <strong>💵 Cost Savings</strong>
        Labor savings: ${formatCurrency(costSavedPerYear)}/year
        <br>Cloud savings: ${formatCurrency(cloudSavings)}/year
        <br><strong>Total: ${formatCurrency(totalSavings)}/year</strong>
      </div>

      <div class="improvement-item">
        <strong>📈 Performance Improvements</strong>
        Deployment speed: ${deploymentImprovement.toFixed(0)}% faster
        <br>Downtime reduction: ${downtimeReduction.toFixed(0)}% less downtime
      </div>
    </div>

    <div class="section">
      <h3>💡 Recommended Next Steps</h3>
      <ol style="line-height: 2;">
        <li><strong>CI/CD Pipeline:</strong> Automate builds, tests, and deployments to reduce deployment time by 90%</li>
        <li><strong>Infrastructure as Code:</strong> Eliminate manual infrastructure changes and ensure consistency</li>
        <li><strong>Monitoring & Observability:</strong> Catch issues before they become outages</li>
        <li><strong>Cloud Optimization:</strong> Reduce cloud costs through rightsizing and automation</li>
      </ol>
    </div>

    <div class="cta-box">
      <h3 style="margin-top:0;">Ready to Achieve These Results?</h3>
      <p>Schedule a free 30-minute consultation to discuss your DevOps transformation roadmap.</p>
      <a href="https://devops.com.tr/#contact" class="cta-button">Schedule Free Consultation</a>
    </div>

    <div class="footer">
      <p><strong>DevOps</strong></p>
      <p>Enterprise DevOps Transformation Experts</p>
      <p style="margin-top: 20px; font-size: 12px;">
        This report was generated based on conservative industry benchmarks from DORA research.
        <br>Actual results may vary based on your specific situation.
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
        subject: `Your DevOps ROI Report - Save ${formatCurrency(totalSavings)}/year`,
        html: htmlContent,
      });

      // Also send notification to internal team
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'DevOps Tools <tools@devops.com.tr>',
        to: process.env.RESEND_TO_EMAIL || 'info@devops.com.tr',
        subject: `New ROI Calculator Lead: ${email}`,
        html: `
          <h2>New ROI Calculator Submission</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Potential Savings:</strong> ${formatCurrency(totalSavings)}/year</p>
          <p><strong>Team Size:</strong> ${teamSize}</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <h3>Full Report Sent to User</h3>
        `,
      });
    } else {
      // Development mode: log to console
      console.log('ROI Report would be sent to:', email);
      console.log('Total Savings:', formatCurrency(totalSavings));
    }

    return NextResponse.json(
      { success: true, message: 'Report sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('ROI report error:', error);
    return NextResponse.json(
      { error: 'Failed to send report' },
      { status: 500 }
    );
  }
}
