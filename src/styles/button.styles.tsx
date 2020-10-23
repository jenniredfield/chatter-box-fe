import styled from 'styled-components';

type Props = {
    theme: {
        foreground: string;
        background: string;
    }
}

export const ButtonWrapper = styled.div<Props>`
    background: ${props => props.theme.background};
    width: 20%;
    display: flex;
    align-items: center;
`;

export const SendButton = styled.button`
    width: 100px;
    height: 45px;
    border: 1px solid gray;
    border-radius: 7px;
`