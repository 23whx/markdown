import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a', // 深绿
          dark: '#15803d',
          light: '#22c55e',
        },
        secondary: {
          DEFAULT: '#dcfce7', // 淡绿
          dark: '#bbf7d0',
        },
        accent: {
          DEFAULT: '#fecaca', // 淡红
          dark: '#fca5a5',
        },
      },
    },
  },
  plugins: [typography],
};

