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
              color: '#000000',
              backgroundColor: '#F9F9F9',
              '&:hover': {
                backgroundColor: '#B0C4DE',
              },
            },
          },
        ],
      },
    },
  },
  cssVariables: {
    "--table-background-color": "#3F5975",
    "--table-head-background-color": "#31455C"
  }
};