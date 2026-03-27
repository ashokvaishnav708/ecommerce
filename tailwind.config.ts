import type { Config } from 'tailwindcss'

export default {
  content: [
    './app.vue',
    './app/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './layouts/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './plugins/**/*.{js,jsx,ts,tsx}',
    './composables/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
