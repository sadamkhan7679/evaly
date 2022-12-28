import { Roboto,Noto_Sans } from "@next/font/google";
import { Theme } from "@mui/system";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const fontWeights = {
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontWeightExtraBold: 900,
};

export const typography = {
  fontFamily: notoSans.style.fontFamily,
  fontSize: 14,
  fontWeightLight: fontWeights.fontWeightLight,
  fontWeightRegular: fontWeights.fontWeightRegular,
  fontWeightMedium: fontWeights.fontWeightMedium,
  fontWeightBold: fontWeights.fontWeightBold,
  fontWeightExtraBold: fontWeights.fontWeightExtraBold,
  h1: {
    fontSize: "6rem",
    fontWeight: fontWeights.fontWeightExtraBold,
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
    // Make the font size responsive
  },
  h2: {
    fontSize: "3.75rem",
    fontWeight: fontWeights.fontWeightExtraBold,
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
  },
  h3: {
    fontSize: "3rem",
    fontWeight: fontWeights.fontWeightExtraBold,
    lineHeight: 1.167,
    letterSpacing: "0em",
  },
  h4: {
    fontSize: "2.125rem",
    fontWeight: fontWeights.fontWeightExtraBold,
    lineHeight: 1,
    letterSpacing: "0.00735em",
  },
  h5: {
    fontSize: "1.5rem",
    fontWeight: fontWeights.fontWeightExtraBold,
    lineHeight: 1,
    letterSpacing: "0em",
  },
  h6: {
    fontSize: "1.25rem",
    fontWeight: fontWeights.fontWeightBold,
    lineHeight: 1,
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "0.00938em",
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: "0.00714em",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "0.00938em",
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "0.01071em",
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "0.02857em",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "0.03333em",
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "0.08333em",
  },
};
