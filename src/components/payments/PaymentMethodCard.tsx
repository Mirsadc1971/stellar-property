
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

type PaymentMethodProps = {
  icon: string;
  title: string;
  description: string;
  actionButton: {
    label: string;
    onClick?: () => void;
    variant?: "default" | "outline";
    href?: string;
  };
  mailingAddress?: boolean;
};

export function PaymentMethodCard({ icon, title, description, actionButton, mailingAddress }: PaymentMethodProps) {
  const ButtonComponent = actionButton.href ? 
    <Button 
      className={`w-full ${actionButton.variant === "outline" ? "border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white" : "bg-darkBlue hover:bg-blue-800"}`}
      variant={actionButton.variant}
      onClick={() => window.open(actionButton.href, '_blank')}
    >
      {actionButton.label}
    </Button>
    : mailingAddress ? (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
            {actionButton.label}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mailing Address for Payments</DialogTitle>
            <DialogDescription>
              Send check payments to the following address:
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-center">
            <p className="font-semibold">
              Manage369 Property Management<br />
              5107 North Western Avenue, Suite 1S<br />
              Chicago, IL 60625
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Important:</strong> Include your property address and account number on the check.
          </p>
        </DialogContent>
      </Dialog>
    ) : (
      <Button 
        className={`w-full ${actionButton.variant === "outline" ? "border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white" : "bg-darkBlue hover:bg-blue-800"}`}
        variant={actionButton.variant}
        onClick={actionButton.onClick}
      >
        {actionButton.label}
      </Button>
    );

  return (
    <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {ButtonComponent}
    </div>
  );
}
