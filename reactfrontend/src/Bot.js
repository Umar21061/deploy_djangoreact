import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rbImage from './image/rb.gif';
import './Bot.css';


const Bot = () => {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [showGreeting, setShowGreeting] = useState(true);

    useEffect(() => {
        if (messages.length > 0 && showGreeting) {
            setShowGreeting(false);
        }
    }, [messages, showGreeting]);

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
            const botMessage = data.messages.find(message => !message.content.includes(userMessage));

            if (botMessage) {
                setMessages([botMessage]);
                if (showGreeting) {
                    setShowGreeting(false);
                }
            }

            setUserMessage('');
        } catch (error) {
            console.error('Error fetching text data:', error.message);
        }
    };

    const handleChange = (e) => {
        setUserMessage(e.target.value);
    };

    return (
        <div className="container bot-container">
            <div className="row bot-row">
                <div className="col-lg-7 bot">
                    <h1 className=" lead1 display-5 fw-bold lh-1 mb-3 slice-left-to-right">We Empower Businesses to Maximize Revenues Using Our AI Expertise</h1>
                    <h6 className="lead slice-left-to-right">Unlock innovation and drive strategic growth with our top-tier AI solutions. We enhance efficiency, optimize operations, and open new opportunities, ensuring your business stays ahead in a competitive landscape.</h6>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/contact">
                            <button type="button" className="btn btn-primary2 btn-lg px-4 me-md-2 slice-left-to-right">Get in Touch</button>
                        </Link>
                    </div>
                </div>
                <div id="chat-container" className="col-lg-4 bot d-flex flex-column justify-content-start"> {/* Move the bot to the top */}
                    <div id="chat-box">
                        <div>
                        <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={userMessage}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                />
                                <input type="submit" value="Ask" />
                            </form>
                            {!showGreeting && messages.map((message, index) => (
                                <p key={index} className="bot-message">{message.content}</p>
                            ))}
                            {showGreeting &&
                                <p className='bot-text'>Hello! How can I assist you today?</p>
                            }
                            
                        </div>
                        <img src={rbImage} alt="Robot" />
                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default Bot;
