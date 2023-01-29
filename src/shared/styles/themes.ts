interface Theme {
  textColor?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export const DarkTheme: Theme =  {
  primaryColor: '#000000',
  secondaryColor: '#0C3025',
  accentColor: '',
  textColor: '#ffffff'
}

export const LightTheme: Theme = {
  primaryColor: '#ffffff',
  secondaryColor: '#65FAD9',
  accentColor: '#FFB61D',
  textColor: '#ffffff'
}