/**
 *
 * Styles
 *
 */

const styles = (theme) => ({
  toolbar: {
    minHeight: 52,

    '& .MuiIconButton-root': {
      padding: 6,
    }
  },

  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});

export default styles;
