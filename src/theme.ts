import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    tertiary: {main: string, contrastText: string};
  }

  interface PaletteOptions {
    tertiary?: {main: string, contrastText: string};
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}


// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '44px',
          height: '44px',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '20px',
          padding: '9px 20.5px',
          ":disabled": {
            color: '#FFFFFF',
            background: '#B2B2B2'
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#1F7F79',

    },
    tertiary: {
      main: '#E2F7F2',
      contrastText: '#000000',
    }

  },
  typography: {
    fontFamily: 'Poppins',
  },
});

export default theme;
