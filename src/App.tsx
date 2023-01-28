import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './shared/styles/themes';
import GlobalStyles from './shared/styles/global-styles';

function App() {
  return (
    // <ThemeProvider theme={DarkTheme}>
      <div className="App">
        <GlobalStyles />
        Hello World
      </div>
    // </ThemeProvider>

  );
}

export default App;
