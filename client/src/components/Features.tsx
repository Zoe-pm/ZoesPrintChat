import FeatureCard from "./FeatureCard";
import { faCommentsDollar, faLightbulb, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  const features = [
    {
      icon: faCommentsDollar,
      title: "Instant Price Quotes",
      description: "Get real-time pricing information for all your printing needs without the wait."
    },
    {
      icon: faLightbulb,
      title: "Expert Recommendations",
      description: "Receive personalized suggestions for paper types, sizes, and finishes for your project."
    },
    {
      icon: faCalendarCheck,
      title: "Easy Scheduling",
      description: "Book printing appointments and check pickup times directly through chat."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Why Choose Zoe's Printbox?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get personalized printing assistance through our friendly chat interface.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
