import React, { useState } from 'react';
import { InputStyle, InputWrapper } from '../styles/input.styles';
import { ButtonWrapper, SendButton } from '../styles/button.styles';

import { socket } from '../config';

type Props = {
  username: string;
  channelId: IChannelState['channelId'];
};

const Input: React.FC<Props> = ({ username, channelId }) => {
  const [userInput, setUserInput] = useState<string>('');

  function sendMessage() {
    const message: Message = {
      user: username,
      dateStamp: Date.now(),
      message: userInput,
      channelId: channelId,
    };

    socket.emit('message', message);

    setUserInput('');
  }

  function handleUserInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const message = e.target.value;

    setUserInput(message);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const key = e.key;

    if (!userInput) {
      return;
    }

    if (key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <>
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
    </>
  );
};

export default Input;
