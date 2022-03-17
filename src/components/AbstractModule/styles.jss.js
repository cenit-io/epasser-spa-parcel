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

  table: {
    '& .MuiTableCell-head': {
      backgroundColor: theme.palette.primary.light,
      paddingTop: 8,
      paddingBottom: 8,
    },
  },
});

export default styles;
