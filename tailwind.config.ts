import type { Config } from 'tailwindcss'

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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Base
        'S_BLACK': '#282828',

        // Primary_blue
        'P50': '#eff2fe',
        'P75': '#bdcaf9',
        'P100': '#bdcaf9',
        'P200': '#7993f3',
        'P300': '#5d7df0',
        'P400': '#4158a8',
        'P500': '#394c92',

        // Secondary
        'S50': '#f6fffd',
        'S75': '#d9fff7',
        'S100': '#cafff4',
        'S200': '#b3ffef',
        'S300': '#a3ffec',
        'S400': '#72b3a5',
        'S500': '#399985',

        // Orange
        'O50': '#faf2ee',
        'O75': '#eac9b7',
        'O100': '#e1b39a',
        'O200': '#d4926e',
        'O300': '#cb7c50',
        'O400': '#8e5738',
        'O500': '#7c4c31',

        // Backgorund
        'B100': '#757f93',
        'B200': '#293245',
        'B300': '#181f2e',
        'B400': '#0e1521',
        'B500': '#090d14',
        'BG': '#06080d',

        // Warning
        'W50': '#fcebeb',
        'W75': '#f3acac',
        'W100': '#ee8a8a',
        'W200': '#e65757',
        'W300': '#e13535',
        'W400': '#9e2525',
        'W500': '#892020',

        // Success
        'Su50': '#ecf8ee',
        'Su75': '#b2e1b9',
        'Su100': '#92d59c',
        'Su200': '#63c272',
        'Su300': '#43b655',
        'Su400': '#2f7f3b',
        'Su500': '#296f34',
      }
    },
    fontFamily: {
      sans: [
        'Spoqa Han Sans Neo',
      ],
    },
  },
  plugins: [],
}
export default config
