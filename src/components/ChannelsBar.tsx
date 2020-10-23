import React from 'react';
import {ITheme} from '../context/ThemeContext';
import {ChannelsBarWrapper} from '../styles/channelsbar.styles';

interface IChannelState {
    channel: string
 }

type Props = {
    theme: ITheme;
    handleChannel: (channel: IChannelState) => void
}

const ChannelsBar: React.FC<Props> = ({theme, handleChannel}) => {
    return (
        <ChannelsBarWrapper theme={theme}>
            <p onClick={() => handleChannel({channel: 'channel-1'})}>Channel 1</p>
        </ChannelsBarWrapper>
    )
}

export default ChannelsBar;