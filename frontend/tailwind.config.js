/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient (from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: { max: "250px" },
        mg: { max: "400px", min: "300px" },
        ms: { max: "600px", min: "400px" },
        sm: { max: "600px", min: "250px" },
        sd: { max: "640px", min: "600px" },
        md: { max: "1000px", min: "600px" },
        mh: { max: "1030px", min: "1000px" },
        ml: { min: "1000px" },
        lp: { min: "1300px" }
      },
    },
  },
  plugins: [],
};
