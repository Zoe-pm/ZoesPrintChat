import StepCard from "./StepCard";
import WaveShape from "./WaveShape";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Erstgespräch",
      description: "Wir besprechen deine Ziele, Anforderungen und wie KI dein Business unterstützen kann."
    },
    {
      number: 2,
      title: "Konzept & Design",
      description: "Wir entwickeln ein maßgeschneidertes Konzept für deinen individuellen KI-Assistenten."
    },
    {
      number: 3,
      title: "Entwicklung",
      description: "Wir programmieren deinen Chatbot mit den gewünschten Funktionen und trainieren ihn mit deinem Wissen."
    },
    {
      number: 4,
      title: "Implementierung",
      description: "Wir integrieren die Lösung in deine bestehende Infrastruktur – mit Fokus auf Datenschutz und Kontrolle."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 bg-gradient-to-r from-primary to-purple-500 text-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">So funktioniert's</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">In vier Schritten zu deinem individuellen KI-Assistenten – ganz ohne Abo-Stress.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Step connector */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/30 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-white/10"></div>
      <div className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-white/10"></div>
      
      {/* Wave divider */}
      <WaveShape />
    </section>
  );
}
