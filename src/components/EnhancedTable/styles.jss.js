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
    // backgroundColor: theme.palette.primary[theme.palette.mode],
    backgroundColor: theme.palette.secondary[theme.palette.mode],
    zIndex: 2,
    top: 0,
  },

  cell: {
    borderColor: theme.palette.divider,
    borderStyle: 'solid',
    borderWidth: 1,
    zIndex: 1,
    padding: '6px 16px',

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
