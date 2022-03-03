/**
 *
 * Styles
 *
 */

import { alpha } from '@mui/material/styles';

const styles = (theme) => ({

  subMenu: {
    '& .MuiAccordionSummary-root': {
      backgroundColor: alpha(theme.palette.primary.main, 0.5),

      '& .MuiTypography-button': {
        textTransform: 'uppercase !important',
      }
    },

    '& .MuiAccordionDetails-root': {
      padding: 8,
    },

    '&.Mui-expanded': {
      marginTop: 4,
      marginBottom: 4,
    },
  },

});

export default styles;
