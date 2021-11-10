/**
 *
 * Styles
 *
 */

import baseStyles from '../AbstractField/styles.jss';

const styles = (theme) => ({
  ...baseStyles(theme),

  selectBox: {
    display: 'inline',
    marginRight: theme.spacing(4),
    textOverflow: 'ellipsis',

    '& .MuiChip-root': {
      marginRight: theme.spacing(0.5),
    }
  },

});

export default styles;
