/**
 *
 * Styles
 *
 */

import { alpha } from '@mui/material/styles';

const styles = (theme) => ({

  root: {
    display: 'inline',
    marginRight: theme.spacing(1),
  },

  buttonClose: {
    right: -10,
    display: 'inline-flex',
    width: '0.7em',
    height: '0.7em',
    backgroundColor: 'transparent',
  },

  buttonCloseVisible: {
    visibility: 'visible',

    '&:hover': {
      backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    },
  },

  buttonCloseHidden: {
    visibility: 'hidden',
  },

  content: {
    display: 'inline',
  },

});

export default styles;
