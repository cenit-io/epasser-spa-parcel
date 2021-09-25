/**
 *
 * Styles
 *
 */

const styles = (theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },

  mainTitle: {
    flexGrow: 1,
    '& img': {
      width: 160,
    }
  },

  mainContent: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 50,
  },
});

export default styles;
