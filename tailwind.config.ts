import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        ubuntu: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        montseratt: ['"Montseratt"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
