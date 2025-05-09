import { setApiUri } from "./utilities/api_configurations";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { defaultTheme, darkTheme } from "./themes/index";
import React from "react";
import AppRoutes from "./AppRoutes";
import CardLinedHeader from "./components/CardLinedHeader";
import { IconButton } from "@mui/material";
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
      <CardLinedHeader
        titleText='Grocery Getter'
        sx={{
          backgroundColor: theme.palette.background.container,
          height: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1rem',
          justifyContent: 'space-between',
          borderRadius: 'unset',
        }}>
          <IconButton onClick={() => setdarkMode(!darkMode)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {darkMode ? <DarkModeIcon /> : <ContrastIcon />}
          </IconButton>
        </CardLinedHeader>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
