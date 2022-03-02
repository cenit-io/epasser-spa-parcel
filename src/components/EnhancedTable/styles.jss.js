import { alpha } from '@mui/styles';

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
    height: `calc(100% - ${paginationHeight + 1}px)`,
    tableLayout: 'auto',
  },

  table: {
    width: '100%',
    tableLayout: 'auto',
  },

  head: {
    position: 'sticky',
    backgroundColor: theme.palette.background.paper,
    zIndex: 2,
    top: 0,
  },

  row: {
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.2),
    },
  },

  cell: {
    borderColor: theme.palette.divider,
    borderStyle: 'solid',
    borderWidth: 1,
    zIndex: 1,

    '&.MuiTableCell-head': {
      position: 'sticky',
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
      zIndex: 2,
      top: 0,
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
    },
  },

});

export default styles;
