import socketIOClient from "socket.io-client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ChannelsBar from "./components/ChannelsBar";
import Messages from "./components/Messages";

import { ThemeContext, themes } from "./context/ThemeContext";

import {
  MainContainer,
  MessagesContainer,
  MessagesHeader,
  MessagesHeaderUsers,
  MessagesHeaderStatus,
  InputWrapper,
} from "./styles/app.styles";
import { InputStyle } from "./styles/input.styles";
import { ButtonWrapper, SendButton } from "./styles/button.styles";

import channelData from "./mockData/channelData";

type Loading = boolean;

const ENDPOINT = "localhost:3000";

const socket = socketIOClient(ENDPOINT, {
  transports: ["websocket"],
});

export default function App(): JSX.Element {
  const [themeState, setTheme] = useState<IThemeColours>(themes.light);
  const [channel, setChannel] = useState<IChannelState>({
    channel: "channel-1",
    channelId: "5f972ece34ec5c07f9c77a91"
  });
  console.log("channel", channel);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [username, setUsername] = useState<string>("User1");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<Loading>(false);


  function toggleTheme() {
    return themeState.id === "light"
      ? setTheme(themes.dark)
      : setTheme(themes.light);
  }

  function handleChannel(channel: IChannelState): void {
    setChannel(channel);
  }

  function sendMessage() {
    const message: Message = {
      user: username,
      dateStamp: Date.now(),
      message: userInput,
      channelId: channel.channelId
    };

    socket.emit('message', message);
  }

  function handleUserInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const message = e.target.value;
    setUserInput(message);
  }

  // function handleUserName(username: string) {
  //     setUsername(username);
  // }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const key = e.key;

    if (!userInput) {
      return;
    }

    if (key === "Enter") {
      sendMessage();
    }
  }

  const getData = async (): Promise<IChannel> => {
    const res = await new Promise<IChannel>((resolve) =>
      setTimeout(() => resolve(channelData as IChannel), 1000)
    );

    setMessages(res.messages);
    setUsers(res.users);
    setLoading(false);
    setUsername("User 2");

    return res;
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    function updateMessages(message: Message) {
      setMessages([...messages, message]);
      setUserInput('');
    }
    
    socket.on("messages", updateMessages);

    return () => {
      socket.off("messages", updateMessages)
    }
  }, [messages]);

  return (
    <div className="App">
      <ThemeContext.Provider value={themeState}>
        <Header toggleTheme={toggleTheme} theme={themeState} />
        <MainContainer>
          <ChannelsBar theme={themeState} handleChannel={handleChannel} />
          <MessagesContainer>
            <MessagesHeader>
              {users.length &&
                users.map(({ username, active }) => {
                  return (
                    <>
                      <MessagesHeaderUsers key={`${username}_label`}>{username}</MessagesHeaderUsers>
                      <MessagesHeaderStatus active={active} key={`${username}_status`}/>
                    </>
                  );
                })}
            </MessagesHeader>
            <Messages messages={messages} isLoading={isLoading} />
            <InputWrapper>
              <InputStyle
                value={userInput}
                onChange={(e) => handleUserInput(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder="Send messages here..."
              />
              <ButtonWrapper>
                <SendButton onClick={() => sendMessage()}>Send</SendButton>
              </ButtonWrapper>
            </InputWrapper>
          </MessagesContainer>
        </MainContainer>
      </ThemeContext.Provider>
    </div>
  );
}
