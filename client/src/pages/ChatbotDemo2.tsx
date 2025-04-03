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

export default function ChatbotDemo2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Willkommen beim Demo-Bot 2! Ich bin ein Beispiel für einen Kundenservice-Bot, der komplexere Anfragen bearbeiten und bei Bedarf an einen Mitarbeiter weiterleiten kann.',
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
        text: `Das ist ein Demo-Kundenservice-Bot. In einer echten Implementierung würde dieser Bot versuchen, Ihr Problem zu verstehen und zu lösen oder Sie bei Bedarf an einen menschlichen Mitarbeiter weiterleiten.`,
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
              <h1 className="text-3xl font-heading font-bold text-gray-800 mb-4">Chatbot Demo 2: Kundenservice-Bot</h1>
              <p className="text-gray-600 mb-6">
                Dieser Demo-Bot zeigt, wie ein Kundenservice-Bot funktionieren könnte. Er versteht komplexere Anfragen und kann bei Bedarf an einen menschlichen Mitarbeiter weiterleiten.
              </p>
              
              <div className="flex space-x-4 mb-8">
                <Link href="/chatbot-demo-1">
                  <a className="text-primary hover:underline">Zu Demo-Bot 1 wechseln</a>
                </Link>
                <Link href="/">
                  <a className="text-primary hover:underline">Zurück zur Startseite</a>
                </Link>
              </div>
            </div>
            
            {/* Chat Interface */}
            <div className="w-full rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col bg-white">
              {/* Chat header */}
              <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4">
                <h3 className="font-heading text-lg font-bold">Kundenservice Demo-Bot</h3>
                <p className="text-sm opacity-80">Ich helfe bei Problemen und komplexeren Anfragen</p>
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
                            ? 'bg-green-600 text-white rounded-br-none'
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
                    className="flex-grow border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={1}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50"
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                  >
                    Senden
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Beispiel-Anfragen: "Ich habe ein Problem mit meiner Bestellung", "Ich möchte einen Termin vereinbaren", "Kann ich mit einem Mitarbeiter sprechen?"
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-green-50 rounded-lg p-4 border border-green-100">
              <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">Über diesen Demo-Bot</h3>
              <p className="text-gray-600 mb-3">
                Dieser Kundenservice-Bot demonstriert, wie ein Unternehmen komplexere Kundenanfragen handhaben kann.
                Ein echter Bot würde mit einer KI-Komponente und einem Ticketing-System verbunden sein und könnte:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Probleme und Anliegen der Kunden verstehen und kategorisieren</li>
                <li>Einfache Probleme selbst lösen und Anleitungen bereitstellen</li>
                <li>Bei komplexen Fällen relevante Informationen sammeln</li>
                <li>Nahtlos an einen menschlichen Kundenservice-Mitarbeiter übergeben</li>
                <li>Tickets erstellen und den Status von Anfragen verfolgen</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}