import { alpha } from "@material-ui/core/styles";

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

  signIn: {
    position: 'absolute',
    left: 'calc(50% - 270px)',
    top: 'calc(50% - 120px)',
    width: 540,
    height: 200,
    textAlign: 'center',
    backgroundColor: theme.palette.grey[100],
  },

  logo: {
    width: 160,
    marginLeft: 'calc(50% - 80px)',
  }
});

export default styles;
