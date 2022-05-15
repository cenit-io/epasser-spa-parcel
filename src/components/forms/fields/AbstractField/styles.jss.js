/**
 *
 * Styles
 *
 */

import baseStyles from '../../../../styles';

const styles = (theme) => ({
  ...baseStyles(theme),

  root: (props) => ({

    margin: theme.spacing(1),
    width: `calc(${(100 / 6) * 2}% - ${theme.spacing(2)})`,

    '& .MuiOutlinedInput-root': {
      height: 56,
    },

    '& .MuiInputBase-multiline': {
      height: '100%',
      display: 'block',

      '& textarea': {
        height: '100%',
        overflowY: 'auto',
      },
    },

    '& .MuiListItemIcon-root': {
      minWidth: 36,
      paddingTop: 4,
    },

    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },

    '& .Mui-disabled': {
      cursor: 'no-drop',
    },

    '& legend': {
      maxWidth: 1000,
    },

    '& .MuiInputLabel-asterisk': {
      color: 'red',
    },
  }),
});

export default styles;
