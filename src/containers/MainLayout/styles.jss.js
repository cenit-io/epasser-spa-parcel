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

  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    boxShadow: `0 0 5px 0 ${alpha(theme.palette.primary.main, 0.8)}`,
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
});

export default styles;
