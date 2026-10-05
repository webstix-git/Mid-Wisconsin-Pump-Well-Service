// Phones zoom out to fit the wider server-rendered layout, which inflates innerWidth;
// clientWidth is the real layout width (excluding any desktop scrollbar), so use it.
export default function viewportWidth() {
  return document.documentElement.clientWidth || window.innerWidth;
}
