import styled from 'styled-components';

import {BOTTOM_INPUT_WRAPPER_HEIGHT, TOP_NAV_HEIGHT} from './constants.styles'

export const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
`;

export const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc( 100vh - ${TOP_NAV_HEIGHT});
`;

export const MessagesHeader = styled.div`
    display: flex;
    align-items: center;
    z-index: 10;
    box-shadow: 0px 2px 3px #d8d8d8;
    padding: 10px 25px;
    font-weight: bold;
`

export const MessagesHeaderUsers = styled.span`
    margin: 0 10px;
`

interface StatusProps {
    active: boolean;
}

export const MessagesHeaderStatus = styled.span<StatusProps>`
    background: ${(props) => props.active ? '#82dc82' : 'red'};
    width: 10px;
    height: 10px;
    display: block;
    border-radius: 7px; 
`;
