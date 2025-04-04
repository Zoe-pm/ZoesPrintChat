import React, { useEffect, useRef, useState } from 'react';
import './Chatbox.css';

type Message = {
  from: 'user' | 'bot';
  text: string;
};

export default function Chatbox() {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Schön dass Du da bist!' },
    { from: 'bot', text: 'Wie kann ich helfen?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      const userMsg: Message = { from: 'user', text: input };
      setMessages((prev) => [...prev, userMsg]);

      try {
        const res = await fetch('https://zoebahati.app.n8n.cloud/webhook/df8f156c-bbaa-4bdd-b797-1820544069e7/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chatInput: input })
        });

        const data = await res.json(); // oder res.text(), je nach Antwort

        const botMsg: Message = { from: 'bot', text: data.text || 'Antwort empfangen.' };
        setMessages((prev) => [...prev, botMsg]);
      } catch (err) {
        setMessages((prev) => [...prev, { from: 'bot', text: 'Fehler beim Senden.' }]);
        console.error(err);
      }

      setInput('');
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">Deine Printbox Assistenz</div>
      <div className="chatbox-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-msg ${msg.from}`}>{msg.text}</div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Erzähl mir was..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={sendMessage}
        />
      </div>
    </div>
  );
}
