import styled from 'styled-components';

import {TOP_NAV_HEIGHT, LEFT_NAV_WIDTH} from './constants.styles'

type Props = {
    theme: IThemeColours
}

export const ChannelsBarWrapper = styled.div<Props>`
    height: calc(100vh - ${TOP_NAV_HEIGHT});
    width: ${LEFT_NAV_WIDTH};
    background: green;
    box-sizing: border-box;
    background: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
`;

export const ChannelsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    list-style-type: none;
    padding: 0;
    width: 100%;

    & li {
        width: 100%;
        background: #f1ba56;
        text-align: center;
        border-radius: 3px;
    }
`