// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add your source file paths here
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      color:{
        'custom-blue' : '#148CF1'
      }
    },
  },
  plugins: [],
};
