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
    overflow: 'hidden',
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
    '&.Mui-selected': {
      backgroundColor: theme.palette.secondary.light,
    },

    '&.Mui-selected:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },

  cell: {
    borderColor: theme.palette.divider,
    borderStyle: 'solid',
    borderWidth: 1,
    zIndex: 1,
    padding: '6px 16px',

    '&.MuiTableCell-head': {
      position: 'sticky',
      backgroundColor: theme.palette.primary.light,
      zIndex: 2,
      top: 0,
    },

    '& .MuiCheckbox-root': {
      padding: theme.spacing(0.5),
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
