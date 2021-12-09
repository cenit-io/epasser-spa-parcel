/**
 *
 * Styles
 *
 */

const styles = (theme) => ({
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  col1: {
    width: `calc(${(100 / 6) * 1}% - ${theme.spacing(2)}px)`,
  },

  col2: {
    width: `calc(${(100 / 6) * 2}% - ${theme.spacing(2)}px)`,
  },

  col3: {
    width: `calc(${(100 / 6) * 3}% - ${theme.spacing(2)}px)`,
  },

  col4: {
    width: `calc(${(100 / 6) * 4}% - ${theme.spacing(2)}px)`,
  },

  col5: {
    width: `calc(${(100 / 6) * 5}% - ${theme.spacing(2)}px)`,
  },

  col6: {
    width: `calc(${(100 / 6) * 6}% - ${theme.spacing(2)}px)`,
  },

  fullWidth: {
    width: '100%',
  },
});

export default styles;
