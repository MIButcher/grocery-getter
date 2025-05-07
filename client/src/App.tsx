import blueyGif from "./assets/bluey-unicorse.gif";
import { setApiUri } from "./utilities/api_configurations";
import { useAtom, Provider } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Count from "./components/Count";
import Weather from "./components/Weather";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { defaultTheme, darkTheme } from "./themes/index";
import React from "react";
import { Button } from "@mui/material";
import { DarkModeIcon, ContrastIcon } from "./imports/MaterialUIIcons";


const darkModeAtom = atomWithStorage("darkMode", false);

const createCustomTheme = (themeOptions: any, cssVariables: any) => ({
  ...createTheme(themeOptions),
  cssVariables,
});

const themeDefault = createCustomTheme(defaultTheme.themeOptions, defaultTheme.cssVariables);
const themeDark = createCustomTheme(darkTheme.themeOptions, darkTheme.cssVariables);

function App() {
  const [darkMode, setdarkMode] = useAtom(darkModeAtom);
  const theme = darkMode ? themeDefault : themeDark;

  setApiUri(import.meta.env.VITE_API_URI);

  React.useEffect(() => {
    if (theme.cssVariables) {
      Object.entries(theme.cssVariables).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value as string);
      });
    }
    document.documentElement.style.setProperty('--background-container', theme.palette.background.container);
    document.documentElement.style.setProperty('--text-primary', theme.palette.text.primary);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="main-container">
        <img src={blueyGif} className="blueyGif" alt="Unicorse dance" />
        <h1>Ready to Code!</h1>
        <h2>Vite + React {darkMode ? "default" : "dark"} theme</h2>
        <Button onClick={() => setdarkMode(!darkMode)}>
          {darkMode ? <DarkModeIcon /> : <ContrastIcon />} toggle theme
        </Button>
        <div className="card-row">
          <Provider>
            <Count counterId={1} />
          </Provider>

          <Provider>
            <Count counterId={2} />
          </Provider>
        </div>

        <Weather />
      </div>
    </ThemeProvider>
  );
}

export default App;
