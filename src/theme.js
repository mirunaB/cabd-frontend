import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#adefd1ff",
      dark: "#adefd1ff",
    },
    secondary: {
      main: "#00203fff",
      dark: "#00203fff",
    },
    grey: {
      main: "#358597",
      dark: "#358597",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 3,
        width: 120,
        height:40,
        padding: 5,
      },
      label: {
        color: "#00203fff",
        padding: "5px 0px",
        
      },
    },
  },
});

export default theme;
