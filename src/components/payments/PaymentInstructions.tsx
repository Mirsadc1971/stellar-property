
type PaymentInstructionsProps = {
  title: string;
  children: React.ReactNode;
};

export function PaymentInstructions({ title, children }: PaymentInstructionsProps) {
  return (
    <div>
      <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
