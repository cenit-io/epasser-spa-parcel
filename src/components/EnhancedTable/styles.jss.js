import { alpha } from '@mui/material/styles';
import session from '../../base/session';

/**
 *
 * Styles
 *
 */

const { iFrameDetected } = session;

const paginationHeight = 48;
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

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: alpha(theme.palette.action.hover, 0.02),
    },

    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },

  head: {
    position: 'sticky',
    backgroundColor: iFrameDetected ? '#ffffff' : theme.palette.secondary[theme.palette.mode],
    zIndex: 2,
    top: 0,
    height: iFrameDetected ? theme.spacing(7) : 'auto',
  },

  cell: {
    borderColor: theme.palette.divider,
    borderLeftStyle: iFrameDetected ? 'none' : 'solid',
    borderRightStyle: iFrameDetected ? 'none' : 'solid',
    borderTopStyle: iFrameDetected ? 'inherit' : 'solid',
    borderWidth: 1,
    zIndex: 1,
    padding: '6px 16px',

    '& .MuiCheckbox-root, .MuiRadio-root': {
      padding: theme.spacing(iFrameDetected ? 1.5 : 0.5),
    },
  },

  cellSelection: {
    padding: `${iFrameDetected ? `${theme.spacing(1)} 0px` : theme.spacing(0.5)} !important`,
    width: theme.spacing(iFrameDetected ? 6 : 5.25),
    textAlign: 'center',
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
