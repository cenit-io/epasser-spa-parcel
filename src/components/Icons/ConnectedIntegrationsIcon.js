/**
 *
 * Icons
 *
 */

import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

function icon(props) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M22,1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1ZM13,5V3h8v8H20a3,3,0,0,0-6,0H13V9a1,1,0,0,0-1-1H11a1,1,0,0,1,0-2h1A1,1,0,0,0,13,5ZM3,3h8V4a3,3,0,0,0,0,6v1H9a1,1,0,0,0-1,1v1a1,1,0,0,1-2,0V12a1,1,0,0,0-1-1H3Zm8,16v2H3V13H4a3,3,0,0,0,6,0h1v2a1,1,0,0,0,1,1h1a1,1,0,0,1,0,2H12A1,1,0,0,0,11,19Zm10,2H13V20a3,3,0,0,0,0-6V13h2a1,1,0,0,0,1-1V11a1,1,0,0,1,1.71-.69c.35.34.29.62.29,1.69a1,1,0,0,0,1,1h2Z"
      />
    </SvgIcon>
  );
}

export default icon;
