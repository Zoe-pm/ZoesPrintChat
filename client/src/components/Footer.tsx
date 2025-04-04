import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Custom Chatbox ohne n8n style laden
    const chatContainer = document.createElement("div");
    chatContainer.id = "custom-chat";
    chatContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      background: #706d73;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      font-family: system-ui, -apple-system, sans-serif;
      z-index: 1000;
      border: 1px solid #E5A9B5;
      `;

      const chatHeader = document.createElement('div');
      chatHeader.style.cssText = 
        'background: linear-gradient(to right, #635759, #c6b8d1);' +
        'color: white;' +
        'padding: 15px;' +
        'display: flex;' +
        'align-items: center;' +
        'justify-content: space-between;';
      chatHeader.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 32px; height: 32px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">KI</div>
          <div>
            <div style="font-weight: bold;">Deine Printbox Assistenz</div>
            <div style="font-size: 12px;">24/7 erreichbar</div>
          </div>
        </div>
      `;

      const chatBody = document.createElement('div');
      chatBody.style.cssText = `
        height: 300px;
        overflow-y: auto;
        padding: 15px;
        background: #f8f9fa;
      `;

      const chatInput = document.createElement('div');
      chatInput.style.cssText = `
        padding: 15px;
        border-top: 1px solid #E5A9B5;
        background: white;
      `;

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Erzähl mir...';
      input.style.cssText = `
        width: 100%;
        padding: 10px;
        border: 1px solid #E5A9B5;
        border-radius: 20px;
        outline: none;
        &:focus {
          border-color: #9B8B93;
        }
      `;

      chatInput.appendChild(input);
      chatContainer.appendChild(chatHeader);
      chatContainer.appendChild(chatBody);
      chatContainer.appendChild(chatInput);
      document.body.appendChild(chatContainer);

      // Initial messages
      const messages = [
        "Schön dass Du da bist!",
        "Wie kann ich helfen?"
      ];

      messages.forEach(msg => {
        const msgElement = document.createElement('div');
        msgElement.style.cssText = `
          background: #9B8B93;
          color: white;
          padding: 10px 15px;
          border-radius: 15px;
          margin-bottom: 10px;
          max-width: 80%;
        `;
        msgElement.textContent = msg;
        chatBody.appendChild(msgElement);
      });

      //Adding missing script element creation and appending
      const script = document.createElement('script');
      script.src = 'path/to/your/chat/script.js'; // Replace with actual path
      document.body.appendChild(script);


      return () => {
        document.body.removeChild(chatContainer); //remove chat container
        document.body.removeChild(script);
      };
  }, []);

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
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;

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
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;

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
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;

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
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;

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
    </footer>
  );
}