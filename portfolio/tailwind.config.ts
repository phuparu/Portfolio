import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            black:{
                DEFAULT: "#000000",
                100: "#000319",
            }
        }
    },
  },
  plugins: [],
};

export default config;
