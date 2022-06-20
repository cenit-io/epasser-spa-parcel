import session from '../../base/session';

/**
 *
 * Styles
 *
 */

const { iFrameDetected } = session;

const paginationHeight = 36;
const rootMargin = iFrameDetected ? 2 : 0;

const styles = (theme) => ({
  root: {
    width: `calc(100% - ${rootMargin * 2}px)`,
    height: `calc(100% - ${rootMargin * 2}px)`,
    margin: rootMargin,
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
    backgroundColor: iFrameDetected ? 'inherit' : theme.palette.secondary[theme.palette.mode],
    zIndex: 2,
    top: 0,
  },

  cell: {
    borderColor: theme.palette.divider,
    borderLeftStyle: iFrameDetected ? 'none' : 'solid',
    borderWidth: 1,
    zIndex: 1,
    padding: '6px 16px',

    '& .MuiCheckbox-root': {
      padding: iFrameDetected ? 'inherit' : theme.spacing(0.5),
    },
  },

  cellSelection: {
    width: theme.spacing(3),
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
