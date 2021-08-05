/**
 *
 * Styles
 *
 */

import { alpha } from '@material-ui/core/styles';

const styles = (theme) => ({

  tabsBar: {
    minHeight: 40,
    width: '100%',
  },

  tabsContainer: {
    display: 'block',
  },

  separator: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
  },

  content: {
    height: 'calc(100% - 80px)',
    overflow: 'auto',
  },
});

export default styles;
