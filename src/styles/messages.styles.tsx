import styled, {keyframes} from 'styled-components';

import {BOTTOM_INPUT_WRAPPER_HEIGHT, TOP_NAV_HEIGHT} from './constants.styles'

export const MessageContainer = styled.div`
    height: calc(100vh - ${BOTTOM_INPUT_WRAPPER_HEIGHT} - ${TOP_NAV_HEIGHT});
    overflow: scroll;
    box-sizing: border-box;
    position: relative;
`

export const MessagesHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 10;
    box-shadow: 0px 2px 3px #d8d8d8;
    padding: 10px 25px;
    font-weight: bold;
    height: 30px;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    width: 100%;
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