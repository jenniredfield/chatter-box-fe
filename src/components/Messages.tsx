import React, { useEffect, useState } from 'react';
import moment from 'moment';

import {socket, SERVER_BASE_URL} from '../config';

import MessagesHeader from './MessagesHeader';

import {MessageContainer, MessagesWrapper, Message, MessageDetails, MessageBody, MessageUser, MessageTime} from '../styles/messages.styles'

type Loading = boolean;
interface Props {
    channelId: IChannelState['channelId']
}

const Messages: React.FC<Props> = ({channelId}) => {
    let lastElement: HTMLDivElement | null = null;
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setLoading] = useState<Loading>(true);
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const getData = async (channelId: string): Promise<void> => {
            setLoading(true);
            const res = await fetch(`${SERVER_BASE_URL}/channel/${channelId}`);
            const json = await res.json();
            const {messages, users} = json[0];

            setMessages(messages);
            setUsers(users)
            setLoading(false);
        }

        getData(channelId);
    
  }, [channelId]);

    useEffect(() => {
        function updateMessages(message: Message) {
          setMessages(messages => [...messages, message])
        }

        socket.on("messages", updateMessages);
    
        return () => {
          socket.off("messages", updateMessages)
        }
      }, [messages]);

    useEffect(() => {
        lastElement?.scrollIntoView();
    }, [isLoading, lastElement, messages])

    return (
        <MessageContainer>
            {!isLoading ? 
            <MessagesWrapper>
                    <MessagesHeader users={users} />
                    {messages.map(({user, dateStamp, message}, index) => {
                        return (
                            <Message key={index} ref={e => {
                                if (index + 1 === messages.length) {
                                    lastElement = e;
                                }
                            }}>
                                <MessageDetails>
                                    <MessageUser>{user}</MessageUser>
                                    <MessageTime>{moment(dateStamp).format('HH:mm')}</MessageTime>
                                </MessageDetails>
                                <MessageBody>{message}</MessageBody>
                            </Message>
                        );
                    })}
            </MessagesWrapper> : 
            <div>
                Loading...
            </div>}
        </MessageContainer>
    );
}

export default Messages;
