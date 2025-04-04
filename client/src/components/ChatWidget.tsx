import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faTimes, faRobot, faUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import useChatbot from "@/hooks/useChatbot";

interface ChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ChatWidget({ isOpen, setIsOpen }: ChatWidgetProps) {
  const { messages, input, isLoading, setInput, sendMessage } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  return (
    <div id="chat" className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button 
        className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300"
        onClick={toggleChat}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faComments} className="text-xl" />
      </button>
      
      {/* Chat widget */}
      <div className={`bg-white rounded-2xl shadow-xl w-80 md:w-96 mb-4 overflow-hidden transition-all duration-500 ${isOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 pointer-events-none'}`}>
        {/* Chat header */}
        <div className="bg-gradient-to-r from-primary to-purple-500 p-4 text-white flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3 className="font-heading font-bold">Chat with Zoe</h3>
          </div>
          <button 
            className="text-white hover:text-white/80 transition-all"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        {/* Chat messages */}
        <div className="p-4 h-80 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex items-start mb-4 ${message.sender === 'user' ? 'justify-end' : ''}`}
            >
              {message.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-3">
                  <FontAwesomeIcon icon={faRobot} className="text-xs" />
                </div>
              )}
              
              <div className={`${
                message.sender === 'bot' 
                  ? 'bg-white rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] shadow-md' 
                  : 'bg-primary/10 text-gray-800 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%] shadow-md'
              }`}>
                <p className={message.sender === 'bot' ? 'text-gray-800' : ''}>{message.text}</p>
              </div>
              
              {message.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-teal-500 flex-shrink-0 flex items-center justify-center text-white ml-3">
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
        
        {/* Chat input */}
        <div className="p-4 border-t border-gray-100">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..." 
              className="w-full border border-gray-200 rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={isLoading}
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white"
              onClick={() => sendMessage()}
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
