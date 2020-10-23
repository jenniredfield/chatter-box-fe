import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import ChannelsBar from './components/ChannelsBar';
import Messages from './components/Messages';
import Input from './components/Input';
import SendButton from './components/SendButton';

import {ThemeContext, themes} from './context/ThemeContext';

import {MainContainer, MessagesContainer, InputWrapper} from './styles/app.styles';

import MessagesData from './mockData/mockData';

interface IThemeState {
    foreground: string;
    background: string;
    id: string;
}

interface IChannelState {
    channel: string
 }
    
export default function App(): JSX.Element {
    const [themeState, setTheme] = useState<IThemeState>(themes.light);
    const [channel, setChannel] = useState<IChannelState>({channel: 'channel-1'});
    const [messages, setMessages] = useState<Message[]>([]);

    function toggleTheme() {
       return themeState.id === 'light' ?  
            setTheme(themes.dark) : setTheme(themes.light);
    }

    function handleChannel(channel: IChannelState): void {
        setChannel(channel)
    }

    function updateMessages(message: Message) {
        setMessages([...messages, message])
    }
    console.log("updateMessages -> updateMessages", updateMessages)

    useEffect(() => {
        setMessages(MessagesData);
    }, []);

    return (
        <div>
            <ThemeContext.Provider value={themeState}>
                <Header toggleTheme={toggleTheme} theme={themeState}/>
                <MainContainer>
                    <ChannelsBar theme={themeState} handleChannel={handleChannel}/>
                    <MessagesContainer>
                        <div>
                            <p>{channel.channel}</p>
                            <div>
                                <span>User1</span>
                                <span>User2</span>
                                <span>User3</span>
                            </div>
                        </div>
                        <Messages messages={messages}/>
                        <InputWrapper>
                            <Input/>
                            <SendButton/>
                        </InputWrapper>
                    </MessagesContainer>
                </MainContainer>
            </ThemeContext.Provider>
        </div>
    )
}
