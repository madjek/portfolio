import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.teal,
      },
    },
  },

  plugins: [],
} satisfies Config;
