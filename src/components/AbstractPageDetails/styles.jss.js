/**
 *
 * Styles
 *
 */
import baseStyles from '../AbstractModule/styles.jss';

const styles = (theme) => ({
  ...baseStyles(theme),

  root: {
    width: '100%',
    height: '100%',
  },

  actions: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(2.5),
  },

});

export default styles;