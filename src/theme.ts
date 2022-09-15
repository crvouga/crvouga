import { createTheme, responsiveFontSizes } from "@mui/material";
import { green } from "@mui/material/colors";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: '"Montserrat", sans-serif',
    },
    palette: {
      mode: "dark",
      primary: green,
    },
    components: {
      MuiButton: {
        defaultProps: {},
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
    },
  })
);

export default theme;