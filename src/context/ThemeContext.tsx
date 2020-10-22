import React from 'react';

export interface ITheme {
  foreground: string;
  background: string;
  id: string;
}

interface IThemes {
  light: ITheme;
  dark: ITheme;
}

export const themes: IThemes = {
    light: {
      foreground: '#000000',
      background: '#e6c982',
      id: 'light'
    },
    dark: {
      foreground: '#ffffff',
      background: '#63949c',
      id: 'dark'
    }
  };

export const ThemeContext = React.createContext({});


