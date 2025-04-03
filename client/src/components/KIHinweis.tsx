import React from "react";

export default function KIHinweis() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl p-8 shadow-md border border-primary/10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl">
              💡
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-800 mb-3">Hinweis zur KI-Nutzung</h3>
              <p className="text-gray-600 mb-3">
                Unsere Chatbots und Automatisierungslösungen nutzen fortschrittliche KI-Technologie wie ChatGPT, Ollama (lokal) und n8n, um dir schneller und effizienter zu helfen.
              </p>
              <p className="text-gray-600">
                Dabei achten wir auf Datenschutz, Transparenz und faire Nutzung – deine Daten werden mit größter Sorgfalt behandelt und nicht für Werbezwecke weiterverwendet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}