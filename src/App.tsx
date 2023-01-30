import './AppContainer.ts';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './shared/styles/global-styles';
// import SignUp from './pages/sign-up';
import Switch from './shared/components/switch';
import { DarkTheme, LightTheme } from './shared/styles/themes';
import { useState } from 'react';
import { APP_THEMES } from './shared/constants';
import { Div } from './shared/styles/styles';
import { ApplicationContainer } from './AppContainer';

function App() {
  const [theme, setTheme] = useState(LightTheme);
  const [themeSwitchIsOn, setThemeSwitchIsOn] = useState(false);
  const changeTheme = (switchIsOn: boolean) => { 
    setThemeSwitchIsOn(switchIsOn)
    theme.name === APP_THEMES.LIGHT_THEME ? setTheme(DarkTheme) : setTheme(LightTheme);
}
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ApplicationContainer className="App">
        <Switch toggleSwitch={(on: boolean) => changeTheme(on)}></Switch>
        <Div>
          Hello world
        </Div>
      </ApplicationContainer>
    </ThemeProvider>
  );
}

export default App;
