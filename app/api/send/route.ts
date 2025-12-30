// import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Sending email to:', 'zainabgilani2226@gmail.com');
    console.log('Data:', { name, email, company, message });

    const { data, error } = await resend.emails.send({
      from: 'TechVision Contact <onboarding@resend.dev>', // Use your verified domain if you have one
      to: ['zainabgilani2226@gmail.com'], // Replace with your email or keep this for testing
      subject: `New Contact from ${name}`,
      html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
      // react: EmailTemplate({ 
      //   firstName: name,
      //   email: email,
      //   company: company,
      //   message: message
      // }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
