/**
 *
 * Styles
 *
 */

import { alpha } from '@mui/material/styles';

const styles = (theme) => ({

  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.secondary[theme.palette.mode], 0.15),
    marginRight: theme.spacing(1),

    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary[theme.palette.mode], 0.25),
    },

    '& .MuiInputBase-input': {
      padding: theme.spacing(2 / 3, 2 / 3, 2 / 3, 0),
      color: theme.palette.secondary.contrastText,
    },

    '& .MuiSvgIcon-root': {
      fill: theme.palette.secondary.contrastText,
    },
  },

  searchIcon: {
    color: theme.palette.secondary.contrastText,
  },

});

export default styles;
