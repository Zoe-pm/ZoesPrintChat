import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon",
        variant: "default"
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">💌 Willkommen bei Zoë's KI Toolbox</h2>
            <p className="text-gray-600 mb-8">
              Du hast Fragen, Ideen oder willst einfach mal plaudern? Sag mir, wie ich dir helfen kann.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-800 mb-1">Standort</h4>
                  <p className="text-gray-600">Berlin</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-4">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-800 mb-1">Telefon</h4>
                  <p className="text-gray-600">+49 (0) 171986277</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0 flex items-center justify-center text-white mr-4">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">zoe-kiconsulting(at)pm.me</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300" aria-label="Pinterest">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">Kontaktiere uns direkt ✨</h3>
            
            <div className="mb-8 text-center">
              <p className="text-gray-700 mb-4">
                Nutze den Chat-Bot in der unteren rechten Ecke, um direkt mit uns in Kontakt zu treten.
              </p>
              <p className="text-gray-600 text-sm">
                Der Chat-Bot ist rund um die Uhr für deine Anfragen verfügbar und die einfachste Möglichkeit, uns deine Ideen und Fragen mitzuteilen.
              </p>
            </div>
            
            <button 
              className="bg-gradient-to-r from-primary to-purple-500 text-white py-3 px-8 rounded-full font-heading font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 w-full"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
