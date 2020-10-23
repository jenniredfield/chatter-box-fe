import styled from 'styled-components';
import {ITheme} from '../context/ThemeContext';

import {TOP_NAV_HEIGHT} from './constants.styles'

type Props = {
    theme: ITheme
}

export const ChannelsBarWrapper = styled.div<Props>`
    height: calc(100vh - ${TOP_NAV_HEIGHT});
    width: 200px;
    background: green;
    box-sizing: border-box;
    background: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;