/**
 *
 * Styles
 *
 */

import { alpha } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    '& .MuiListItem-gutters': {
      paddingLeft: 8,
      paddingRight: 8,
    },

    '& .MuiListItem-root': {
      paddingTop: 4,
      paddingBottom: 4,
    },
  },

  logo: {
    color: theme.palette.text.primary,
    backgroundColor: alpha(theme.palette.primary.main, 0.5),
  },

  info: {
    color: theme.palette.text.secondary,
    backgroundColor: alpha(theme.palette.secondary.main, 0.5),
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: '90%',
  },
});

export default styles;
