/** Keep the last two words together to avoid a single-word widow line. */
export function noWidow(text) {
  if (typeof text !== 'string' || !text.trim()) return text;
  return text.replace(/\s+(\S+)\s*$/u, '\u00A0$1');
}
