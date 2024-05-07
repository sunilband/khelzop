/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#6842FF", // primary color
        secondary: "#F0F1F9", // secondary color
        darkprimary: "#1D1F2C", // dark primary color
        darksecondary: "#222341", // dark secondary color
        darkBg: "#191A31",
        lightBG: "#EAEAEA",
      },
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
