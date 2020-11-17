import React, { useState } from "react";

interface Props {
  username: string;
  channel: IChannelState;
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
    <div className="username-modal">
      <div>
        <label>Enter username</label>
        <div>
          <input
            placeholder="Enter username here..."
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default UsernameModal;
