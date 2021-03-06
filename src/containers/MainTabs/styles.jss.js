/**
 *
 * Styles
 *
 */

const styles = (theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },

  tabsBar: {
    minHeight: 45,
    width: '100%',
  },

  tabsContainer: {
    display: 'block',
  },

  tabPanel: {
    height: 'calc(100% - 1px)',
  },

  separator: {
    margin: 0,
  },

  content: {
    height: 'calc(100% - 25px)',
    overflow: 'hidden',
  },
});

export default styles;
