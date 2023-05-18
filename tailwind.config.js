/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores Primárias
        'dark-blue': '#003459',
        'dark-blueLighter': '#0078CD',
        'dark-blueMedium': '#00528C',
        'dark-blueDarker': '#002A48',

        // Cores Secundárias
        'mon-yellow': '#F7DBA7',
        'mon-yellowLighter': '#FCEED5',
        'mon-yellowMedium': '#F1DO92',
        'mon-yellowDarker': '#EEC77E',

        // Cores usuais
        'pink-red': '#FF64F',
        'green-light': '#34C759',
        'orange-shine': '#FF912C',
        'blue-sea': '#00A7E7',
        'black-gray': '#242B33',
        'black-grayLighter': '#667479',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
