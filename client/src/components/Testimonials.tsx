import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The chat feature made ordering my wedding invitations so easy! I got expert advice on paper types and designs without having to visit a store.",
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      quote: "I needed business cards in a hurry and Zoe's Printbox chat guided me through the whole process. The cards arrived ahead of schedule!",
      name: "Michael Thomas",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5
    },
    {
      quote: "As a small business owner, I love that I can get price quotes through the chat at any time. It helps me plan my marketing materials budget.",
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from people who have experienced our chat-based printing service.</p>
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
