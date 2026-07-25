import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOG_POSTS } from './data/blog-posts.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'thank-you',
    renderMode: RenderMode.Client
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => BLOG_POSTS.map(post => ({ slug: post.slug }))
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
