export default function Datenschutz() {
  return (
    <div id="datenschutz-modal" className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center hidden overflow-y-auto p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl mx-auto p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-heading font-bold text-gray-800">Datenschutzerklärung</h2>
          <button 
            onClick={() => {
              const modal = document.getElementById("datenschutz-modal");
              if (modal) {
                modal.style.display = "none";
              }
            }}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>
        
        <div className="prose prose-lg">
          <p className="font-medium">Angaben gemäß § 5 TMG & Art. 13 DSGVO</p>
          <p>Verantwortlich für diese Website:</p>
          <p>
            Zoë Hagen KI Consulting<br />
            Jägerweg 28<br />
            13503 Berlin<br />
            E-Mail: zoe-kiconsulting@pm.me<br />
            Kontakt bitte über den Chatbot auf der Website<br />
            Website: www.zoeschatbots.de
          </p>

          <h3 className="font-heading font-bold text-xl">1. Allgemeines zur Datenverarbeitung</h3>
          <p>Personenbezogene Daten werden nur im notwendigen Umfang verarbeitet. Die Datenverarbeitung erfolgt gemäß der Datenschutz-Grundverordnung (DSGVO) sowie des BDSG.</p>

          <h3 className="font-heading font-bold text-xl">2. Zugriffsdaten</h3>
          <p>Beim Besuch dieser Website (gehostet auf Replit) werden automatisch folgende Daten erfasst:</p>
          <ul>
            <li>Besuchte Seiten</li>
            <li>Zeitpunkt des Zugriffs</li>
            <li>Browsertyp/-version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL</li>
            <li>IP-Adresse (soweit möglich gekürzt)</li>
          </ul>
          <p>Diese Daten dienen ausschließlich dem technischen Betrieb.</p>

          <h3 className="font-heading font-bold text-xl">3. Cookies & Cookie-Banner</h3>
          <p>Ein Cookie-Banner ermöglicht dir, der Verwendung von Cookies aktiv zuzustimmen oder diese abzulehnen. Technisch notwendige Cookies werden auch ohne Zustimmung gesetzt.</p>

          <h3 className="font-heading font-bold text-xl">4. Kontaktaufnahme über Chatbot</h3>
          <p>Der auf der Website eingesetzte Chatbot kann zur Kommunikation personenbezogene Daten erfassen (z. B. Name, Anliegen, E-Mail-Adresse).</p>
          <p>Verwendete Systeme:</p>
          <ul>
            <li>Lokale LLMs (z. B. via Ollama)</li>
            <li>Automatisierung mit n8n</li>
            <li>Teilweise Zugriff auf OpenAI API innerhalb n8n</li>
          </ul>
          <p>Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden lokal verarbeitet bzw. sicher verschlüsselt gespeichert. Es erfolgt keine Weitergabe an unbefugte Dritte.</p>

          <h3 className="font-heading font-bold text-xl">5. Newsletter</h3>
          <p>Wenn du den Newsletter abonnierst, wird deine E-Mail-Adresse gespeichert und zum Versand verwendet. Du kannst dich jederzeit über den Abmeldelink in jeder E-Mail wieder abmelden.</p>

          <h3 className="font-heading font-bold text-xl">6. Weitere Dienste & Drittanbieter</h3>
          <ul>
            <li>Kein Einsatz von Google Analytics oder Tracking-Tools</li>
            <li>Google Drive / Sheets werden intern für Projektverwaltung verwendet</li>
            <li>E-Mail-Kommunikation erfolgt über ProtonMail (Schweiz, DSGVO-konform)</li>
          </ul>

          <h3 className="font-heading font-bold text-xl">7. Deine Rechte nach DSGVO</h3>
          <p>Du hast das Recht auf:</p>
          <ul>
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen Datenverarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p>Bitte sende dein Anliegen per E-Mail an: zoe-kiconsulting@pm.me</p>

          <h3 className="font-heading font-bold text-xl">8. Änderungen dieser Datenschutzerklärung</h3>
          <p>Diese Datenschutzerklärung wird regelmäßig angepasst. Die jeweils aktuelle Version findest du auf dieser Website.</p>

          <p className="mt-6 text-right text-gray-500">Stand: April 2025</p>
        </div>
      </div>
    </div>
  );
}