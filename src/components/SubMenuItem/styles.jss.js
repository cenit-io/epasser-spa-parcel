/**
 *
 * Styles
 *
 */

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
    backgroundColor: theme.palette.secondary[theme.palette.mode],
  },

  info: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.secondary[theme.palette.mode],
    fontSize: '90%',
  },
});

export default styles;
