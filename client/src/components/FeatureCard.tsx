import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FeatureCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg text-center transition-all duration-300">
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-primary/20 transform hover:scale-105 transition-all duration-300">
        <FontAwesomeIcon icon={icon} className="text-2xl" />
      </div>
      <h3 className="text-xl font-heading font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
