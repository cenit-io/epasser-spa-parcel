/**
 *
 * Styles
 *
 */
import { alpha } from '@mui/styles';
import baseStyles from '../AbstractModule/styles.jss';

const styles = (theme) => ({
  ...baseStyles(theme),

  root: {
    width: '100%',
    height: '100%',
  },

  content: {
    width: '100%',
    height: 'calc(100% - 36px)',
    overflowY: 'auto',
  },

  actions: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(2.5),
  },

  form: {
    boxShadow: 'none',
  },

  formSection: {
    color: theme.palette.primary.main,
    borderColor: alpha(theme.palette.primary.main, 0.5),
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'ridge',
    borderWidth: 1,
    marginBottom: theme.spacing(2),
    width: `calc(100% - 2px)`,

    '& > legend': {
      textAlign: 'center',
      pagingLeft: theme.spacing(2),
      pagingRight: theme.spacing(2),
    },
  },

});

export default styles;
