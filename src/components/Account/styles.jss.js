/**
 *
 * Styles
 *
 */

const styles = (theme) => ({

  root: {
    overflow: 'auto',
  },

  account: {
    '& .MuiChip-root': {
      display: 'flex',
      margin: theme.spacing(1),
      justifyContent: 'flex-start',

      '& .MuiChip-label .MuiTypography-root': {
        lineHeight: 1,

        '&.MuiTypography-subtitle2': {
          fontStyle: 'italic',
          fontSize: '85%',
        },
      }
    },
  },

  avatar: {
    backgroundColor: theme.palette.primary.main
  }
});

export default styles;
