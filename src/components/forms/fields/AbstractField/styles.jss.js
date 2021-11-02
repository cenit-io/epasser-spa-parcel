/**
 *
 * Styles
 *
 */

import baseStyles from '../../../../styles';

const styles = (theme) => ({
  ...baseStyles(theme),

  root: {
    margin: theme.spacing(1),
    width: `calc(33% - ${theme.spacing(2)}px)`,

    '& .MuiOutlinedInput-root': {
      height: 56,
    },

    '& .MuiListItemIcon-root':{
      minWidth: 36,
      paddingTop: 4,
    },

    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    }
  },

});

export default styles;
