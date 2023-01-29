import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './shared/styles/global-styles';
import SignUp from './pages/sign-up';
import Switch from './shared/components/switch';
import { DarkTheme } from './shared/styles/themes';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <div className="App">
        <Switch></Switch>
        {/* <SignUp></SignUp> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
