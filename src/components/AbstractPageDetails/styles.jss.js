/**
 *
 * Styles
 *
 */
import baseStyles from '../AbstractModule/styles.jss';

const styles = (theme) => ({
  ...baseStyles(theme),

  actions: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(2.5),
  },

  form: {
    boxShadow: 'none',
  },

  formSection: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.dark,
    borderRadius: theme.shape.borderRadius,
    // borderStyle: 'ridge',
    borderWidth: 1,
    marginBottom: theme.spacing(2),
    width: 'calc(100% - 16px)',

    '& > legend': {
      textAlign: 'left',
      pagingLeft: theme.spacing(2),
      pagingRight: theme.spacing(2),
    },
  },

});

export default styles;
