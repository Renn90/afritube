/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lt: '350px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        "max-w-xl": "1400px",
      },

      colors: {
        primary: '#6AC4FF',
        secBlue: '#F0F9FF',
        'btn': '#01878F', 
        'videoListDetailColor': '#EEEFEF',
        'bgCount' :'#6AC4FF',
        'bgGrad' :'#DEDEDE',
        'linkGray': '#898989',
        'bgNot' : '#F0F9FF'
    },
    },
  },
  plugins: [],
}