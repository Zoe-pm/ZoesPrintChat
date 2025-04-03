import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "wouter";

export default function ChatbotDemo1() {
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
            
            {/* Platzhalter für Chatbot */}
            <div className="w-full rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col bg-white">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 flex flex-col items-center justify-center text-center">
                <h3 className="font-heading text-xl font-bold mb-2">FAQ-Bot Integration</h3>
                <p className="text-sm opacity-80">
                  Hier wird später Ihr FAQ-Bot eingebunden.
                </p>
              </div>
              
              <div className="flex-grow p-8 bg-gray-50 flex flex-col items-center justify-center text-center min-h-[300px]">
                <p className="text-gray-600 mb-4">
                  Diese Komponente ist ein Platzhalter für Ihren eigenen FAQ-Bot-Code.
                </p>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-gray-700 max-w-md">
                  <p className="font-medium mb-2">Ein FAQ-Bot kann:</p>
                  <ul className="text-sm text-left space-y-1">
                    <li>• Informationen zu Produkten und Dienstleistungen bereitstellen</li>
                    <li>• Öffnungszeiten, Kontaktinformationen und Standorte mitteilen</li>
                    <li>• Grundlegende Support-Anfragen beantworten</li>
                    <li>• Bei Bedarf an einen menschlichen Mitarbeiter weiterleiten</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}