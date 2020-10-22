import React from 'react';
import {ITheme} from '../context/ThemeContext';
import {HeaderStyle, HeaderControl} from '../styles/header.styles';


interface HeaderProps {
    toggleTheme: () => void;
    theme: ITheme
}

 const Header: React.FC<HeaderProps> = ({toggleTheme, theme}) => {
    return (
        <HeaderStyle theme={theme}>
            <HeaderControl position="left">ChatterBox</HeaderControl>

            <HeaderControl position="center">
                <button onClick={toggleTheme}>Change</button>
            </HeaderControl>

            <HeaderControl position="right"/>
        </HeaderStyle>

    )
}

export default Header;
