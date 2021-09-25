/**
 *
 * Styles
 *
 */

import { alpha } from '@material-ui/core/styles';

const styles = (theme) => ({

  subMenu: {
    '& .MuiAccordionSummary-root, & .MuiAvatar-root': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.light,
      textTransform: 'uppercase',
    },

    '& .MuiAccordionDetails-root': {
      display: 'block',
      padding: 8,
    },

    '& .MuiListItem-gutters': {
      paddingLeft: 8,
      paddingRight: 8,
    },

    '& .MuiListItem-root': {
      paddingTop: 4,
      paddingBottom: 4,
    }
  },

});

export default styles;
