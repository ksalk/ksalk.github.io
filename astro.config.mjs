import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://ksalk.pl',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified(),
    shikiConfig: {
      theme: 'dracula',
      wrap: false,
    },
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'prepend', properties: { className: ['anchor'] } }],
    ],
  },
  integrations: [
    mdx(),
    sitemap(),
  ],
});
