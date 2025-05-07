import { 
  ThemeOptions,
} from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface TypeBackground {
    container: string;
  }
}

export interface IThemeConfiguration {
  themeOptions: ThemeOptions;
  cssVariables: { [key: string]: string };
}