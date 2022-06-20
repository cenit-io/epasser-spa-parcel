import { alpha } from '@mui/material/styles';

/**
 *
 * Styles
 *
 */

const styles = (theme) => ({
  root: {
    display: 'flex',
    height: '100%',

    '& .MuiButton-root, .MuiTypography-button': {
      textTransform: 'none',
    },
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },

  mainTitle: {
    flexGrow: 1,
    '& img': {
      width: 160,
    },
  },

  mainContent: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 50,
  },

  logo: {
    width: 160,
    height: 44,
  },
});

export default styles;
