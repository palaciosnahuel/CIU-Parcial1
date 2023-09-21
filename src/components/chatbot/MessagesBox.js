import React, { useEffect, useRef } from 'react'
import {List, ListItem, ListItemText } from '@mui/material';

const MessagesBox = ({messages}) => {

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => { if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' }); };
    useEffect(scrollToBottom, [messages]);

  return (
    <List style={{ flex: 1 }}>
    {messages.map((message, index) => (
        <ListItem
            key={index}
            style={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '8px',
            }}
        >
            <ListItemText
                primary={message.sender === 'user' ? 'You:' : 'Chatbot:'}
                secondary={message.text}
                style={{
                    backgroundColor: message.sender === 'user' ? '#e6f7ff' : '#f0f0f0',
                    padding: '8px',
                    borderRadius: '8px',
                    maxWidth: '70%',
                    wordWrap: 'break-word',
                }}
            />
        </ListItem>
    ))}
    <div ref={messagesEndRef} />
</List>
  )
}

export default MessagesBox