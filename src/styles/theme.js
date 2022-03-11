/**
 * A theme with custom primary and secondary color.
 */

import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import themes from './themes';

export default function buildTheme(id) {
  const defaultTheme = themes.default;
  const selectedTheme = themes[id || process.env.THEME || 'default'] || {};

  return createTheme(deepmerge(defaultTheme, selectedTheme));
}
