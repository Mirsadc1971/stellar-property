
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl font-semibold mb-4">Need Help With Your Payment?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          If you have any questions about making payments or need assistance with your account, our team is here to help.
        </p>
        <div className="space-x-4">
          <Button className="bg-darkBlue hover:bg-blue-800">
            <a href="tel:7737280652">Call Us: 773.728.0652</a>
          </Button>
          <Button 
            variant="outline" 
            className="border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white"
          >
            <a href="mailto:service@stellarpropertygroup.com">Email Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
