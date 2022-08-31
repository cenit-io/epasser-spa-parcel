/**
 *
 * Styles
 *
 */
import baseStyles from '../../../../components/AbstractPageDetails/styles.jss';

const styles = (theme) => ({
  ...baseStyles(theme),

  detailsContainer: {
    // flexGrow: 1,
    // display: 'flex',
    height: 'calc(100% - 1px)',
    margin: 0,
    borderColor: theme.palette.divider,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
  },

});

export default styles;
