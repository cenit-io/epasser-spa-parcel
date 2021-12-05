/**
 *
 * Styles
 *
 */

import baseStyles from '../AbstractField/styles.jss';

const styles = (theme) => ({
  ...baseStyles(theme),

  root: {
    margin: theme.spacing(1),
    width: `calc(${100 / 6 * 2}% - ${theme.spacing(2)}px)`,

    '& .MuiOutlinedInput-root': {
      height: 56,
    },

    '& .Mui-disabled': {
      cursor: 'no-drop',
    },

    '& legend': {
      maxWidth: 1000
    },

    '& .MuiSwitch-root': {
      left: 'calc(50% - 39px)',
    }
  },
});

export default styles;
