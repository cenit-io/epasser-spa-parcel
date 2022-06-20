/**
 *
 * Styles
 *
 */

const styles = (theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },

  notify: {
    width: '100%',
    position: 'relative',
    right: 0,
    top: 0,
    margin: 5,
  },

  separator: {
    margin: 0,
    marginBottom: theme.spacing(2),
  },

  cardPage: {
    width: `calc(100% - ${theme.spacing(1)})`,
    margin: theme.spacing(0.5),
    marginBottom: theme.spacing(2),

    // '&.MuiCard-root': {
    //   boxShadow: 'none',
    // },

    '& .MuiCardContent-root': {
      paddingTop: 0,
    },

    '& .MuiCardHeader-title:after': {
      content: '":"',
    },
  },
});

export default styles;
