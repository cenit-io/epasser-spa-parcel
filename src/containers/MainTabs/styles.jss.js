/**
 *
 * Styles
 *
 */

import { alpha } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },

  tabsBar: {
    minHeight: 40,
    width: '100%',
  },

  tabsContainer: {
    display: 'block',
  },

  tabPanel: {
    height: '100%',
  },

  separator: {
    margin: 0,
  },

  content: {
    height: 'calc(100% - 25px)',
    overflow: 'auto',
  },
});

export default styles;
