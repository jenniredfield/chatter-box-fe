import React from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {ButtonStyles} from '../styles/button.styles';

export default function SendButton(): JSX.Element {
    const theme = React.useContext(ThemeContext);
    console.log("themeContext", theme)
    
    return (
            <ButtonStyles theme={theme}>
                Send 
            </ButtonStyles>
    )
}