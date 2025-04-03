import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
}

export default function TestimonialCard({ quote, name, avatar, rating }: TestimonialCardProps) {
  // Generate star ratings
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} className="text-lg mr-1" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half-star" icon={faStarHalfAlt} className="text-lg mr-1" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg relative transition-all duration-300">
      {/* Quote mark */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white shadow-lg shadow-primary/30 transform hover:rotate-12 transition-all duration-300">
        <FontAwesomeIcon icon={faQuoteLeft} size="lg" />
      </div>
      
      <div className="pt-4">
        <p className="text-gray-600 mb-6">{quote}</p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={avatar} 
              alt={`${name} avatar`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-heading font-bold text-gray-800">{name}</h4>
            <div className="flex text-amber-400">
              {renderStars()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
