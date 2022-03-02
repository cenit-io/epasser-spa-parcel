/**
 *
 * Styles
 *
 */

const styles = (theme) => ({
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  screenshot: {
    width: theme.spacing(50),
    height: theme.spacing(50 * (1080 / 1920)),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
  },

  col1: {
    width: `calc(${(100 / 6) * 1}% - ${theme.spacing(2)})`,

    '&.MuiFormGroup-root': {
      width: `${(100 / 6) * 1}%`,
      display: 'inline-flex',
    },
  },

  col2: {
    width: `calc(${(100 / 6) * 2}% - ${theme.spacing(2)})`,

    '&.MuiFormGroup-root': {
      width: `${(100 / 6) * 2}%`,
      display: 'inline-flex',
    },
  },

  col3: {
    width: `calc(${(100 / 6) * 3}% - ${theme.spacing(2)})`,

    '&.MuiFormGroup-root': {
      width: `${(100 / 6) * 3}%`,
      display: 'inline-flex',
    },
  },

  col4: {
    width: `calc(${(100 / 6) * 4}% - ${theme.spacing(2)})`,

    '&.MuiFormGroup-root': {
      width: `${(100 / 6) * 4}%`,
      display: 'inline-flex',
    },
  },

  col5: {
    width: `calc(${(100 / 6) * 5}% - ${theme.spacing(2)})`,

    '&.MuiFormGroup-root': {
      width: `${(100 / 6) * 5}%`,
      display: 'inline-flex',
    },
  },

  col6: {
    width: `calc(${(100 / 6) * 6}% - ${theme.spacing(2)})`,

    '&.MuiFormGroup-root': {
      width: `${(100 / 6) * 1}%`,
      display: 'inline-flex',
    },
  },

  fullWidth: {
    width: '100%',
  },
});

export default styles;
