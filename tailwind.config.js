/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      primary: "#c6162e",
      primary100: "#FFFCF8",
      secondary: "#000000",
      dark: "#000000",
      light: "#ffffff",
      success: "#28a745",
      info: "#17a2b8",
      warning: "#ffc107",
      danger: "#dc3545",
      white: "#ffffff",
      grayDark: "#4F5B67",
      grayLight: "#bbbbc4",
      default: "#B0B0B0",
      gray: {
        200: "#EAECEE",
        300: "#D6DADE",
        400: "#A8B0B9",
        600: "#4F5B67",
      },

      error: {
        main: "#E11D37",
        dark: "#FF5D61",
      },
      background: {
        main: "#FFFFFF",
        dark: "#000000",
      },
      surface: {
        main: "#FFFFFF",
        dark: "#1D1D1D",
      },
      black: "#14142B",
      lightBlack: "#333333",
      whiteGray: "#FAFAFB",
    },
    screens: {
      xs: "0px",
      sm: "600px",
      md: "769px",
      lg: "1025px",
      xl: "1281px",
      xxl: "1537px",
      "2K": "1921px",
    },
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      DEFAULT: "2rem",
      md: "0.75rem",
      lg: "1rem",
      full: "9999px",
    },
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    // fontWeightBold: 700,
    // fontWeightExtraBold: 900,
    spacing: {
      0: "0",
      px: "1px",
      0.5: "2px",
      1: "4px",
      1.5: "6px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      17: "68px",
      18: "72px",
      19: "76px",
      20: "80px",
      21: "84px",
      22: "88px",
      23: "92px",
      24: "96px",
      25: "100px",
      26: "104px",
      28: "112px",
      30: "120px",
      32: "128px",
      34: "136px",
      36: "144px",
      38: "152px",
      40: "160px",
      42: "168px",
      44: "176px",
      46: "184px",
      48: "192px",
      50: "200px",
      54: "216px",
      58: "232px",
      62: "248px",
      66: "264px",
      70: "280px",
      74: "296px",
      78: "312px",
      82: "328px",
      86: "344px",
      90: "360px",
      94: "376px",
      98: "392px",
      100: "400px",
    },
    extend: {},
  },
  plugins: [],
};
