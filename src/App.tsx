import './App.css';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './shared/styles/themes';
import GlobalStyles from './shared/styles/global-styles';
import SignUp from './pages/sign-up';
import ThemeSelector from './shared/components/theme-selector';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <ThemeSelector></ThemeSelector>
      <div className="App">
        <SignUp></SignUp>
      </div>
    </ThemeProvider>
  );
}

export default App;
