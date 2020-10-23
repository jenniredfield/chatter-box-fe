import React from 'react';
import {HeaderStyle, HeaderControl} from '../styles/header.styles';

interface HeaderProps {
    toggleTheme: () => void;
    theme: IThemeColours
}

 const Header: React.FC<HeaderProps> = ({toggleTheme, theme}) => {
    return (
        <HeaderStyle theme={theme}>
            <HeaderControl position="left">ChatterBox</HeaderControl>

            <HeaderControl position="center">
               
            </HeaderControl>

            <HeaderControl position="right">
                 <button onClick={toggleTheme}>Change</button>
            </HeaderControl>
        </HeaderStyle>

    )
}

export default Header;
