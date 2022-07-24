/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/imgSrc/homeBack.png')",
        'home-background-phone': "url('/imgSrc/homeBackPhone.png')",
        'nav-background': "url('/imgSrc/navBack.png')",
        'about-background': "url('/imgSrc/aboutBack.png')",
        'first-information-background': "url('/imgSrc/firstInformationBack.png')",
        'about-background-phone': "url('/imgSrc/aboutBackPhone.png')",
        'first-information-background-phone': "url('/imgSrc/firstInformationBackPhone.png')",
        'about-text-background': "url('/imgSrc/aboutTextBack.png')",
        'second-information-background': "url('/imgSrc/secondInformationBack.png')",
        'second-information-background-phone': "url('/imgSrc/secondInformationBackPhone.png')",
        'prices-background': "url('/imgSrc/pricesBack.png')",
        'prices-background-phone': "url('/imgSrc/pricesBackPhone.png')",
      }
    },
  },
  plugins: [],
}
