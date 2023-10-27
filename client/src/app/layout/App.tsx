import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";

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
      ...(paletteType === "dark" && {
        primary: {
          main: "#90caf9",
          // light: "#5e43f3",
          // dark: "#001623",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#f48fb1",
          // light: "#a688fa",
          // dark: "#007F7A",
          contrastText: "#ffffff",
        },
      }),

      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#3f3f3f",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default App;
