import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import ChannelsBar from './components/ChannelsBar';
import Messages from './components/Messages';

import {ThemeContext, themes} from './context/ThemeContext';

import {MainContainer, MessagesContainer, MessagesHeader, MessagesHeaderUsers, InputWrapper} from './styles/app.styles';
import {InputStyle} from './styles/input.styles';
import {ButtonWrapper, SendButton} from './styles/button.styles';

import MessagesData from './mockData/mockData';

export default function App(): JSX.Element {
    const [themeState, setTheme] = useState<IThemeColours>(themes.light);
    const [channel, setChannel] = useState<IChannelState>({channel: 'channel-1'});
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [username, setUsername] = useState<string>('User1');

    function toggleTheme() {
       return themeState.id === 'light' ?  
            setTheme(themes.dark) : setTheme(themes.light);
    }

    function handleChannel(channel: IChannelState): void {
        setChannel(channel)
    }

    function updateMessages() {
        const message: Message = {user: username, dateStamp: Date.now(), message: userInput}
        setMessages([...messages, message]);
        setUserInput('');
    }
    console.log("updateMessages -> updateMessages", updateMessages)

    function handleUserInput(e: React.ChangeEvent<HTMLInputElement>): void {
        const message = e.target.value;
        setUserInput(message);
    }

    function handleUserName(username: string) {
        setUsername(username);
    }
    console.log("handleUserName -> handleUserName", handleUserName)

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement> ) {
        const key = e.key;

        if(!userInput) {
            return;
        }

        if(key === 'Enter') {
            updateMessages();
        }
    }

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
                        <MessagesHeader>
                            <p>{channel.channel}</p>
                            <div>
                                <MessagesHeaderUsers>{username}</MessagesHeaderUsers>
                                <MessagesHeaderUsers>User2</MessagesHeaderUsers>
                                <MessagesHeaderUsers>User3</MessagesHeaderUsers>
                            </div>
                        </MessagesHeader>
                        <Messages messages={messages}/>
                        <InputWrapper>
                            <InputStyle 
                                value={userInput} 
                                onChange={e => handleUserInput(e)}
                                onKeyDown={e => handleKeyDown(e)}
                                placeholder="Send messages here..."
                                />
                            <ButtonWrapper>
                            <SendButton  onClick={() => updateMessages()}>
                                Send
                            </SendButton>
                            </ButtonWrapper>
                        </InputWrapper>
                    </MessagesContainer>
                </MainContainer>
            </ThemeContext.Provider>
        </div>
    )
}
