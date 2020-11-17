import React from 'react';
import {
  MessagesHeaderWrapper,
  MessagesHeaderUsers,
  MessagesHeaderStatus
} from '../styles/messages.styles';

type Props = {
  users: User[];
};

const MessagesHeader: React.FC<Props> = ({ users }) => {
  return (
    <MessagesHeaderWrapper>
      {users.length &&
        users.map(({ username, active }, i) => {
          return (
            <>
              <MessagesHeaderUsers key={`${username}_label_${i}`}>
                {username}
              </MessagesHeaderUsers>
              <MessagesHeaderStatus
                active={active}
                key={`${username}_status_${i}`}
              />
            </>
          );
        })}
    </MessagesHeaderWrapper>
  );
};

export default MessagesHeader;
