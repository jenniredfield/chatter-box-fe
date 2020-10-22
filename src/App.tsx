import React, {useState} from 'react';
import Header from './components/Header';
import ChannelsBar from './components/ChannelsBar';
import Messages from './components/Messages';
import Input from './components/Input';
import SendButton from './components/SendButton';
import {ThemeContext, themes} from './context/ThemeContext';

import {MainContainer, MessagesContainer, InputWrapper} from './styles/app.styles';

interface IThemeState {
    foreground: string;
    background: string;
    id: string;
  }

export default function App(): JSX.Element {
    const [themeState, setTheme] = useState<IThemeState>(themes.light);

    function toggleTheme() {
       return themeState.id === 'light' ?  
            setTheme(themes.dark) : setTheme(themes.light);
    }

    return (
        <div>
            <ThemeContext.Provider value={themeState}>
                <Header toggleTheme={toggleTheme} theme={themeState}/>
                <MainContainer>
                    <ChannelsBar theme={themeState}/>
                    <MessagesContainer>
                        <Messages/>
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
