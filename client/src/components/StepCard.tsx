interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative z-10">
      <div className="w-16 h-16 rounded-full bg-white text-primary font-heading font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-lg transition-transform transform hover:scale-110">
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">{number}</span>
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}
