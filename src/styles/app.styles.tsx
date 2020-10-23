import styled from 'styled-components';

import {BOTTOM_INPUT_WRAPPER_HEIGHT} from './constants.styles'

export const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
`;

export const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const InputWrapper = styled.div`
    display: flex;
    height: ${BOTTOM_INPUT_WRAPPER_HEIGHT};
    margin-top: auto;
`