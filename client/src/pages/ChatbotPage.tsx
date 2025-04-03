import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotEmbedded from "@/components/ChatbotEmbedded";
import { useState } from "react";
import { Link } from "wouter";

export default function ChatbotPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <main className="flex-grow py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Mein KI-Chatbot</h1>
              <p className="text-gray-600 mb-6 text-lg">
                Hier können Sie meinen KI-Assistenten ausprobieren. Stellen Sie Fragen zu meinen Dienstleistungen, 
                zu KI-Lösungen oder wie ich Ihnen mit Ihrem Projekt helfen kann.
              </p>
              
              <div className="flex space-x-4 mb-6">
                <Link href="/chatbot-demo-1">
                  <a className="text-primary hover:underline">Demo-Bot 1 ausprobieren</a>
                </Link>
                <Link href="/chatbot-demo-2">
                  <a className="text-primary hover:underline">Demo-Bot 2 ausprobieren</a>
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-8">
                <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">Hinweis:</h3>
                <p className="text-gray-600">
                  Dieser Bereich ist für Ihren eigenen Chatbot reserviert. Sie können hier später Ihren persönlichen 
                  Assistenten integrieren, der speziell auf Ihre Bedürfnisse und Ihr Unternehmen zugeschnitten ist.
                </p>
              </div>
            </div>
            
            <ChatbotEmbedded />
            
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">Mein Chatbot kann:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Fragen zu meinen Dienstleistungen beantworten</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Informationen zu KI-Lösungen bereitstellen</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Erklären, wie ich Ihnen bei Ihrem Projekt helfen kann</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Terminanfragen entgegennehmen</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">Ihre maßgeschneiderte Lösung:</h3>
                <p className="text-gray-600 mb-3">
                  Ich entwickle für Sie einen individuellen Chatbot, der genau auf Ihre Bedürfnisse und Ihr Branding abgestimmt ist.
                </p>
                <Link href="/#contact">
                  <a className="inline-block mt-2 bg-gradient-to-r from-primary to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Jetzt anfragen
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}