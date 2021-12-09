/**
 *
 * Styles
 *
 */

const styles = (theme) => ({

  drawer: (props) => ({
    width: props.size,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    display: props.open ? 'block' : 'none',
  }),

  drawerPaper: (props) => ({
    width: props.size,
  }),

  drawerContainer: {
    overflow: 'auto',
  },

});

export default styles;
