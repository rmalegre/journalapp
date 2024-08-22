import * as React from 'react';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#07074d',
    },
    secondary: {
      main: '#f44336',
    },
    error: {
      main: red.A400,
    },
  },
});

