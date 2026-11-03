// Phones zoom out to fit the wider server-rendered layout, which inflates innerWidth;
// clientWidth is the real layout width (excluding any desktop scrollbar), so use it.
let cached = 0;

export default function viewportWidth() {
  if (typeof document === 'undefined') return cached || 1280;
  cached = document.documentElement.clientWidth || window.innerWidth;
  return cached;
}

/** Use for page state init: 1280 on SSR/first paint; after measure, soft navigations reuse the cache so the layout does not jump. */
export function initialViewportWidth() {
  return cached || 1280;
}
