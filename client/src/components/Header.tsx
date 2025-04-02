import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`w-full py-4 px-6 bg-white fixed top-0 z-50 transition-all duration-300 ${
      isScrolled ? "shadow-md" : "shadow-sm"
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white mr-3">
              <FontAwesomeIcon icon={faPrint} />
            </div>
            <h1 className="text-2xl font-heading font-bold text-gray-800">
              <span className="text-primary">Zoes</span> Printbox
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick("features")} 
              className="font-heading font-medium hover:text-primary transition-all"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick("how-it-works")} 
              className="font-heading font-medium hover:text-primary transition-all"
            >
              How it Works
            </button>
            <button 
              onClick={() => handleNavClick("about")} 
              className="font-heading font-medium hover:text-primary transition-all"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick("contact")} 
              className="font-heading font-medium hover:text-primary transition-all"
            >
              Contact
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <button 
              className="text-gray-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick("features")}
                className="font-heading font-medium py-2 hover:text-primary transition-all text-left"
              >
                Features
              </button>
              <button
                onClick={() => handleNavClick("how-it-works")}
                className="font-heading font-medium py-2 hover:text-primary transition-all text-left"
              >
                How it Works
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="font-heading font-medium py-2 hover:text-primary transition-all text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="font-heading font-medium py-2 hover:text-primary transition-all text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
