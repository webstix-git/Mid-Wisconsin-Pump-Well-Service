import { absoluteUrl, INDEXABLE_PATHS } from '@/lib/site';

export default function sitemap() {
  const lastModified = new Date();
  return INDEXABLE_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/contact' ? 0.9 : 0.8
  }));
}
