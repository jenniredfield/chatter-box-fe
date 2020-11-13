import styled from 'styled-components';
import {BOTTOM_INPUT_WRAPPER_HEIGHT} from './constants.styles'

export const InputWrapper = styled.div`
    display: flex;
    height: ${BOTTOM_INPUT_WRAPPER_HEIGHT};
    margin-top: auto;
    border-top: 1px solid #eaeaea;
`;

export const InputStyle = styled.input`
    width: 80%;
    height: 60px;
    box-sizing: border-box;
    margin: 20px;
    padding: 10px;
    border-radius: 7px;
    border: 1px solid #bebebe;
    outline: none;
    
`;
