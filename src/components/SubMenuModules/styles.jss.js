/**
 *
 * Styles
 *
 */

import { alpha } from '@material-ui/core/styles';

const styles = (theme) => ({

  subMenu: {
    '& .MuiAccordionSummary-root': {
      color: theme.palette.text.primary,
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
      textTransform: 'uppercase',
    },

    '& .MuiAccordionDetails-root': {
      display: 'block',
      padding: 8,
    },

    '&.Mui-expanded': {
      marginTop: 4,
      marginBottom: 4,
    }
  },

});

export default styles;
