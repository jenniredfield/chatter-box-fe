import moment from 'moment';
import React, { useEffect } from 'react';

import {MessageContainer, MessagesWrapper, Message, MessageDetails, MessageBody, MessageUser, MessageTime} from '../styles/messages.styles'

type Loading = boolean;
interface Props {
    messages: Message[];
    isLoading?: Loading;
}

const Messages: React.FC<Props> = ({messages, isLoading}) => {
    let wrapperRef: HTMLDivElement | null = null;
    let lastElement: HTMLDivElement | null = null;

    useEffect(() => {
        setTimeout(() => lastElement?.scrollIntoView(), 0);
    }, [messages, wrapperRef, lastElement])

    return (
        <MessageContainer>
            {!isLoading ? <MessagesWrapper ref={e => wrapperRef = e}>
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
