/**
 *
 * Styles
 *
 */

import baseStyles from '../AbstractField/styles.jss';

const styles = (theme) => ({
  ...baseStyles(theme),

  selectBox: {
    display: 'flex',

    '& .MuiChip-root': {
      marginRight: theme.spacing(0.5),
    }
  },

});

export default styles;
