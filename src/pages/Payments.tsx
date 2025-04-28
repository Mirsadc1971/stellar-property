
import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { PaymentMethodCard } from "@/components/payments/PaymentMethodCard";
import { PaymentFees } from "@/components/payments/PaymentFees";
import { PaymentInstructions } from "@/components/payments/PaymentInstructions";
import { PaymentFAQ } from "@/components/payments/PaymentFAQ";
import { ContactSection } from "@/components/payments/ContactSection";

export default function Payments() {
  const paymentMethods = [
    {
      icon: "💻",
      title: "Online Owner Portal",
      description: "Securely manage and process payments through our dedicated online platform.",
      actionButton: {
        label: "Access Portal",
        href: "https://stellarpropertygrp.appfolio.com/connect/",
        variant: "default" as const
      }
    },
    {
      icon: "✉️",
      title: "Mail Payment",
      description: "Traditional check payments sent directly to our office address.",
      actionButton: {
        label: "View Mailing Address",
        variant: "outline" as const
      },
      mailingAddress: true
    },
    {
      icon: "🏦",
      title: "Bank Bill Pay",
      description: "Convenient, zero-fee payment option through your bank's online platform.",
      actionButton: {
        label: "View Instructions",
        variant: "outline" as const
      }
    }
  ];

  return (
    <MainLayout>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">Property Management Payment Options</h1>
            <p className="text-lg text-gray-600">
              Convenient, Secure, and Flexible Payment Methods for Property Owners and Tenants
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h2 className="font-heading text-2xl font-semibold mb-6 text-center">Payment Methods</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {paymentMethods.map((method, index) => (
                  <PaymentMethodCard key={index} {...method} />
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <PaymentFees />
              
              <PaymentInstructions title="Online Payments">
                <p className="text-gray-700 mb-4">
                  Our secure owner portal allows you to make payments, view your account balance, and access important documents.
                  To access the portal, you'll need your account number and password provided to you.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Go to the "Access Portal" button above</li>
                  <li>Enter your account credentials</li>
                  <li>Navigate to the "Payments" section</li>
                  <li>Follow the instructions to submit your payment</li>
                </ol>
              </PaymentInstructions>
              
              <PaymentInstructions title="Mail Payments">
                <p className="text-gray-700 mb-4">
                  If you prefer to mail your payments, please send them to:
                </p>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p>
                    Stellar Property Management<br />
                    5107 North Western Avenue, Suite 1S<br />
                    Chicago, IL 60625
                  </p>
                </div>
                <p className="text-gray-700 mt-4">
                  <strong>Important:</strong> Please include your property address and account number on your check to ensure proper crediting to your account.
                </p>
              </PaymentInstructions>
              
              <PaymentInstructions title="Setting Up Bill Pay">
                <p className="text-gray-700 mb-4">
                  Bill Pay is a convenient way to manage your payments through your own bank's online banking platform.
                  Follow these steps to set up recurring or one-time payments:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Access your bank's online banking portal</li>
                  <li>Look for the "Bill Pay" or "Payments" section</li>
                  <li>Add a new payee using our information:
                    <ul className="list-disc list-inside ml-8 mt-2">
                      <li>Payee Name: Your Association</li>
                      <li>Mailing Address: 5107 North Western Avenue, Suite 1S, Chicago, IL 60625</li>
                    </ul>
                  </li>
                  <li>Schedule your payment (one-time or recurring)</li>
                  <li>Include your property address and unit number in the memo or reference field</li>
                </ol>
              </PaymentInstructions>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Payment FAQs" 
            subtitle="Common questions about payments and billing."
            center
          />
          <PaymentFAQ />
        </div>
      </section>

      <ContactSection />
    </MainLayout>
  );
}
