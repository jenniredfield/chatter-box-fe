import styled from 'styled-components';

type Props = {
    theme: {
        foreground: string;
        background: string;
    }
}

export const ButtonStyles = styled.div<Props>`
    background: ${props => props.theme.background};
    width: 20%;
`;