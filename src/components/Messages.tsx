import moment from 'moment';
import React from 'react';

import {MessageContainer, MessagesWrapper, Message, MessageDetails, MessageBody, MessageUser, MessageTime} from '../styles/messages.styles'

interface Props {
    messages: Message[]
}

const Messages: React.FC<Props> = ({messages}) => {
console.log("messages", messages)
    return (
        <MessageContainer>
            <MessagesWrapper>
                    {messages.map(({user, dateStamp, message}, index) => {
                        return (
                            <Message key={index}>
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
