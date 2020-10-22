import React from 'react';
import {ITheme} from '../context/ThemeContext';
import {ChannelsBarWrapper} from '../styles/channelsbar.styles';

type Props = {
    theme: ITheme
}

const ChannelsBar: React.FC<Props> = ({theme}) => {
    return (
        <ChannelsBarWrapper theme={theme}>
            <p>Channel 1</p>
        </ChannelsBarWrapper>
    )
}

export default ChannelsBar;