import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdown } from 'vite-plugin-markdown'
import type { Mode } from 'vite-plugin-markdown'
import path from 'path'

/** The strict CSP meta in index.html blocks the inline <style>/<script> tags
 *  Vite injects during `vite dev`, leaving the page unstyled. Production
 *  builds use external assets from 'self', so the CSP only hurts dev —
 *  strip it there and keep it in builds. */
const stripCspInDev = {
  name: 'strip-csp-in-dev',
  apply: 'serve' as const,
  transformIndexHtml(html: string) {
    return html.replace(/\s*<meta http-equiv="Content-Security-Policy"[^>]*>/, '');
  },
};

export default defineConfig({
  base: '/',
  assetsInclude: ['**/*.JPG'],
  plugins: [react(), markdown({ mode: ['html'] as Mode[] }), stripCspInDev],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
