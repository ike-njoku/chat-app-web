import { APP_THEMES } from "../constants";

export interface Theme {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  bodyColor: string;
}

export const DarkTheme: Theme =  {
  name: APP_THEMES.DARK_THEME,
  primaryColor: "black",
  secondaryColor: "grey",
  accentColor: "white",
  textColor: "white",
  bodyColor: "black"
}

export const LightTheme: Theme = {
  name: APP_THEMES.LIGHT_THEME,
  primaryColor: "white",
  secondaryColor: "red",
  accentColor: "orangered",
  textColor: "black",
  bodyColor: "white"
}