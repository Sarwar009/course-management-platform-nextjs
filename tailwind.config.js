/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom extensions can go here
    },
  },
  plugins: [
    require('daisyui'),
  ],
  // DaisyUI Config
  daisyui: {
    themes: ["corporate", "dark"], // এখানে 'corporate' ব্যবহার করা হয়েছে
    darkTheme: "dark",
  },
}