module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        facebook: {
          primary: "#1977F2",
          light: "#E3E6E9",
          normal: "#64676B",
          dark: "#050505",
        },
        instagram: {
          primary: "#262626",
          secondary: "#8E8E8E",
          tertiary: "#64676B",
          blue: "#0095F6",
          body: "#FAFAFA",
        },
      },
      backgroundColor: () => ({
        facebook: {
          primary: "#1977F2",
          light: "#E3E6E9",
          normal: "#64676B",
          dark: "#050505",
        },
        instagram: {
          primary: "#262626",
          secondary: "#8E8E8E",
          tertiary: "#64676B",
        },
      }),
      height: {
        18: "4.5rem",
      },
      screens: {
        'mobile': "480px",
        'tablet': "910px",
        "2xl": "1536px",
      },
      gridTemplateColumns: {
        header: "1fr 268px 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
