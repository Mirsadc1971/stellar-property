
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
}

export default function ServiceCard({ id, icon, emoji, title, description }: ServiceCardProps) {
  return (
    <div id={id} className="bg-white p-8 rounded-lg shadow-md">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
