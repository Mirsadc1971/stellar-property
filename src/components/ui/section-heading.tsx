
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function SectionHeading({ 
  title, 
  subtitle, 
  center = false, 
  as: Heading = 'h2' 
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <Heading className="font-heading text-3xl md:text-4xl font-bold mb-4">{title}</Heading>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>
  );
}
