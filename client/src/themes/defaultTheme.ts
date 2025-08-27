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
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: '#F9F9F9',
          },
          list: {
            backgroundColor: '#F9F9F9',
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: '#F9F9F9',
            '&.Mui-selected': {
              backgroundColor: '#D3D3D3',
              color: '#000000',
            },
            '&:hover': {
              backgroundColor: '#D3D3D3',
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: '24px',
            color: '#365173',
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            // Applies to the Dialog's Paper container
            backgroundColor: '#F9F9F9',
            borderRadius: 12,
            padding: '24px',
            maxWidth: '600px',
            width: '100%',
          },
          root: {
            // Applies to the outermost Dialog wrapper
            backdropFilter: 'blur(4px)',
          },
        },
      },
    },
  },
  cssVariables: {
    '--table-background-color': '#F9F9F9',
    '--table-head-background-color': '#D3D3D3'
  }
};