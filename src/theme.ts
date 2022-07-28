import { createTheme } from '@mui/material/styles';
import React from "react";

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    tertiary: {main: string, contrastText: string};
    highlight: {main: string};
    gray1: {main: string};
    gray2: {main: string};
  }

  interface PaletteOptions {
    tertiary?: {main: string, contrastText: string};
    highlight: {main: string};
    gray1: {main: string};
    gray2: {main: string};
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    highlight: true;
    gray1: true;
    gray2: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    total: React.CSSProperties;
    highlight: React.CSSProperties;
    hint: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    total?: React.CSSProperties;
    highlight?: React.CSSProperties;
    hint?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    total: true;
    highlight: true;
    hint: true;
  }
}


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
          padding: 16,
          border: '1px solid #EAEAEA'
        },
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontSize: 18,
          lineHeight: 1.5,
          padding: 16,
        },
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '16px !important', //must keep !important: https://github.com/mui/material-ui/issues/27851
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '16px 16px 16px 120px',
        }
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
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: 'rgba(0, 0, 0, 0.6)',
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: 'rgba(0, 0, 0, 0.54)',
          }
        }
      }
    },
  },
  palette: {
    primary: {
      main: '#333000',
    },
    secondary: {
      main: '#1F7F79',
    },
    info: {
      main: '#016FD0'
    },

    //custom colors
    tertiary: { //color for third button style
      main: '#E2F7F2',
      contrastText: '#000000',
    },
    highlight: {
      main: '#4EAE57',
    },
    gray1: {
      main: '#B2B2B2',
    },
    gray2: {
      main: '#F0F0F0',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: undefined,
    h2: { // use for title of each page, we only use h2 for now
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.5,
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
    subtitle2: { //row titles, section titles etc
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
