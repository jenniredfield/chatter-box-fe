import styled, {keyframes} from 'styled-components';

import {BOTTOM_INPUT_WRAPPER_HEIGHT, TOP_NAV_HEIGHT} from './constants.styles'

export const MessageContainer = styled.div`
    height: calc(100vh - ${BOTTOM_INPUT_WRAPPER_HEIGHT} - ${TOP_NAV_HEIGHT});
    overflow: scroll;
    box-sizing: border-box;
`

export const MessagesWrapper = styled.div`
    flex: 1 1 auto;
    overflow-y: auto;
    width: 100%;
    background: white;
    box-sizing: border-box;
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    min-height: 0; /* without min-height/height:0 flex:1 doesn't work */
    height: 100%;

    &::-webkit-scrollbar {
     display: none;
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-shrink: 0;
    animation: ${appear} 600ms linear;
`

export const MessageDetails = styled.div`
    display: flex;
    align-items: center;
`

export const MessageBody = styled.div`
     margin-top: 10px;
`

export const MessageUser = styled.p`
    font-weight: bold;
    margin-right: 15px;
`

export const MessageTime = styled.span`
    color: lightgray;
    font-size: 9px;
`