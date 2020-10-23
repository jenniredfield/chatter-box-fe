import styled from 'styled-components';
import {ITheme} from '../context/ThemeContext';
import {TOP_NAV_HEIGHT} from './constants.styles';

type Props = {
    theme: ITheme
}

export const HeaderStyle = styled.div<Props>`
    width: 100%;
    height: ${TOP_NAV_HEIGHT};
    box-sizing: border-box;
    display: flex;
    background: ${props => props.theme.background};
`;

type HeaderControlProps = {
    position: string;
    theme?: string;
}

export const HeaderControl = styled.div<HeaderControlProps>`
    width: ${props => props.position !== 'center' ? '20%': '80%'};
    background: ${props => props.theme === 'main' ? '' : ''}
`;
