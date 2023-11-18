// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fafafa", // Set your primary color (text color) to white
    },
    background: {
      default: "#0f172a", // Set the default background color to black
    },
  },
});

export default theme;
