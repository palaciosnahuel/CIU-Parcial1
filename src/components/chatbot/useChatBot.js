import { useRef, useState } from 'react';
import MessageParser from './MessageParser';

import notificationAudio from '../../assets/simple_notification.mp3'


const messageParser = new MessageParser();

function useChatbot() {
    const [messages, setMessages] = useState([]);

    const audioRef = useRef(new Audio(notificationAudio));

    const sendMessage = async (text) => {
        // Si el mensaje está vacío, no realizar acción.
        if (text.trim() === '') return;

        // Agregar mensaje del usuario a la UI.
        const updatedMessages = [...messages, { text, sender: 'user' }];
        
        // Obtener respuesta del bot utilizando la clase Bot.
        const botResponseText = await messageParser.getResponse(text);
        // Sonido cuando el bot responde.
        audioRef.current.play();

        // Agregar respuesta del bot a la UI.
        const updatedMessagesWithBot = [...updatedMessages, botResponseText];

        // Actualizar la UI.
        setMessages(updatedMessagesWithBot);
    };

    return {
        messages,
        sendMessage,
    };
}

export default useChatbot;
