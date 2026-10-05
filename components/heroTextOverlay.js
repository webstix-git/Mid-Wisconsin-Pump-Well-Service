// Right edge of the rendered text (not the block box, which can be wider when lines wrap),
// measured from the left edge of the hero section.
export function textRight(el) {
  const sec = el && el.closest('section');
  if (!sec) return 0;
  const r = document.createRange();
  r.selectNodeContents(el);
  return Math.round(r.getBoundingClientRect().right - sec.getBoundingClientRect().left);
}

export function textOverlay(right, w) {
  const R = right + (w < 600 ? 16 : 28), f = w < 600 ? 120 : 240, max = w < 768 ? .7 : .92;
  const c = k => `rgba(255,255,255,${+(max * k).toFixed(3)})`;
  const at = (k, x) => `${c(k)} ${Math.round(R + f * x)}px`;
  return `linear-gradient(90deg,${c(1)} 0px,${at(1, 0)},${at(.85, .2)},${at(.6, .42)},${at(.33, .64)},${at(.13, .84)},${at(0, 1)})`;
}
