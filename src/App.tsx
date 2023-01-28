import './App.css';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './shared/styles/themes';
import GlobalStyles from './shared/styles/global-styles';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <div className="App">
        Hello world
      </div>
    </ThemeProvider>
  );
}

export default App;
