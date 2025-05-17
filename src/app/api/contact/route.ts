import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const email = process.env.NEXT_PUBLIC_EMAIL ?? '';
const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);
const LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 1 day

interface RateLimitData {
  ipRecords: Record<string, number>;
  _lastCleaned?: number;
}

declare global {
  // eslint-disable-next-line no-var
  var rateLimitData: RateLimitData | undefined;
}

function getRateLimitData(): RateLimitData {
  if (!globalThis.rateLimitData) {
    globalThis.rateLimitData = {
      ipRecords: {},
      _lastCleaned: Date.now(),
    };
  }

  return globalThis.rateLimitData;
}

function saveRateLimitData(data: RateLimitData) {
  globalThis.rateLimitData = data;
}

function cleanOldData(data: RateLimitData): RateLimitData {
  const now = Date.now();
  const lastCleaned = data._lastCleaned || 0;

  if (now - lastCleaned < ONE_DAY_MS) {
    return data;
  }

  const cutoffTime = now - ONE_DAY_MS;
  const cleanedRecords: Record<string, number> = {};

  for (const [ip, timestamp] of Object.entries(data.ipRecords)) {
    if (timestamp > cutoffTime) {
      cleanedRecords[ip] = timestamp;
    }
  }

  const cleanedData: RateLimitData = {
    ipRecords: cleanedRecords,
    _lastCleaned: now,
  };

  saveRateLimitData(cleanedData);

  return cleanedData;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  let rateLimitData = getRateLimitData();
  rateLimitData = cleanOldData(rateLimitData);

  const now = Date.now();
  const lastRequestTime = rateLimitData.ipRecords[ip];

  if (lastRequestTime && now - lastRequestTime < LIMIT_WINDOW_MS) {
    return NextResponse.json({ error: 429 }, { status: 429 });
  }

  try {
    const body = await req.json();
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

    rateLimitData.ipRecords[ip] = now;
    saveRateLimitData(rateLimitData);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
