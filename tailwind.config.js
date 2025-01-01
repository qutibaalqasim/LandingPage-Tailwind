/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Update to your project's file paths
    "node_modules/flowbite/**/*.js", // Include Flowbite
  ],
  theme: {
   
    
    extend: {
      daisyui: {
        themes: ["light"],
      },
      screens:{
        "2md": "960px"
      },
      colors:{
        primary: '#7E3AF2',
        secondaryText: '#6B7280',
        mainText:'#111928',
        mainpage:'#F9FAFB',
      },
      fontFamily:{
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}

