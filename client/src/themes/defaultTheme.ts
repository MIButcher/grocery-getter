import { IThemeConfiguration } from "./themeConfiguration";

export const defaultTheme: IThemeConfiguration = {
  themeOptions: {
    palette: {
      primary: {
        main: "#365173",
      },
      secondary: {
        main: "#0071EB",
      },
      background: {
        default: "#FFFFFF",
        container: "#E0E0E0",
      },
      text: {
        primary: "#365173",
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              border: '0rem',
              borderRadius: '0.5rem',
              textTransform: 'none',
              padding: '0.4rem 1.2rem',
              fontSize: '1rem',
              color: '#000000',
              backgroundColor: '#F9F9F9',
              '&:hover': {
                backgroundColor: '#D3D3D3',
              },
            },
          },
        ],
      },
    },
  },
  cssVariables: {
    '--table-background-color': '#FFFFFF',
    '--table-head-background-color': '#F1F1F1'
  }
};