import React from 'react';

export const themes: IThemes = {
    light: {
      foreground: '#000000',
      background: '#e6c982',
      id: 'light'
    },
    dark: {
      foreground: '#ffffff',
      background: '#425558',
      id: 'dark'
    }
  };

export const ThemeContext = React.createContext({});


