/**
 *
 * Styles
 *
 */
import baseStyles from '../../../../components/AbstractPageDetails/styles.jss';

const styles = (theme) => ({
  ...baseStyles(theme),

  details: {
    boxShadow: 'none',
  },

  status: {
    textTransform: 'uppercase',
  },

});

export default styles;
