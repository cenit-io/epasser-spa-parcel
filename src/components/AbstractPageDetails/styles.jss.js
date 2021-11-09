/**
 *
 * Styles
 *
 */
import baseStyles from '../AbstractModule/styles.jss';
import { alpha } from "@material-ui/core/styles";

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

  formSection: {
    color: theme.palette.primary.main,
    borderColor: alpha(theme.palette.primary.main, 0.5),
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'ridge',
    borderWidth: 1,
    marginBottom: theme.spacing(2),

    '& > legend': {
      textAlign: 'center',
      pagingLeft: theme.spacing(2),
      pagingRight: theme.spacing(2),
    }
  }

});

export default styles;