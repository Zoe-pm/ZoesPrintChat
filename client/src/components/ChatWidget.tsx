import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faTimes,
  faRobot,
  faUser,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Schön dass du da bist! Wie kann ich helfen?", sender: "bot" },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" as const };
    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const botMsg = await response.json();
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { text: "Fehler beim Senden.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end p-4 sm:p-6">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
        >
          <FontAwesomeIcon icon={faComments} className="text-xl" />
        </button>
      )}

      {/* Slide-Up Chat */}
      <div
        className={`fixed bottom-0 right-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        } w-full max-w-sm sm:max-w-md bg-white rounded-t-2xl shadow-xl flex flex-col max-h-[80vh]`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-purple-500 p-4 text-white flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3 className="font-bold">Chat mit Zoe</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-white/80 transition">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Chatverlauf */}
        <div className="p-4 flex-1 min-h-0 overflow-y-auto bg-gray-50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex items-start mb-4 ${msg.sender === "user" ? "justify-end" : ""}`}>
              {msg.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={faRobot} className="text-xs" />
                </div>
              )}
              <div
                className={`${
                  msg.sender === "bot"
                    ? "bg-white text-gray-800 rounded-2xl rounded-tl-none"
                    : "bg-primary/10 text-gray-800 rounded-2xl rounded-tr-none"
                } px-4 py-3 max-w-[80%] shadow`}
              >
                {msg.text}
              </div>
              {msg.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center ml-3">
                  <FontAwesomeIcon icon={faUser} className="text-xs" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faRobot} className="text-xs" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow max-w-[80%]">
                <span className="animate-pulse">•••</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Eingabefeld */}
        <div className="p-4 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Nachricht schreiben..."
              className="w-full border border-gray-300 rounded-full py-3 px-5 pr-12 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white flex items-center justify-center disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}