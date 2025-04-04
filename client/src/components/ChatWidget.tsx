
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faTimes, faRobot, faUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface ChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ChatWidget({ isOpen, setIsOpen }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([
    { text: "Hi! I'm Zoe's assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('https://zoebahati.app.n8n.cloud/webhook/df8f156c-bbaa-4bdd-b797-1820544069e7/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response || data.message, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: "Sorry, I couldn't process your request.", sender: 'bot' }]);
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
      <button 
        className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faComments} className="text-xl" />
      </button>
      
      <div className={`bg-white rounded-2xl shadow-xl w-80 md:w-96 mb-4 overflow-hidden transition-all duration-500 ${isOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 pointer-events-none'}`}>
        <div className="bg-gradient-to-r from-primary to-purple-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 className="font-heading font-bold">Chat with Zoe</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-white/80 transition-all">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        
        <div className="p-4 h-80 overflow-y-auto bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className={`flex items-start mb-4 ${message.sender === 'user' ? 'justify-end' : ''}`}>
              {message.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-3">
                  <FontAwesomeIcon icon={faRobot} className="text-xs" />
                </div>
              )}
              <div className={message.sender === 'bot' 
                ? 'bg-white rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] shadow-md' 
                : 'bg-primary/10 text-gray-800 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%] shadow-md'
              }>
                <p>{message.text}</p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white ml-3">
                  <FontAwesomeIcon icon={faUser} className="text-xs" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-3">
                <FontAwesomeIcon icon={faRobot} className="text-xs" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] shadow-md">
                <p className="text-gray-800">
                  <span className="inline-block animate-pulse">•••</span>
                </p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..." 
              className="w-full border border-gray-200 rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={isLoading}
            />
            <button 
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
