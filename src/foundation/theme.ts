import {Roboto} from "@next/font/google";
import {createTheme} from "@mui/material/styles";
import {themeColors} from "@src/foundation/colors";
import {typography} from "@src/foundation/typography";
import {components} from "src/foundation/components";
import {breakpoints} from "@src/foundation/breakpoints";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
// @ts-ignore
const theme = createTheme({
  palette: {
    primary: {
      main: themeColors.primary,
      contrastText: themeColors.light,
    },
    secondary: {
      main: themeColors.secondary,
      contrastText: themeColors.light,
    },
    error: {
      main: themeColors.danger,
      contrastText: themeColors.light,
    },
    warning: {
      main: themeColors.warning,
      contrastText: themeColors.light,
    },
    info: {
      main: themeColors.info,
      contrastText: themeColors.light,
    },
    success: {
      main: themeColors.success,
      contrastText: themeColors.light,
    },
    grey: {},
    text: {
      primary: themeColors.dark,
      secondary: themeColors.grayDark,
    },
    background: {
      default: themeColors.light,
      paper: themeColors.white,
    },
  },
  typography: typography,
  components: components,
  breakpoints: {
    values: breakpoints,
  },
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    "2K": true;
    // mobile: true; // adds the `mobile` breakpoint
    // tablet: true;
    // laptop: true;
    // desktop: true;
  }
}

export default theme;
