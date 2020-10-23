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
    z-index: 10;
    box-shadow: 0px 2px 3px #d8d8d8;
    padding: 10px 25px;
    font-weight: bold;
`

export const MessagesHeaderUsers = styled.span`
    margin: 0 10px;
`

export const InputWrapper = styled.div`
    display: flex;
    height: ${BOTTOM_INPUT_WRAPPER_HEIGHT};
    margin-top: auto;
    border-top: 1px solid #eaeaea;
`