import React from 'react';
import { ThemeProvider, createMuiTheme, Theme } from '@material-ui/core';
import Sidebar from './components/Sidebar';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#89FC00' },
    secondary: { main: '#F5B700' },
    contrastThreshold: 3,
  },
  shape: {
    borderRadius: 0,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
