import React from "react";

export default function ChatbotEmbedded() {
  return (
    <div className="w-full h-full max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col bg-white">
      <div className="bg-gradient-to-r from-primary to-purple-500 text-white p-8 flex flex-col items-center justify-center text-center">
        <h3 className="font-heading text-xl font-bold mb-2">Chatbot Integration</h3>
        <p className="text-sm opacity-80">
          Hier wird später Ihr eigener, selbst erstellter Chatbot eingebunden.
        </p>
      </div>
      
      <div className="flex-grow p-8 bg-gray-50 flex flex-col items-center justify-center text-center">
        <p className="text-gray-600 mb-4">
          Diese Komponente ist ein Platzhalter für Ihren eigenen Chatbot-Code.
        </p>
        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-gray-700 max-w-md">
          <p className="font-medium">Implementierungshinweise:</p>
          <ul className="text-sm mt-2 text-left space-y-1">
            <li>• Chatbot-Logik implementieren</li>
            <li>• UI-Komponenten für Chat-Nachrichten erstellen</li>
            <li>• API-Anbindung einrichten</li>
            <li>• Styling an Ihr Branding anpassen</li>
          </ul>
        </div>
      </div>
    </div>
  );
}