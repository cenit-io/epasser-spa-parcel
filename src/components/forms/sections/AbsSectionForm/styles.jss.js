/**
 *
 * Styles
 *
 */
import baseStyles from '../../../../styles';

const styles = (theme) => ({
  ...baseStyles(theme),

  cardForm: {
    width: `calc(100% - ${theme.spacing(4)})`,
    margin: theme.spacing(2),

    '& .MuiCardContent-root': {
      paddingTop: 0,
    },

    '& .MuiCard-root': {
      boxShadow: 'none',
    },

    '& .MuiCardHeader-title:after': {
      content: '":"',
    },
  },

  separator: {
    margin: 0,
    marginBottom: theme.spacing(2),
  },

  actions: {
    margin: theme.spacing(1),
    padding: `${theme.spacing(1)} 0px`,
    height: 56,
  },
});

export default styles;
