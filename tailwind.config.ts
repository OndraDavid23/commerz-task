import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        cbgreen:"#002e3c",
        cbfont:"#d4e0e0",
        cbyellow:"#ffd700",
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;
