export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        input: "0 63px 59px rgba(26,33,188,.1)",
        course: "0 40px 20px rgba(0,0,0,.15)",
        testimonial1: "0 5.54348px 11.087px rgba(89,104,118,.05)",
        testimonial2: "5.54348px 38.8043px 110.87px rgba(89,104,118,.15)",
      },
      backgroundImage: {
        "newsletter-bg": "url('/images/newsletter/bgFile.png')",
        "newsletter-bg-2": "url('/images/newsletter/bgFile.png')",
      },
    },
  },
  plugins: [],
};
