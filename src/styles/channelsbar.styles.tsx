import styled from 'styled-components';
import {ITheme} from '../context/ThemeContext';

type Props = {
    theme: ITheme
}

export const ChannelsBarWrapper = styled.div<Props>`
    height: calc(100vh - 50px);
    width: 200px;
    background: green;
    box-sizing: border-box;
    background: ${props => props.theme.background};
`;