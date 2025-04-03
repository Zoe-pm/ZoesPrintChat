import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Verstehe deine Kunden besser",
      description: "KI-Chatbots, die wirklich helfen – mit Persönlichkeit und direktem Zugriff auf dein Wissen."
    },
    {
      title: "Entlaste dein Team",
      description: "Automatisierte Antworten auf Standardfragen rund um die Uhr – während du dich auf das Wesentliche konzentrierst."
    },
    {
      title: "Wachse mit Stil und KI-Power",
      description: "Deine Daten, deine Kontrolle – flexible KI-Lösungen für mehr Effizienz und Kundenzufriedenheit."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Clever. Charmant. Chatbot.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Wir bauen für dich smarte RAGbots & LLM-basierte Assistenten, die deine Kundenkommunikation automatisieren, dein Wissen clever verfügbar machen – und dabei 100% zu deinem Stil passen.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
