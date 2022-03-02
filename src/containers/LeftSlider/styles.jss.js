/**
 *
 * Styles
 *
 */

const styles = (theme) => ({

  root: (props) => ({
    width: props.size,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    display: props.open ? 'block' : 'none',
    zIndex: theme.zIndex.appBar - 1,
  }),

  drawer: (props) => ({
    width: props.size,
  }),

  container: {
    overflow: 'auto',
  },

});

export default styles;
