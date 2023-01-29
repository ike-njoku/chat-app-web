export interface Theme {
  textColor?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  themeColor: string;
  themeOpposite: string;
}

export const DarkTheme: Theme =  {
  primaryColor: '#000000',
  themeColor: 'black',
  themeOpposite: 'white',
  secondaryColor: '#0C3025',
  accentColor: '',
  textColor: '#ffffff'
}

export const LightTheme: Theme = {
  themeColor: 'white',
  themeOpposite: 'black',
  primaryColor: '#ffffff',
  secondaryColor: '#65FAD9',
  accentColor: '#FFB61D',
  textColor: '#ffffff'
}