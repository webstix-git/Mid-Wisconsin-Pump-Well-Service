import { verifyTurnstileToken } from '@/lib/turnstile';

const FORM_SUBMIT_URL = process.env.FORM_SUBMIT_URL || process.env.NEXT_PUBLIC_FORM_SUBMIT_URL || '';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  if (!FORM_SUBMIT_URL) {
    return Response.json({ ok: false, error: 'Form endpoint is not configured.' }, { status: 500 });
  }

  const fullName = String(body?.fullName || body?.name || '').trim();
  const phone = String(body?.phone || '').trim();
  const email = String(body?.email || '').trim();
  const message = String(body?.message || '').trim();
  const token = body?.turnstileToken || body?.['cf-turnstile-response'] || '';

  if (!fullName || !phone || !email || !message) {
    return Response.json({ ok: false, error: 'Please complete all required fields.' }, { status: 400 });
  }

  const ip = request.headers.get('cf-connecting-ip')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || undefined;

  const result = await verifyTurnstileToken(token, ip);
  if (!result.success) {
    return Response.json({ ok: false, error: result.error || 'Verification failed.' }, { status: 400 });
  }

  let upstream;
  try {
    upstream = await fetch(FORM_SUBMIT_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: fullName,
        fullName,
        phone,
        email,
        message,
        'cf-turnstile-response': token,
        turnstileToken: token
      })
    });
  } catch {
    return Response.json({ ok: false, error: 'Could not reach the form endpoint. Please try again.' }, { status: 502 });
  }

  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok || data.success === false) {
    return Response.json({
      ok: false,
      error: data.error || data.message || 'Form submission failed. Please try again.'
    }, { status: upstream.ok ? 400 : 502 });
  }

  return Response.json({
    ok: true,
    redirect_url: data.redirect_url || '/thank-you'
  });
}
