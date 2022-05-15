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
    borderWidth: 0,
    marginBottom: theme.spacing(2),
    width: 'calc(100% - 16px)',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',

    '& > legend': {
      textAlign: 'left',
      pagingLeft: theme.spacing(2),
      pagingRight: theme.spacing(2),
    },
  },

});

export default styles;
