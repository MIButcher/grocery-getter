# MUI Theme usage in the Project

This project uses Material-UI (MUI) for theming. The themes are defined in the `client/src/themes` directory and are applied using the `ThemeProvider` component from MUI. MUI is also used for styling DataTables and Buttons throughout the project.

## Theme Configuration

The themes are configured using the `IThemeConfiguration` interface. Each theme includes `themeOptions` and `cssVariables`.

## Applying Themes

Themes are applied in the `App.tsx` file using the `ThemeProvider` component. The `createCustomTheme` function combines the MUI theme options with custom CSS variables.

### Example: App Component

```tsx
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { defaultTheme, darkTheme } from "./themes/index";
import React from "react";

const createCustomTheme = (themeOptions, cssVariables) => ({
  ...createTheme(themeOptions),
  cssVariables,
});

const themeDefault = createCustomTheme(defaultTheme.themeOptions, defaultTheme.cssVariables);
const themeDark = createCustomTheme(darkTheme.themeOptions, darkTheme.cssVariables);

function App() {
  const [darkMode, setdarkMode] = useAtom(darkModeAtom);
  const theme = darkMode ? themeDefault : themeDark;

  React.useEffect(() => {
    if (theme.cssVariables) {
      Object.entries(theme.cssVariables).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
    document.documentElement.style.setProperty('--background-container', theme.palette.background.container);
    document.documentElement.style.setProperty('--text-primary', theme.palette.text.primary);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ...existing code... */}
    </ThemeProvider>
  );
}

export default App;
```

## Switching Themes

The theme can be toggled using a button that updates the `darkMode` state. This state is stored using `atomWithStorage` from the `jotai` library to persist the theme preference.

### Example: Toggle Theme Button

```tsx
<button onClick={() => setdarkMode(!darkMode)}>toggle theme</button>
```

## Adding Components to Themes

You can customize the styles of MUI components by adding them to the `components` property in the theme configuration. This allows you to override the default styles of MUI components.

### Example: Customizing Button Component

```typescript
import { IThemeConfiguration } from "./themeConfiguration";

export const darkTheme: IThemeConfiguration = {
  themeOptions: {
    palette: {
      primary: {
        main: "#8DCDF7",
      },
      secondary: {
        main: "#FF8000",
      },
      background: {
        default: "#28343C",
        container: "#365173",
      },
      text: {
        primary: "#8DCDF7",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  },
  cssVariables: {
    "--table-background-color": "#3F5975",
    "--table-head-background-color": "#31455C"
  }
};
```

## Removing MUI Theming

If you want to remove MUI theming from the project, follow these steps:

1. **Remove ThemeProvider**: Remove the `ThemeProvider` component from the `App.tsx` file.

### Example: App Component without ThemeProvider

```tsx
import blueyGif from "./assets/bluey-unicorse.gif";
import { setApiUri } from "./utilities/api_configurations";
import { useAtom, Provider } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Count from "./components/Count";
import Weather from "./components/Weather";
import "./App.css";
import React from "react";

const darkModeAtom = atomWithStorage("darkMode", false);

function App() {
  const [darkMode, setdarkMode] = useAtom(darkModeAtom);

  setApiUri(import.meta.env.VITE_API_URI);

  return (
    <div className="main-container">
      <img src={blueyGif} className="blueyGif" alt="Unicorse dance" />
      <h1>Ready to Code!</h1>
      <h2>Vite + React {darkMode ? "default" : "dark"} theme</h2>
      <button onClick={() => setdarkMode(!darkMode)}>toggle theme</button>
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
  );
}

export default App;
```

2. **Remove Theme Files**: Delete the theme files from the `client/src/themes` directory.

3. **Remove MUI Imports**: Remove the MUI-related imports from the `App.tsx` file and any other files where MUI theming is used.

By following these steps, you can remove MUI theming from your project.