/**
 * A theme with custom primary and secondary color.
 */

import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import themes from './themes';

export default function buildTheme(theme) {
  const { id, mode } = (typeof theme === 'string') ? { id: theme } : theme;
  const defaultTheme = themes.default;
  const selectedTheme = themes[id || process.env.THEME || 'default'] || {};
  selectedTheme.palette.mode = mode || 'light';

  return createTheme(deepmerge(defaultTheme, selectedTheme));
}
