/**
 * A theme with custom primary and secondary color.
 */

import { createTheme } from '@material-ui/core/styles';
import Poppins from '../fonts/poppins/poppins-v13-latin-regular.woff2';

const poppins = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `local('Poppins'),local('Poppins-Regular'),url(${Poppins}) format('woff2')`,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export default createTheme({
  palette: {
    primary: {
      light: '#E0F7FA',
      main: '#009688',
      dark: '#00695C',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F1F8E9',
      main: '#689F38',
      dark: '#33691E',
      contrastText: '#fff',
    },
    error: {
      light: '#FFC0AF',
      main: '#FF604F',
      dark: '#BF200F',
      contrastText: '#fff',
    },
    action: {
      hoverOpacity: 0.3,
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [poppins],
      },
    },
  },
});
