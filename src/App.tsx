import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ChannelsBar from "./components/ChannelsBar";
import Messages from "./components/Messages";
import Input from "./components/Input";

import { ThemeContext, themes } from "./context/ThemeContext";

import { MainContainer, MessagesContainer } from "./styles/app.styles";
import { SERVER_BASE_URL } from "./config";

interface IAppState {
  allChannels: IChannelState[];
  channel: IChannelState;
  username: string;
  isLoading: boolean;
}

export default function App(): JSX.Element {
  const [themeState, setTheme] = useState<IThemeColours>(themes.light);

  const [state, setAppState] = useState<IAppState>({
    allChannels: [],
    channel: { channelName: "", channelId: "" },
    username: "User2",
    isLoading: true,
  });

  function toggleTheme() {
    return themeState.id === "light"
      ? setTheme(themes.dark)
      : setTheme(themes.light);
  }

  function handleChannel(channel: IChannelState): void {
    setAppState((state) => ({ ...state, channel }));
  }

  useEffect(() => {
    const getAllChannels = async () => {
      const res = await fetch(`${SERVER_BASE_URL}/allChannels`);
      const json = await res.json();
      const firstChannel = json && (json[0] as IChannelState);

      setAppState((state) => ({
        ...state,
        allChannels: json,
        channel: firstChannel,
      }));
    };

    getAllChannels();

    // disconnect socket
    return () => {};
  }, []);

  return (
    <div className="App">
      <ThemeContext.Provider value={themeState}>
        <Header
          toggleTheme={toggleTheme}
          theme={themeState}
          username={state.username}
        />
        <MainContainer>
          <ChannelsBar
            theme={themeState}
            handleChannel={handleChannel}
            allChannels={state.allChannels}
          />
          <MessagesContainer>
            <Messages channelId={state.channel.channelId} />
            <Input
              username={state.username}
              channelId={state.channel.channelId}
            />
          </MessagesContainer>
        </MainContainer>
      </ThemeContext.Provider>
    </div>
  );
}
