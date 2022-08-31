/**
 *
 * Styles
 *
 */

import baseStyles from '../AbstractPage/styles.jss';

const styles = (theme) => ({
  ...baseStyles(theme),

  root: {
    width: '100%',
    height: '100%',

    '& .MuiButton-root, .MuiTypography-button': {
      textTransform: 'none',
    },
  },

  toolbar: {
    minHeight: 36,

    '& .MuiIconButton-root': {
      padding: 6,
    },
  },

  content: {
    height: 'calc(100% - 36px)',
    overflow: 'auto',
  },

  contentFullSize: {
    height: '100%',
    overflow: 'auto',
  },
});

export default styles;
