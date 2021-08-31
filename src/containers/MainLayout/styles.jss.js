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
      width: 64,
    }
  },

  mainContent: props => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 50,
    width: props.leftSliderState && props.leftSliderState.open ? `calc(100% - ${props.leftSliderSize}px)` : '100%',
  }),
});

export default styles;
