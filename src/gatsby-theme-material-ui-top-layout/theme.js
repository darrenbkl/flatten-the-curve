import { createMuiTheme, colors } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    h4: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 500,
    },
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: 16,
  },

  palette: {
    primary: {
      // main: `#4e0000`,
      // main: `#bd3d3d`,
      main: `#9c3131`,
    },
    secondary: {
      main: `#19857b`,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: `#fff`,
    },
  },
});

export default theme;
