import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "wouter";

export default function ChatbotDemo2() {
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
            
            {/* Platzhalter für Chatbot */}
            <div className="w-full rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col bg-white">
              <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 flex flex-col items-center justify-center text-center">
                <h3 className="font-heading text-xl font-bold mb-2">Kundenservice-Bot Integration</h3>
                <p className="text-sm opacity-80">
                  Hier wird später Ihr Kundenservice-Bot eingebunden.
                </p>
              </div>
              
              <div className="flex-grow p-8 bg-gray-50 flex flex-col items-center justify-center text-center min-h-[300px]">
                <p className="text-gray-600 mb-4">
                  Diese Komponente ist ein Platzhalter für Ihren eigenen Kundenservice-Bot-Code.
                </p>
                <div className="p-4 bg-green-50 rounded-lg border border-green-100 text-gray-700 max-w-md">
                  <p className="font-medium mb-2">Ein Kundenservice-Bot kann:</p>
                  <ul className="text-sm text-left space-y-1">
                    <li>• Probleme und Anliegen der Kunden verstehen und kategorisieren</li>
                    <li>• Einfache Probleme selbst lösen und Anleitungen bereitstellen</li>
                    <li>• Bei komplexen Fällen relevante Informationen sammeln</li>
                    <li>• Nahtlos an einen menschlichen Kundenservice-Mitarbeiter übergeben</li>
                    <li>• Tickets erstellen und den Status von Anfragen verfolgen</li>
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