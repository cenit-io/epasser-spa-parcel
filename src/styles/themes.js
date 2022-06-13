// import Poppins from '../fonts/poppins/poppins-v13-latin-regular.woff2';

/**
 * A themes with custom primary and secondary colors.
 */

const themes = {
  default: {
    palette: {
      // mode: 'dark',
      mode: 'light',
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
      action: {
        hoverOpacity: 0.3,
      },
    },
    typography: {
      useNextVariants: true,
    },
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          colorPrimary: {
            color: 'black',
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          standard: {
            borderStyle: 'solid',
            borderWidth: '1px',
          },
          standardWarning: {
            borderColor: '#ff9800',
          },
          standardError: {
            borderColor: '#ef5350',
          },
          standardInfo: {
            borderColor: '#03a9f4',
          },
          standardSuccess: {
            borderColor: '#4caf50',
          },
        },
      },
    },
  },

  'cenit-io': {
    palette: {
      primary: {
        light: 'rgba(0, 0, 0, 0.55)',
        main: 'rgba(0, 0, 0, 0.8)',
        dark: 'rgba(0, 0, 0, 1)',
        contrastText: 'rgba(255, 255, 255, 1)',
      },
      secondary: {
        light: 'rgba(100, 100, 100, 0.55)',
        main: 'rgba(100, 100, 100, 0.8)',
        dark: 'rgba(100, 100, 100, 1)',
        contrastText: 'rgba(255, 255, 255, 1)',
      },
    },
  },

  ecapi: {
    palette: {
      primary: {
        light: 'rgba(225, 245, 254, 1)',
        main: 'rgba(27, 98, 129, 1)',
        dark: 'rgba(69, 90, 100, 1)',
        contrastText: 'rgba(255, 255, 255, 1)',
      },
      secondary: {
        light: 'rgba(225, 245, 254, 0.55)',
        main: 'rgba(27, 98, 129, 0.55)',
        dark: 'rgba(69, 90, 100, 0.55)',
        contrastText: 'rgba(255, 255, 255, 1)',
      },
    },
  },

  grey: {
    palette: {
      primary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E0E0E0',
        main: '#757575',
        dark: '#424242',
        contrastText: '#fff',
      },
    },
  },

  cyan: {
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
    },
  },

  'sky-blue': {
    palette: {
      primary: {
        light: '#E3F2FD',
        main: '#2196F3',
        dark: '#1565C0',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E0F2F1',
        main: '#00BFA5',
        dark: '#00796B',
        contrastText: '#fff',
      },
    },
  },

  'purple-red': {
    palette: {
      primary: {
        light: '#EDE7F6',
        main: '#673AB7',
        dark: '#512DA8',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#C2185B',
        contrastText: '#fff',
      },
    },
  },

  'green-orange': {
    palette: {
      primary: {
        light: '#F1F8E9',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FFF8E1',
        main: '#FF8F00',
        dark: '#E65100',
        contrastText: '#fff',
      },
    },
  },

  magenta: {
    palette: {
      primary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#D81B60',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FFF8E1',
        main: '#FFA000',
        dark: '#FF6F00',
        contrastText: '#fff',
      },
    },
  },

  purple: {
    palette: {
      primary: {
        light: '#EDE7F6',
        main: '#AB47BC',
        dark: '#8E24AA',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#006064',
        contrastText: '#fff',
      },
    },
  },

  blue: {
    palette: {
      primary: {
        light: '#E1F5FE',
        main: '#3F51B5',
        dark: '#283593',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E8EAF6',
        main: '#03A9F4',
        dark: '#0277BD',
        contrastText: '#fff',
      },
    },
  },

  orange: {
    palette: {
      primary: {
        light: '#FFF3E0',
        main: '#EF6C00',
        dark: '#E65100',
        contrastText: '#fff',
      },
      secondary: {
        light: '#F3E5F5',
        main: '#9C27B0',
        dark: '#7B1FA2',
        contrastText: '#fff',
      },
    },
  },

  red: {
    palette: {
      primary: {
        light: '#FFEBEE',
        main: '#EF5350',
        dark: '#E53935',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff',
      },
    },
  },

  'yellow-blue': {
    palette: {
      primary: {
        light: '#E1F5FE',
        main: '#039BE5',
        dark: '#01579B',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FFF3E0',
        main: '#FF9800',
        dark: '#E65100',
        contrastText: '#fff',
      },
    },
  },

  'pink-blue': {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#006064',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff',
      },
    },
  },

  'yellow-cyan': {
    palette: {
      primary: {
        light: '#FFF3E0',
        main: '#F9A825',
        dark: '#F57F17',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#006064',
        contrastText: '#fff',
      },
    },
  },

  'blue-cyan': {
    palette: {
      primary: {
        light: '#E8EAF6',
        main: '#3F51B5',
        dark: '#283593',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#00838F',
        contrastText: '#fff',
      },
    },
  },

  'green-purple': {
    palette: {
      primary: {
        light: '#EDE7F6',
        main: '#7C4DFF',
        dark: '#311B92',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E8F5E9',
        main: '#00C853',
        dark: '#1B5E20',
        contrastText: '#fff',
      },
    },
  },

  'pink-green': {
    palette: {
      primary: {
        light: '#DCEDC8',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#D81B60',
        contrastText: '#fff',
      },
    },
  },

  gold: {
    palette: {
      primary: {
        light: '#FFF9C4',
        main: '#FF9100',
        dark: '#FF6D00',
        contrastText: '#fff',
      },
      secondary: {
        light: '#EFEBE9',
        main: '#8D6E63',
        dark: '#4E342E',
        contrastText: '#fff',
      },
    },
  },
};

export default themes;
