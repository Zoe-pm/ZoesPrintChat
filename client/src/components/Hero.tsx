import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRobot, faUser } from "@fortawesome/free-solid-svg-icons";
import WaveShape from "./WaveShape";

interface HeroProps {
  setIsChatOpen: (open: boolean) => void;
}

export default function Hero({ setIsChatOpen }: HeroProps) {
  const [inputValue, setInputValue] = useState("");
  
  const handleChatButtonClick = () => {
    setIsChatOpen(true);
  };
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative bg-gradient-to-r from-primary to-purple-500 text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Print & Chat with Zoe's Printbox
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Your friendly printing assistant is just a chat away. Get instant help with all your printing needs!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleChatButtonClick}
                className="bg-gradient-to-r from-primary to-purple-500 text-white py-3 px-8 rounded-full font-heading font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 inline-block text-center"
              >
                Start Chatting
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById("how-it-works");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
                className="bg-white/20 backdrop-blur-sm text-white py-3 px-8 rounded-full font-heading font-bold inline-block text-center hover:bg-white/30 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative z-10">
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 relative">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white mr-3">
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <h3 className="font-heading font-bold text-gray-800 text-xl">Zoe's Chat</h3>
              </div>
              {/* Chat messages */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-3">
                    <FontAwesomeIcon icon={faRobot} className="text-xs" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                    <p className="text-gray-800">Hi there! I'm Zoe, your printing assistant. How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-primary/10 text-gray-800 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                    <p>I need help with printing some photos.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex-shrink-0 flex items-center justify-center text-white ml-3">
                    <FontAwesomeIcon icon={faUser} className="text-xs" />
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-3">
                    <FontAwesomeIcon icon={faRobot} className="text-xs" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                    <p className="text-gray-800">Great! I can help you with that. What size photos would you like to print?</p>
                  </div>
                </div>
              </div>
              {/* Chat input */}
              <div className="relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..." 
                  className="w-full border border-gray-200 rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white"
                  onClick={handleChatButtonClick}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-white/10 animate-bounce duration-[3000ms]"></div>
      <div className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-white/10 animate-bounce duration-[3000ms] delay-1000"></div>
      <div className="absolute top-40 left-20 w-8 h-8 rounded-full bg-white/10 animate-bounce duration-[3000ms] delay-500"></div>
      
      {/* Wave divider */}
      <WaveShape />
    </section>
  );
}
