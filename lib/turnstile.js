export function getTurnstileSiteKey() {
  return process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || '';
}

export function getTurnstileSecretKey() {
  return process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY || '';
}

export async function verifyTurnstileToken(token, remoteip) {
  const secret = getTurnstileSecretKey();
  if (!secret) {
    return { success: false, error: 'Turnstile secret key is not configured.' };
  }
  if (!token) {
    return { success: false, error: 'Missing Turnstile token.' };
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteip) body.set('remoteip', remoteip);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body
  });

  const data = await res.json();
  return {
    success: !!data.success,
    error: data.success ? null : (data['error-codes'] || []).join(', ') || 'Turnstile verification failed.',
    data
  };
}
