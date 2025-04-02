import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import WaveShape from "./WaveShape";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative bg-gradient-to-r from-primary to-purple-500 text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Willkommen bei Zoe's Printbox
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Ihr zuverlässiger Partner für alle Druckservices. Qualität, Schnelligkeit und Kreativität für Ihre Projekte!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
                className="bg-gradient-to-r from-primary to-purple-500 text-white py-3 px-8 rounded-full font-heading font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                Kontakt aufnehmen <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById("how-it-works");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
                className="bg-white/20 backdrop-blur-sm text-white py-3 px-8 rounded-full font-heading font-bold inline-block text-center hover:bg-white/30 transition-all"
              >
                Mehr erfahren
              </button>
            </div>
          </div>
          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
              <h3 className="font-heading font-bold text-2xl mb-4">Unsere Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-white mr-3"></div>
                  <span>Hochwertige Fotodruck</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-white mr-3"></div>
                  <span>Visitenkarten & Broschüren</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-white mr-3"></div>
                  <span>Großformatdruck</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-white mr-3"></div>
                  <span>Werbematerialien</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-white mr-3"></div>
                  <span>Personalisierte Geschenke</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="font-medium">Sprechen Sie uns an für ein individuelles Angebot!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-white/10 animate-bounce duration-[3000ms]"></div>
      <div className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-white/10 animate-bounce duration-[3000ms] delay-1000"></div>
      <div className="absolute top-40 left-20 w-8 h-8 rounded-full bg-white/10 animate-bounce duration-[3000ms] delay-500"></div>
      
      {/* Wave divider */}
      <WaveShape />
    </section>
  );
}
