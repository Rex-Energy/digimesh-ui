import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
