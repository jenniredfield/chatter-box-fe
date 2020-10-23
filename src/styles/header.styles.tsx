import styled from 'styled-components';
import {TOP_NAV_HEIGHT} from './constants.styles';

type Props = {
    theme: IThemeColours
}

type HeaderControlProps = {
    position: string;
    theme?: string;
}

export const HeaderStyle = styled.div<Props>`
    width: 100%;
    height: ${TOP_NAV_HEIGHT};
    box-sizing: border-box;
    display: flex;
    background: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
`;


export const HeaderControl = styled.div<HeaderControlProps>`
    width: ${props => {
         switch(props.position) {
            case 'center':
                return '80%';
            case 'left':
                return '300px'
            case 'right':
                return '20%';

        }}
    };
    background: ${props => props.theme === 'main' ? '' : ''};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${props => props.position === 'left' ? 700 : 400};
    font-size: ${props => props.position === 'left' ? '22px' : '14px'};
    box-sizing: border-box;
    padding: 0 10px;
`;
