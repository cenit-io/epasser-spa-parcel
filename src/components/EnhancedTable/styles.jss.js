import { alpha } from "@material-ui/core/styles";

/**
 *
 * Styles
 *
 */

const paginationHeight = 36;

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },

  container: {
    height: `calc(100% - ${paginationHeight+1}px)`,
    tableLayout: 'auto'
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

  pagination: {
    borderTopColor: theme.palette.divider,
    borderTopStyle: 'solid',
    borderTopWidth: 1,

    '& .MuiTablePagination-toolbar': {
      minHeight: paginationHeight,
    },

    '& .MuiIconButton-root': {
      padding: 6,
    }
  }

});

export default styles;
