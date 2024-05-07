import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { min: '0px', max: '767px' },
      // => @media (min-width: 640px) { ... }

      md: { min: '768px', max: '1279px' },
      // => @media (min-width: 1024px) { ... }

      lg: { min: '1280' },
      // => @media (min-width: 1280px) { ... }
    },
    transitionProperty: {
      height: 'height',
    },
  },
  plugins: [],
}
export default config
