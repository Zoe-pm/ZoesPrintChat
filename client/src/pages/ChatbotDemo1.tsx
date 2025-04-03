import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "wouter";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export default function ChatbotDemo1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Willkommen zum Demo-Bot 1! Ich bin ein Beispiel für einen FAQ-Bot, der Fragen zu Produkten und Dienstleistungen beantworten kann.',
      sender: 'bot',
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Generate a unique ID for the message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      // Simuliere API-Latenz
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo-Antwort des Bots
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Das ist ein Demo-FAQ-Bot. Er kann auf vordefinierte Fragen antworten und bestimmte Informationen bereitstellen. Ein echter Bot würde hier mit einer KI-Komponente antworten.`,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      // Fehlermeldung als Bot-Antwort anzeigen
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Entschuldigung, es gab ein Problem bei der Verarbeitung Ihrer Anfrage. Bitte versuchen Sie es später noch einmal.',
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <main className="flex-grow py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-heading font-bold text-gray-800 mb-4">Chatbot Demo 1: FAQ-Bot</h1>
              <p className="text-gray-600 mb-6">
                Dieser Demo-Bot zeigt, wie ein FAQ-Bot funktionieren könnte. Er beantwortet häufig gestellte Fragen zu Produkten und Dienstleistungen.
              </p>
              
              <div className="flex space-x-4 mb-8">
                <Link href="/chatbot-demo-2">
                  <a className="text-primary hover:underline">Zu Demo-Bot 2 wechseln</a>
                </Link>
                <Link href="/">
                  <a className="text-primary hover:underline">Zurück zur Startseite</a>
                </Link>
              </div>
            </div>
            
            {/* Chat Interface */}
            <div className="w-full rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col bg-white">
              {/* Chat header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4">
                <h3 className="font-heading text-lg font-bold">FAQ Demo-Bot</h3>
                <p className="text-sm opacity-80">Ich beantworte häufig gestellte Fragen</p>
              </div>
              
              {/* Chat messages */}
              <div className="flex-grow p-4 overflow-y-auto bg-gray-50 min-h-[400px] max-h-[600px]">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-white border border-gray-200 rounded-bl-none'
                        }`}
                      >
                        <p>{message.text}</p>
                        <div
                          className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                          }`}
                        >
                          {new Date(message.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg rounded-bl-none">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-75"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-150"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Chat input */}
              <div className="border-t border-gray-200 p-3 bg-white">
                <div className="flex space-x-2">
                  <textarea
                    className="flex-grow border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Stellen Sie eine Frage..."
                    rows={1}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                  >
                    Senden
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Beispiel-Fragen: "Was sind eure Öffnungszeiten?", "Wie kann ich bestellen?", "Welche Zahlungsmethoden akzeptiert ihr?"
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">Über diesen Demo-Bot</h3>
              <p className="text-gray-600 mb-3">
                Dieser FAQ-Bot demonstriert, wie ein Unternehmen häufig gestellte Fragen automatisch beantworten kann.
                Ein echter Bot würde mit einer Wissensdatenbank verbunden sein und könnte:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Informationen zu Produkten und Dienstleistungen bereitstellen</li>
                <li>Öffnungszeiten, Kontaktinformationen und Standorte mitteilen</li>
                <li>Grundlegende Support-Anfragen beantworten</li>
                <li>Bei Bedarf an einen menschlichen Mitarbeiter weiterleiten</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}