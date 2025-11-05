import { NextResponse } from 'next/server';

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

    // In production, integrate with email service (Resend, SendGrid, etc.)
    // For now, log to console and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      service,
      message,
      consent,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace with actual email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@devops.com.tr',
    //   to: 'info@devops.com.tr',
    //   subject: `New Contact Form: ${name} - ${company}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

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
