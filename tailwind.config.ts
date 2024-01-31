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
  },
  plugins: [],
};
export default config;
