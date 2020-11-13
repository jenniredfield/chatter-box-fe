import React from 'react';
import {ChannelsBarWrapper, ChannelsList} from '../styles/channelsbar.styles';

type Props = {
    theme: IThemeColours;
    handleChannel: (channel: IChannelState) => void;
    allChannels: IChannelState[]
}

const ChannelsBar: React.FC<Props> = ({theme, handleChannel, allChannels}) => {
    return (
        <ChannelsBarWrapper theme={theme}>
            <ChannelsList>
                {allChannels.map(channel => 
                    <li 
                        key={channel.channelName} 
                        onClick={() => handleChannel(channel)}>{channel.channelName}</li>)}
            </ChannelsList>
        </ChannelsBarWrapper>
    )
}

export default ChannelsBar;