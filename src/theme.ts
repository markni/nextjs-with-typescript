import { createTheme } from '@mui/material/styles';
import React from "react";

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    tertiary: {main: string, contrastText: string};
    highlight: {main: string};
  }

  interface PaletteOptions {
    tertiary?: {main: string, contrastText: string};
    highlight: {main: string};
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    highlight: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    total: React.CSSProperties;
    highlight: React.CSSProperties;
    hint: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    total?: React.CSSProperties;
    highlight?: React.CSSProperties;
    hint?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    total: true;
    highlight: true;
    hint: true;
  }
}


// Create a theme instance.
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: 'div', // https://css-tricks.com/html-for-subheadings-and-headings/
          subtitle2: 'div',
          body1: 'span',
          body2: 'span',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
          padding: 15,
          border: '1px solid #EAEAEA'

        },
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: 'rgba(0, 0, 0, 0.87)',
          background: 'white',
          borderRadius: 16,
          boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
          border: '1px solid #EAEAEA',
          padding: 16,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 44,
          height: 44,
          fontSize: 14,
          fontWeight: 700,
          lineHeight: 1.5,
          padding: '9px 20.5px',
          textDecoration: 'none',
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
      main: '#333000',
    },
    secondary: {
      main: '#1F7F79',
    },

    tertiary: { //color for third button style
      main: '#E2F7F2',
      contrastText: '#000000',
    },

    highlight: {
      main: '#4EAE57',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: undefined,
    h2: { // use for title of each page, we only use h3 for now
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.5,
      marginTop: '8px'
    },
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    button: {
      textTransform: 'none',
      fontWeight: 700,
      lineHeight: 1.5,
      textDecoration: 'underline',
      cursor: 'pointer',
      fontSize: 14,
    },
    body1: {
      fontSize: 14,
    },
    subtitle1: { //the subtitle above h2
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1,
    },
    subtitle2: { //row titles, section titles
      fontSize: 14,
      lineHeight: 1.5,
      color: '#757575',
      fontWeight: 500,
    },
    hint: {
      fontWeight: 400,
      fontSize: 12,
      color: '#979797',
      lineHeight: 1.5
    },
    total: {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.5
    },
    highlight: {
      fontWeight: 600,
      fontSize: 14,
      color: '#4EAE57',
    }
  },
});

export default theme;
