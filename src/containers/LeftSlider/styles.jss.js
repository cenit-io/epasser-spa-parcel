/**
 *
 * Styles
 *
 */

import { alpha } from '@material-ui/core/styles';

const styles = (theme) => ({

  drawer: props => ({
    width: props.width,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    display: props.leftSliderState && props.leftSliderState.open ? 'block' : 'none',
  }),

  drawerPaper: props => ({
    width: props.width,
  }),

  drawerContainer: {
    overflow: 'auto',
  },

});

export default styles;
