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
        navy: {
          DEFAULT: '#010c1c',
          light: '#0a1e3a',
          dark: '#000810',
        },
        amber: {
          DEFAULT: '#F5A623',
          dark: '#d48e10',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
