interface Theme {
  textColor?: string;
  font?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export const DarkTheme: Theme =  {
  primaryColor: '#000000',
  secondaryColor: '',
  accentColor: '',
  font: '',
  textColor: ''
}

export const LightTheme: Theme = {
  primaryColor: '#ffffff',
  secondaryColor: '#65FAD9',
  accentColor: '#FFB61D',
  font: '',
  textColor: ''
}