import React, { useState } from "react";
import {UsernameModalStyle} from '../styles/usernameModal.styles';

interface Props {
  username: string;
  channel?: IChannelState;
  setUsername: (username: string) => void;
}

const UsernameModal: React.FC<Props> = ({ setUsername, channel }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const key = e.key;

    if (!value) {
      return;
    }

    if (key === "Enter") {
      // send name to server with channelId

      setUsername(value);
    }
  }

  return (
    <UsernameModalStyle>
      <div>
        <label>Enter username</label>
        <div>
          <input
            placeholder="Enter username here..."
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => setUsername(value)}>Send</button>
        </div>
      </div>
    </UsernameModalStyle>
  );
};

export default UsernameModal;
