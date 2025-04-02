import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-r from-primary to-purple-500 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3">
                <FontAwesomeIcon icon={faPrint} />
              </div>
              <h3 className="text-xl font-heading font-bold">
                <span className="text-white">Zoes</span> Printbox
              </h3>
            </div>
            <p className="text-white/80 mb-6">
              Your friendly printing assistant is just a chat away. Get instant help with all your printing needs!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("features");
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
                  className="text-white/80 hover:text-white transition-all"
                >
                  Features
                </button>
              </li>
              <li>
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
                  className="text-white/80 hover:text-white transition-all"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("about");
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
                  className="text-white/80 hover:text-white transition-all"
                >
                  About Us
                </button>
              </li>
              <li>
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
                  className="text-white/80 hover:text-white transition-all"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-all">Photo Printing</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-all">Business Cards</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-all">Brochures & Flyers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-all">Custom Stationery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Business Hours</h4>
            <ul className="space-y-3">
              <li className="text-white/80">Monday - Friday: 9am - 6pm</li>
              <li className="text-white/80">Saturday: 10am - 4pm</li>
              <li className="text-white/80">Sunday: Closed</li>
              <li className="text-white/80">Chat Support: 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 mb-4 md:mb-0">© {new Date().getFullYear()} Zoe's Printbox. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
