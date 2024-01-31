import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {content: '1440px'},
    },
    colors: {
      'indigo-ink': '#283655',
      blueberry: '#4D648D',
      white: '#ffffff',
      'light-grey': '#f0f0f0',
      grey: '#bbb',
      black: '#050301',
      red: '#D0312D',
    },
    fontSize: {
      13: [
        '13px',
        {
          lineHeight: '18px',
        },
      ],
      15: [
        '15px',
        {
          lineHeight: '20px',
        },
      ],
      18: [
        '18px',
        {
          lineHeight: '24px',
        },
      ],
      22: [
        '22px',
        {
          lineHeight: '26px',
        },
      ],
      36: [
        '36px',
        {
          lineHeight: '42px',
        },
      ],
      48: [
        '48px',
        {
          lineHeight: '54px',
        },
      ],
      72: [
        '72px',
        {
          lineHeight: '72px',
        },
      ],
    },
    fontFamily: {
      barlow: ['var(--font-barlow)', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
