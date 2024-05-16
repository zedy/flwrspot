import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BC8CD2',
        primaryLight: '#D3B9DF',
        primaryFaded: '#ECE1F1',
        warning: '#F4BD50',
        red: '#F45050',
        peach: {
          light: '#ECBCB3',
          normal: '#EAA79E',
          darker: '#DF9186',
        },
        main: {
          0: '#FFFFFF',
          5: '#F2F2F2',
          12: '#E0E0E0',
          25: '#BDBDBD',
          50: '#828282',
          75: '#4F4F4F',
          100: '#000000',
        },
      },
      screens: {
        xs: '420px',
        lg: '1220px',
      },
      fontFamily: {
        ubuntu: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        montseratt: ['"Montseratt"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
