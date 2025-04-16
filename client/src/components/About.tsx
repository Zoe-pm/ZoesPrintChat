import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faLock,
  faCoins,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const benefits = [
    {
      icon: faCheck,
      title: "Individuell gebaut",
      description: "Kein Copy & Paste – maßgeschneidert für dich",
    },

    {
      icon: faLock,
      title: "Datenschutz mit Herz",
      description: "DSGVO-konform mit sicherer Technik",
    },
    {
      icon: faCheck,
      title: "Ich lasse Dich nicht allein",
      description:
        "zuverlässiger Service- ich bin auch nach der Implementierung für dich da & erreichbar!",
    },
    {
      icon: faCoins,
      title: "Faire Preise",
      description:
        "Langfristig planbar, keine Abo-Falle. Individuell auf dich zugeschnitten",
    },
    {
      icon: faCode,
      title: "Technisch solide",
      description:
        "Mit n8n, Flowise, ChatGPT, Ollama – als Stand-alone oder in deine Website integriert",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-pink-100 to-purple-100 p-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌸</div>
                  <h3 className="font-heading font-bold text-2xl mb-4">
                    Für wen ist das was?
                  </h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-gray-700">
                        Selbstständige & Coaches, die mehr Zeit für ihre
                        Kund:innen wollen
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-gray-700">
                        KMU, die interne Abläufe automatisieren oder automatisch
                        Leads generieren wollen
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-gray-700">
                        Kreative, Dienstleisterinnen & alle, die smart wachsen
                        wollen – mit einem charmanten Chatbot an ihrer Seite
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 text-xl">✨</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl bg-gradient-to-r from-primary to-purple-500 transform rotate-6 -z-10"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl bg-pink-400 transform -rotate-6 -z-10"></div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
              KI mit Herz & Hirn
            </h2>
            <div className="text-lg text-primary font-medium mb-6">
              Hey du! Schön, dass du da bist. ✨
            </div>
            <p className="text-gray-600 mb-4">
              Ich bin Zoe – Beraterin für clevere KI-Lösungen mit
              Persönlichkeit. Ich baue maßgeschneiderte Chatbots, die dein Team
              entlasten, deine Kunden begeistern und dir Zeit sparen – ganz ohne
              Hokuspokus.
            </p>
            <p className="text-gray-600 mb-6">
              Ob Terminbuchung, Kundenservice, interne Prozesse oder einfach
              smarte Unterstützung rund um die Uhr: Meine Chatbots sind wie
              kleine digitale Assistentinnen – freundlich, effizient und genau
              auf dich abgestimmt.
            </p>

            <h3 className="font-heading font-bold text-xl text-gray-800 mb-4">
              Was macht meine Chatbots besonders? 💬💕
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-3">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-800">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center sm:text-left">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="bg-gradient-to-r from-primary to-purple-500 text-white py-3 px-8 rounded-full font-heading font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 inline-block text-center"
              >
                Kontakt aufnehmen
              </button>
              <p className="mt-4 text-sm text-gray-500">
                <span className="font-medium">
                  🌟 KI kann klug & freundlich sein – lass uns das gemeinsam
                  zeigen 🌟
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
