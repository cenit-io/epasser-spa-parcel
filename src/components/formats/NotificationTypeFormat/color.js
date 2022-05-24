import { amber, blue, green, grey, red } from '@mui/material/colors';

export default (value) => {
  if (/error/i.test(value)) return red[500];
  if (/wiarnig/i.test(value)) return amber[500];
  if (/notice/i.test(value)) return green[500];
  if (/info/i.test(value)) return blue[500];

  return grey[500];
};
