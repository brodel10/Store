import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      // mode: paletteType,
      primary: {
        main: "#1F2D3D",
        light: "#506772",
        dark: "#001623",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#01A299",
        light: "#33B5AA",
        dark: "#007F7A",
        contrastText: "#ffffff",
      },
      // background: {
      //   default: isLightMode ? "#F3F4F6" : "#121212",
      //   paper: isLightMode ? "#ffffff" : "#1E1E1E",
      // },
      // text: {
      //   primary: isLightMode ? "#1F2D3D" : "#E4E6E8",
      //   secondary: isLightMode ? "#7C8B9E" : "#A4A6A8",
      // },
      // error: {
      //   main: isLightMode ? "#E57373" : "#FF8A80",
      // },
      // warning: {
      //   main: isLightMode ? "#FFB74D" : "#FFD180",
      // },
      // info: {
      //   main: isLightMode ? "#64B5F6" : "#4A90E2",
      // },
      // success: {
      //   main: isLightMode ? "#81C784" : "#66BB6A",
      // },
      // ...(paletteType === "dark" && {}),

      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default App;
