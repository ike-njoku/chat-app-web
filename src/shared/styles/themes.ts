import { APP_THEMES } from "../constants";

export interface Theme {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
}

export const DarkTheme: Theme =  {
  name: APP_THEMES.DARK_THEME,
  primaryColor: "black",
  secondaryColor: "grey",
  accentColor: "white",
  textColor: "white",
}

export const LightTheme: Theme = {
  name: APP_THEMES.LIGHT_THEME,
  primaryColor: "white",
  secondaryColor: "red",
  accentColor: "orangered",
  textColor: "black"
}