/**
 *
 * Styles
 *
 */

const styles = (theme) => ({

  drawer: props => ({
    width: props.leftSlider.size,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    display: props.leftSlider.open ? 'block' : 'none',
  }),

  drawerPaper: props => ({
    width: props.leftSlider.size,
  }),

  drawerContainer: {
    overflow: 'auto',
  },

});

export default styles;
