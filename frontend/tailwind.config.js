/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-primary',
    'text-primary',
    'hover:text-primary',
    'hover:bg-primary',
    'group-hover:bg-primary/80',
    'bg-black/40',
    'bg-white/20',
    'group-hover:scale-105',
    'group-hover:scale-110',
    'bg-cover',
    'bg-center',
    'bg-no-repeat',
    'aspect-square',
    'aspect-auto',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#0287B8',
        'background-light': '#f6f7f8',
        'background-dark': '#101922',
        'foreground': '#171717',
        'foreground-dark': '#ededed',
      },
      fontFamily: {
        'display': ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}