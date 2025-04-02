import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faBolt, faSeedling, faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const benefits = [
    {
      icon: faMedal,
      title: "Premium Quality",
      description: "Industry-leading print quality on every order"
    },
    {
      icon: faBolt,
      title: "Quick Turnaround",
      description: "Fast printing services when you need them"
    },
    {
      icon: faSeedling,
      title: "Eco-Friendly",
      description: "Sustainable materials and processes"
    },
    {
      icon: faHeadset,
      title: "24/7 Support",
      description: "Chat assistance available anytime"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1612103198005-b238154f4590?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
                  alt="Colorful printing materials and design elements" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl bg-gradient-to-r from-primary to-purple-500 transform rotate-6 -z-10"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl bg-teal-500 transform -rotate-6 -z-10"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">About Zoe's Printbox</h2>
            <p className="text-gray-600 mb-4">
              Zoe's Printbox is a modern printing service that combines expert craftsmanship with innovative technology to deliver exceptional quality for all your printing needs.
            </p>
            <p className="text-gray-600 mb-6">
              Our chatbot assistant makes it easy to get instant answers, recommendations, and price quotes without the wait, allowing you to make informed decisions about your printing projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-3">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
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
              className="bg-gradient-to-r from-primary to-purple-500 text-white py-3 px-8 rounded-full font-heading font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 inline-block text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
