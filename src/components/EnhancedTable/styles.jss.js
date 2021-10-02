import { alpha } from "@material-ui/core/styles";

/**
 *
 * Styles
 *
 */

const styles = (theme) => ({
  root: {
    overflow: 'auto',
  },

  table: {
    width: '100%',
    tableLayout: 'auto'
  },

  cell: {
    borderColor: theme.palette.divider,
    borderStyle: 'solid',
    borderWidth: 1,

    '&.MuiTableCell-head': {
      backgroundColor: alpha(theme.palette.primary.main, 0.5)
    },
  },

});

export default styles;
