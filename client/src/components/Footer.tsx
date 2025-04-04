import React, { useState } from "react";
import ChatWidget from "./ChatWidget";

export default function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <footer className="py-12 px-6 bg-gradient-to-r from-primary to-purple-500 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3">
                <span className="text-xs font-bold">KI</span>
              </div>
              <h3 className="text-xl font-heading font-bold">
                <span className="text-white">Zoe's</span> KI Toolbox
              </h3>
            </div>
            <p className="text-white/80 mb-6">
              KI kann klug & freundlich sein – lass uns das gemeinsam zeigen.
              Maßgeschneiderte Chatbots und KI-Lösungen für dein Business.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("features");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-white/80 hover:text-white transition-all"
                >
                  Vorteile
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("how-it-works");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-white/80 hover:text-white transition-all"
                >
                  So funktioniert's
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-white/80 hover:text-white transition-all"
                >
                  Über mich
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-white/80 hover:text-white transition-all"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-6">
              Meine Leistungen
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-all"
                >
                  RAGbots & Chatbots
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-all"
                >
                  LLM-Integrationen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-all"
                >
                  n8n Automatisierungen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-all"
                >
                  Vektor-Datenbanken
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Für wen?</h4>
            <ul className="space-y-3">
              <li className="text-white/80">Selbstständige & Coaches</li>
              <li className="text-white/80">Kleine und mittlere Unternehmen</li>
              <li className="text-white/80">Kreative & Dienstleister</li>
              <li className="text-white/80">Alle, die smart wachsen wollen</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 mb-4 md:mb-0">
            © {new Date().getFullYear()} Zoë Bahati Hagen • KI mit Herz & Hirn.
            Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("datenschutz-modal");
                if (element) {
                  element.style.display = "flex";
                }
              }}
              className="text-white/80 hover:text-white transition-all"
            >
              Datenschutz
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("imprint-modal");
                if (element) {
                  element.style.display = "block";
                }
              }}
              className="text-white/80 hover:text-white transition-all"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
      <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </footer>
  );
}