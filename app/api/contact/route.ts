import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message, consent } = body;

    // Validation
    if (!name || !email || !message || !consent) {
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

    const timestamp = new Date().toISOString();

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Send to internal team
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Contact Form <contact@devops.com.tr>',
        to: process.env.RESEND_TO_EMAIL || 'info@devops.com.tr',
        subject: `New Contact Form: ${name}${company ? ` - ${company}` : ''}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border: 1px solid #e5e5e5;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .field {
      margin-bottom: 20px;
      padding: 15px;
      background: #fafafa;
      border-radius: 4px;
    }
    .label {
      font-weight: bold;
      color: #0ea5e9;
      display: block;
      margin-bottom: 5px;
    }
    .value {
      color: #171717;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">${email}</span>
      </div>
      ${phone ? `
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${phone}</span>
      </div>
      ` : ''}
      ${company ? `
      <div class="field">
        <span class="label">Company:</span>
        <span class="value">${company}</span>
      </div>
      ` : ''}
      ${service ? `
      <div class="field">
        <span class="label">Service:</span>
        <span class="value">${service}</span>
      </div>
      ` : ''}
      <div class="field">
        <span class="label">Message:</span>
        <div class="value" style="margin-top: 5px; white-space: pre-wrap;">${message}</div>
      </div>
      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 14px; color: #666;">
        <strong>Timestamp:</strong> ${timestamp}
      </div>
    </div>
  </div>
</body>
</html>
        `,
      });

      // Send confirmation to user
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'DevOps.com.tr <contact@devops.com.tr>',
        to: email,
        subject: 'Thank you for contacting DevOps.com.tr',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding: 30px;
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
      color: white;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    .content {
      padding: 20px;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
      color: white;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 6px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0;">Thank You!</h1>
  </div>
  <div class="content">
    <p>Hi ${name},</p>
    <p>Thank you for reaching out to DevOps.com.tr. We've received your message and will get back to you within 24 hours.</p>
    <p>In the meantime, feel free to explore our free tools:</p>
    <ul>
      <li><strong>ROI Calculator:</strong> Calculate potential savings from DevOps automation</li>
      <li><strong>Maturity Assessment:</strong> Evaluate your DevOps practices across 8 dimensions</li>
      <li><strong>Cloud Cost Analyzer:</strong> Identify cloud waste and optimization opportunities</li>
    </ul>
    <div style="text-align: center;">
      <a href="https://devops.com.tr/tools" class="button">Explore Free Tools</a>
    </div>
    <p style="margin-top: 30px;">Best regards,<br><strong>DevOps.com.tr Team</strong></p>
  </div>
</body>
</html>
        `,
      });
    } else {
      // Development mode: log to console
      console.log('Contact form submission:', {
        name,
        email,
        phone,
        company,
        service,
        message,
        consent,
        timestamp,
      });
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
