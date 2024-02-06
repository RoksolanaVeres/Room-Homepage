/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "450px",
      md: "550px",
      lg: "800px",
      xl: "1120px",
    },
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
      },
      backgroundImage: {
        "hero-desktop-1": "url('./assets/images/desktop-image-hero-1.jpg')",
        "hero-desktop-2": "url('./assets/images/desktop-image-hero-2.jpg')",
        "hero-desktop-3": "url('./assets/images/desktop-image-hero-3.jpg')",
        "hero-mobile-1": "url('./assets/images/mobile-image-hero-1.jpg')",
        "hero-mobile-2": "url('./assets/images/mobile-image-hero-2.jpg')",
        "hero-mobile-3": "url('./assets/images/mobile-image-hero-3.jpg')",
        "about-dark": "url('./assets/images/image-about-dark.jpg')",
        "about-light": "url('./assets/images/image-about-light.jpg')",
      },
    },
  },
  plugins: [],
};
