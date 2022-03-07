/**
 *
 * Styles
 *
 */

import { alpha } from '@mui/material/styles';

const styles = (theme) => ({

  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(1),

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    '& .MuiInputBase-input': {
      padding: theme.spacing(2 / 3, 2 / 3, 2 / 3, 0),
      color: theme.palette.primary.contrastText,
    },

    '& .MuiSvgIcon-root': {
      fill: theme.palette.primary.contrastText,
    },
  },

  searchIcon: {
    color: theme.palette.common.white,
  },

});

export default styles;
