import React from 'react';
import {ChannelsBarWrapper, ChannelsList} from '../styles/channelsbar.styles';

type Props = {
    theme: IThemeColours;
    handleChannel: (channel: IChannelState) => void
}

const ChannelsBar: React.FC<Props> = ({theme, handleChannel}) => {
    return (
        <ChannelsBarWrapper theme={theme}>
            <ChannelsList>
                <li onClick={() => 
                    handleChannel({channel: 'channel-1', channelId: '5f972ece34ec5c07f9c77a91'})}>Channel 1</li>
            </ChannelsList>
        </ChannelsBarWrapper>
    )
}

export default ChannelsBar;