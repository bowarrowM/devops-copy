import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface DimensionScore {
  dimension: string;
  score: number;
  level: string;
  color: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, dimensionScores, overallScore, overallLevel, recommendations } = body;

    // Validation
    if (!email || !dimensionScores || !overallScore || !overallLevel || !recommendations) {
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

    const getLevelColor = (level: string): string => {
      const colors: { [key: string]: string } = {
        'Initial': '#dc2626',
        'Developing': '#f59e0b',
        'Defined': '#eab308',
        'Managed': '#0ea5e9',
        'Optimizing': '#10b981',
      };
      return colors[level] || '#737373';
    };

    // HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your DevOps Maturity Assessment Report</title>
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
      border-bottom: 3px solid #a855f7;
    }
    .header h1 {
      color: #a855f7;
      margin: 0 0 10px 0;
      font-size: 32px;
    }
    .header p {
      color: #666;
      margin: 0;
      font-size: 16px;
    }
    .score-box {
      background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
      color: white;
      padding: 30px;
      border-radius: 12px;
      margin: 30px 0;
      text-align: center;
    }
    .score-box h2 {
      margin: 0 0 10px 0;
      font-size: 24px;
    }
    .score-box .big-number {
      font-size: 64px;
      font-weight: bold;
      margin: 20px 0 10px 0;
    }
    .score-box .level {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .score-box .description {
      font-size: 16px;
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
    .dimension-item {
      background-color: #fafafa;
      padding: 20px;
      margin: 15px 0;
      border-radius: 8px;
      border-left: 4px solid #a855f7;
    }
    .dimension-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .dimension-name {
      font-weight: bold;
      font-size: 16px;
      color: #171717;
    }
    .dimension-score {
      font-size: 24px;
      font-weight: bold;
    }
    .dimension-level {
      font-size: 14px;
      font-weight: 600;
      margin-top: 5px;
    }
    .progress-bar {
      background-color: #e5e5e5;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 10px;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #a855f7 0%, #ec4899 100%);
      border-radius: 4px;
    }
    .recommendation-box {
      background-color: #f0fdf4;
      border-left: 4px solid #10b981;
      padding: 20px;
      margin: 15px 0;
      border-radius: 4px;
    }
    .recommendation-box h4 {
      color: #10b981;
      margin: 0 0 10px 0;
      font-size: 16px;
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
      background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
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
      <h1>DevOps Maturity Assessment</h1>
      <p>Your Personalized Evaluation Report</p>
    </div>

    <div class="score-box">
      <h2>Your Overall Maturity Score</h2>
      <div class="big-number">${overallScore.toFixed(1)}</div>
      <div class="level">${overallLevel}</div>
      <div class="description">Out of 10.0 across 8 DevOps dimensions</div>
    </div>

    <div class="section">
      <h3>📊 Maturity Breakdown by Dimension</h3>
      ${(dimensionScores as DimensionScore[]).map((dim) => `
        <div class="dimension-item">
          <div class="dimension-header">
            <div>
              <div class="dimension-name">${dim.dimension}</div>
              <div class="dimension-level" style="color: ${getLevelColor(dim.level)}">${dim.level}</div>
            </div>
            <div class="dimension-score" style="color: ${getLevelColor(dim.level)}">${dim.score.toFixed(1)}</div>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${(dim.score / 10) * 100}%"></div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="section">
      <h3>💡 Top Priorities for Improvement</h3>
      ${(recommendations as string[]).map((rec, index) => `
        <div class="recommendation-box">
          <h4>Priority ${index + 1}</h4>
          <p style="margin: 0;">${rec}</p>
        </div>
      `).join('')}
    </div>

    <div class="section">
      <h3>🎯 Maturity Level Guide</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr style="background-color: #fef2f2; border-left: 4px solid #dc2626;">
          <td style="padding: 15px;"><strong>0-3: Initial</strong></td>
          <td style="padding: 15px;">Ad-hoc, manual processes with unpredictable results</td>
        </tr>
        <tr style="background-color: #fffbeb; border-left: 4px solid #f59e0b;">
          <td style="padding: 15px;"><strong>4-5: Developing</strong></td>
          <td style="padding: 15px;">Some automation, but inconsistent practices</td>
        </tr>
        <tr style="background-color: #fefce8; border-left: 4px solid #eab308;">
          <td style="padding: 15px;"><strong>6-7: Defined</strong></td>
          <td style="padding: 15px;">Standardized processes documented and followed</td>
        </tr>
        <tr style="background-color: #eff6ff; border-left: 4px solid #0ea5e9;">
          <td style="padding: 15px;"><strong>8-9: Managed</strong></td>
          <td style="padding: 15px;">Measured, monitored, and continuously improved</td>
        </tr>
        <tr style="background-color: #f0fdf4; border-left: 4px solid #10b981;">
          <td style="padding: 15px;"><strong>10: Optimizing</strong></td>
          <td style="padding: 15px;">World-class DevOps with continuous innovation</td>
        </tr>
      </table>
    </div>

    <div class="section">
      <h3>📈 Recommended Implementation Timeline</h3>
      <ol style="line-height: 2;">
        <li><strong>Months 1-2:</strong> Address your lowest-scoring dimension first (quick wins)</li>
        <li><strong>Months 3-4:</strong> Implement automation in top 2 priority areas</li>
        <li><strong>Months 5-6:</strong> Standardize processes and create documentation</li>
        <li><strong>Months 7-12:</strong> Continuous optimization and team training</li>
      </ol>
    </div>

    <div class="cta-box">
      <h3 style="margin-top:0;">Ready to Advance Your DevOps Maturity?</h3>
      <p>Schedule a free consultation to discuss your personalized roadmap and implementation plan.</p>
      <a href="https://devops.com.tr/#contact" class="cta-button">Schedule Free Consultation</a>
    </div>

    <div class="footer">
      <p><strong>DevOps.com.tr</strong></p>
      <p>Enterprise DevOps Transformation Experts</p>
      <p style="margin-top: 20px; font-size: 12px;">
        This assessment is based on industry best practices and DORA research.
        <br>Your scores reflect your current state and identify opportunities for improvement.
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
        subject: `Your DevOps Maturity Report - ${overallLevel} (${overallScore.toFixed(1)}/10)`,
        html: htmlContent,
      });

      // Also send notification to internal team
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'DevOps Tools <tools@devops.com.tr>',
        to: process.env.RESEND_TO_EMAIL || 'info@devops.com.tr',
        subject: `New Maturity Assessment Lead: ${email}`,
        html: `
          <h2>New Maturity Assessment Submission</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Overall Score:</strong> ${overallScore.toFixed(1)}/10 (${overallLevel})</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <h3>Dimension Scores:</h3>
          <ul>
            ${(dimensionScores as DimensionScore[]).map((dim) =>
              `<li><strong>${dim.dimension}:</strong> ${dim.score.toFixed(1)} (${dim.level})</li>`
            ).join('')}
          </ul>
        `,
      });
    } else {
      // Development mode: log to console
      console.log('Assessment Report would be sent to:', email);
      console.log('Overall Score:', overallScore.toFixed(1), overallLevel);
    }

    return NextResponse.json(
      { success: true, message: 'Report sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Assessment report error:', error);
    return NextResponse.json(
      { error: 'Failed to send report' },
      { status: 500 }
    );
  }
}
