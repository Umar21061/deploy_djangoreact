import React, { useState } from 'react';
import rbImage from './image/rb.gif';
import './Bot.css';

const Bot = () => {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userMessage.trim()) {
            return;
        }
        console.log('User message:', userMessage);
        try {
            const response = await fetch('/api/chat/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setMessages(data.messages);
            setUserMessage('');
        } catch (error) {
            console.error('Error fetching text data:', error.message);
        }
    };

    const handleChange = (e) => {
        setUserMessage(e.target.value);
    };

    return (
        <div id="chat-container">
            <div id="chat-box">
                <div>
                    <p>How can I assist you today?</p>
                    {messages.map((message, index) => (
                        <p key={index}>{message.content}</p>
                    ))}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={userMessage}
                            onChange={handleChange}
                            placeholder="Enter your message"
                        />
                        <input type="submit" value="Send" />
                    </form>
                </div>
                <img src={rbImage} alt="Robot" />
            </div>
        </div>
    );
};

export default Bot;
