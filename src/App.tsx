import './App.css';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './shared/styles/themes';
import GlobalStyles from './shared/styles/global-styles';
import SignUp from './pages/sign-up';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <div className="App">
        <SignUp></SignUp>
      </div>
    </ThemeProvider>
  );
}

export default App;
