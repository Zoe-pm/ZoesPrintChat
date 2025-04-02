import StepCard from "./StepCard";
import WaveShape from "./WaveShape";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Start a Chat",
      description: "Click on the chat bubble to start a conversation with Zoe."
    },
    {
      number: 2,
      title: "Ask Questions",
      description: "Inquire about printing options, prices, or recommendations."
    },
    {
      number: 3,
      title: "Get Answers",
      description: "Receive instant responses tailored to your specific printing needs."
    },
    {
      number: 4,
      title: "Place Your Order",
      description: "Schedule printing services directly through the chat interface."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 bg-gradient-to-r from-primary to-purple-500 text-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Get your printing questions answered in just a few simple steps.</p>
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
