interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative z-10">
      <div className="w-12 h-12 rounded-full bg-white text-primary font-heading font-bold text-xl flex items-center justify-center mx-auto mb-5">
        {number}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}
