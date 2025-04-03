import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Der Chatbot für unsere Praxis beantwortet Routinefragen zu Öffnungszeiten und Terminbuchungen – das spart unserem Team täglich wertvolle Zeit und unsere Patienten bekommen sofort Antwort.",
      name: "Laura Müller",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      quote: "Unser KI-Assistent begleitet Kunden durch unseren Bewerbungsprozess und unterstützt bei den häufigsten Anliegen. Die Integration in unsere Website war überraschend einfach!",
      name: "Thomas Weber",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5
    },
    {
      quote: "Als Beraterin konnte ich mit meinem persönlichen RAGbot meinen Kundenstamm verdoppeln. Er beantwortet Erstanfragen, qualifiziert Leads und ich kann mich auf die wichtigen Gespräche konzentrieren.",
      name: "Sophia Berger",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">KI mit Herz & Hirn</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Erfahrungen von Menschen, die ihre Geschäftsprozesse mit individuellen KI-Assistenten optimiert haben.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
