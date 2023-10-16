import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#71d831',
          secondary: '#2413b5',
          accent: '#5340b2',
          neutral: '#242334',
          'base-100': '#f6f8f8',
          info: '#7aa3e6',
          success: '#21a17d',
          warning: '#9c6f07',
          error: '#eb6a66',
        },
      },
    ],
  },

  plugins: [require('daisyui')],
}
export default config
