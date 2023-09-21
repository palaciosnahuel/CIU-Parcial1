import React, { useState } from 'react';
import { Container, TextField, Button, Paper } from '@mui/material';
import useChatbot from './useChatBot';
import MessagesBox from './MessagesBox';

const Chatbot = () => {

    const { messages, sendMessage } = useChatbot();
    const [inputMessage, setInputMessage] = useState('');

    // Handlers
    const handleInputChange = (e) => setInputMessage(e.target.value);
    const handleKeyPress = (e) => { if (e.key === 'Enter') handleSendMessage(); };
    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            sendMessage(inputMessage);
            setInputMessage('');
        }
    };

    // Ui
    return (
        <Container
            maxWidth="md"
            style={{
                marginTop: '5%',
                height: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Paper
                elevation={3}
                style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '10px',
                    overflowY: 'auto',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                <MessagesBox messages={messages}></MessagesBox>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '16px',
                    }}
                >
                    <TextField
                        label="Escribir tu pregunta"
                        variant="outlined"
                        fullWidth
                        value={inputMessage}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        aria-label="Escribir tu pregunta"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSendMessage}
                        style={{ marginLeft: '8px' }}
                        aria-label="Enviar"
                    >
                        Enviar
                    </Button>
                </div>
            </Paper>
        </Container>
    );
};

export default Chatbot;
