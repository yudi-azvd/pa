import path from 'path'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    paths: {
      base: dev ? '' : '/pa',
    },
    adapter: adapter(),
    alias: {
      '@/*': path.resolve('src/*'),
    },
  },
}

export default config
