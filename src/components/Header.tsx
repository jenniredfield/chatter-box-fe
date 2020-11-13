import React from 'react';
import {HeaderStyle, HeaderControl} from '../styles/header.styles';

interface HeaderProps {
    toggleTheme: () => void;
    theme: IThemeColours;
    username: string;
}

 const Header: React.FC<HeaderProps> = ({toggleTheme, theme, username}) => {
    return (
        <HeaderStyle theme={theme}>
            <HeaderControl position="left">ChatterBox</HeaderControl>

            <HeaderControl position="center">
               
            </HeaderControl>

            <HeaderControl position="right">
                 <button onClick={toggleTheme}>Change</button>
                 <p>{username}</p>
            </HeaderControl>
        </HeaderStyle>

    )
}

export default Header;
