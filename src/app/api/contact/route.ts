import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const email = process.env.NEXT_PUBLIC_EMAIL ?? '';
const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: email,
      subject: `New message from ${body.name}: ${body.subject}`,
      text: `From: ${body.name} <${body.email}>\n\n${body.message}`,
      replyTo: body.email,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
