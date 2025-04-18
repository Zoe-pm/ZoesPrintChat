
import React from "react";

export default function Imprint() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-auto" 
         onClick={(e) => {
           if (e.target === e.currentTarget) {
             const element = document.getElementById("imprint-modal");
             if (element) {
               element.style.display = "none";
             }
           }
         }}>
      <div className="bg-white rounded-xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading font-bold text-gray-800">Impressum</h2>
          <button 
            onClick={() => {
              const element = document.getElementById("imprint-modal");
              if (element) {
                element.style.display = "none";
              }
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-gray-700 space-y-6">
          <div>
            <h3 className="font-bold mb-2">Angaben gemäß § 5 TMG</h3>
            <p>Zoë Bahati Hagen</p>
            <p>Jägerweg 28</p>
            <p>13503 Berlin</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Kontakt</h3>
            <p>Telefon: 0171 / 9862773</p>
            <p>E-Mail: zoe-kiconsulting@pm.me</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Rechtsform</h3>
            <p>Einzelunternehmen (Kleinunternehmer nach §19 UStG)</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Umsatzsteuer</h3>
            <p>Gemäß §19 UStG erhebe ich keine Umsatzsteuer und weise diese folglich auch nicht aus (Kleinunternehmerregelung).</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>Zoë Bahati Hagen</p>
            <p>Jägerweg 28</p>
            <p>13503 Berlin</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Haftungshinweis</h3>
            <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            Diese Seite ist mit KI generiert</p>
          </div>
        </div>
      </div>
    </div>
  );
}
