import moment from 'moment';
import React, { useEffect } from 'react';

import {MessageContainer, MessagesWrapper, Message, MessageDetails, MessageBody, MessageUser, MessageTime} from '../styles/messages.styles'

interface Props {
    messages: Message[]
}

const Messages: React.FC<Props> = ({messages}) => {
    let wrapperRef: HTMLDivElement | null = null;
    let lastElement: HTMLDivElement | null = null;

    useEffect(() => {
        lastElement?.scrollIntoView();
    }, [messages, wrapperRef, lastElement])

    return (
        <MessageContainer>
            <MessagesWrapper ref={e => wrapperRef = e}>
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
            
            </MessagesWrapper>
        </MessageContainer>
    );
}

export default Messages;
