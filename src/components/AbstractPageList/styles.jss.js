/**
 *
 * Styles
 *
 */

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },

  toolbar: {
    minHeight: 36,

    '& .MuiIconButton-root': {
      padding: 6,
    }
  },

  mainTable: {
    height: 'calc(100% - 36px)',
    overflow: 'auto',
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
