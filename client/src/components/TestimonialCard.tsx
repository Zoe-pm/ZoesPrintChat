interface TestimonialCardProps {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
}

export default function TestimonialCard({ quote, name, avatar, rating }: TestimonialCardProps) {
  // Generate star ratings as simple text (no icons)
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    let starsText = '★'.repeat(fullStars);
    
    if (rating % 1 !== 0) {
      starsText += '½';
    }
    
    return <span className="text-amber-400 text-lg">{starsText}</span>;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg relative transition-all duration-300">
      {/* Quote mark */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white shadow-lg shadow-primary/30 transform hover:rotate-12 transition-all duration-300">
        <span className="text-xl font-bold">"</span>
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
            <div className="flex">
              {renderStars()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
