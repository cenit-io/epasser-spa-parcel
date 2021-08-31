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
    }
  },

});

export default styles;
