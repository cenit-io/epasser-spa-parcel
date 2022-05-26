/**
 *
 * Styles
 *
 */

const styles = (theme) => ({

  subMenu: {
    '& .MuiAccordionSummary-root': {
      backgroundColor: theme.palette.primary[theme.palette.mode],

      '& .MuiTypography-button': {
        textTransform: 'uppercase !important',
      },
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
