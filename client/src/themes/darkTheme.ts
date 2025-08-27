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
        defaultProps: {
          variant: 'contained',
        },
        variants: [
          {
            props: { variant: 'contained' },
            style: {border: '0rem',
              borderRadius: '0.5rem',
              textTransform: 'none',
              padding: '0.4rem 1.2rem',
              fontSize: '1rem',
              color: '#8DCDF7',
              backgroundColor: '#3F5975',
              '&:hover': {
                backgroundColor: '#31455C',
              },
            },
          },
        ],
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: '#28343C',
          },
          list: {
            backgroundColor: '#28343C',
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: '#28343C',
            '&.Mui-selected': {
              backgroundColor: '#31455C',
              color: '#8DCDF7',
            },
            '&:hover': {
              backgroundColor: '#31455C',
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: '24px',
            color: '#8DCDF7',
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            '& svg': {
              color: '#8DCDF7',
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            // Applies to the Dialog's Paper container
            backgroundColor: '#28343C',
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
    "--table-background-color": "#365173",
    "--table-head-background-color": "#31455C"
  }
};