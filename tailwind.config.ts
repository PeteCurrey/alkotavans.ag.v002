import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        alkota: {
          forest:   '#3A4D29',
          sage:     '#5E6E49',
          chalk:    '#F4F1EC',
          obsidian: '#191C14',
          stone:    '#7A7D6B',
          copper:   '#96613F',
          linen:    '#EAE6DE',
          white:    '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-space-mono)', 'monospace'],
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  plugins: [],
}
export default config
