import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faTimes, faRobot, faUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Schön dass Du da bist!" },
    { id: 2, sender: "bot", text: "Wie kann ich helfen?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("https://zoebahati.app.n8n.cloud/webhook/df8f156c-bbaa-4bdd-b797-1820544069e7/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: userMessage.text }),
      });

      const data = await res.json();
      const botReply = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.text || "Antwort empfangen.",
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 2, sender: "bot", text: "❌ Fehler beim Senden." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faComments} className="text-xl" />
      </button>

      {/* Chat Panel */}
      <div
        className={`bg-white rounded-2xl shadow-xl w-80 md:w-96 mb-4 overflow-hidden transition-all duration-500 ${
          isOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-white flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3 className="font-bold">Chat mit Zoe</h3>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Messages */}
        <div className="p-4 h-80 overflow-y-auto bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start mb-4 ${msg.sender === "user" ? "justify-end" : ""}`}
            >
              {msg.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white mr-3">
                  <FontAwesomeIcon icon={faRobot} className="text-xs" />
                </div>
              )}

              <div
                className={`${
                  msg.sender === "bot"
                    ? "bg-white text-gray-800"
                    : "bg-pink-100 text-gray-800"
                } rounded-2xl px-4 py-3 max-w-[80%] shadow`}
              >
                <p>{msg.text}</p>
              </div>

              {msg.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white ml-3">
                  <FontAwesomeIcon icon={faUser} className="text-xs" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white mr-3">
                <FontAwesomeIcon icon={faRobot} className="text-xs" />
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 max-w-[80%] shadow">
                <p className="text-gray-800 animate-pulse">•••</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Nachricht schreiben..."
              className="w-full border border-gray-200 rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-pink-300"
              disabled={isLoading}
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
