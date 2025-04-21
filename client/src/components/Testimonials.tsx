import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Zoe hat nicht nur einen Chatbot gebaut – sie hat mein Business entlastet. Als Coach bin ich oft im 1:1-Kontakt, aber der Chatbot von Zoë beantwortet inzwischen die häufigsten Fragen meiner Klient:innen – rund um die Uhr und superfreundlich. Ich war skeptisch, ob Technik zu mir passt, aber Zoe hat alles verständlich erklärt, auf meine Sprache abgestimmt und sogar an Datenschutz gedacht. Einfach wow!",
      name: "Julia M., Selbstständige Coachin & Autorin",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      quote: "Ich wollte keinen Bot – ich wollte Entlastung. Zoe hat's möglich gemacht. Ich war überfordert mit Mails, Anfragen und Orga-Kram – aber zu viel Technik schreckt mich ab. Zoe hat wirklich zugehört, mein Business verstanden und mir dann einen Chatbot gebaut, der genau meine Sprache spricht. Jetzt spare ich Zeit, bin professioneller erreichbar und meine Kund:innen lieben den ersten Eindruck.",
      name: "Sarah M., Coach & Solo-Unternehmerin", 
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      quote: "Als Beraterin konnte ich mit meinem persönlichen RAGbot meinen Kundenstamm verdoppeln. Er beantwortet Erstanfragen, qualifiziert Leads und ich kann mich auf die wichtigen Gespräche konzentrieren.",
      name: "Sophia Berger",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
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