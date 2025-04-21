
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Payments() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">Make a Payment</h1>
            <p className="text-lg text-gray-600">
              Easily make payments for your property services online.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h2 className="font-heading text-2xl font-semibold mb-6 text-center">Payment Options</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Owner Portal</h3>
                  <p className="text-gray-600 mb-4">
                    Log in to your secure owner portal to make payments and view your account.
                  </p>
                  <Button className="w-full bg-darkBlue hover:bg-blue-800">
                    Access Portal
                  </Button>
                </div>
                
                <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Mail Payment</h3>
                  <p className="text-gray-600 mb-4">
                    Send check payments to our office address with your account details.
                  </p>
                  <Button variant="outline" className="w-full border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
                    View Address
                  </Button>
                </div>
                
                <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">🏦</div>
                  <h3 className="font-heading text-xl font-semibold mb-2">ACH/Bank Transfer</h3>
                  <p className="text-gray-600 mb-4">
                    Set up automatic recurring payments directly from your bank account.
                  </p>
                  <Button variant="outline" className="w-full border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
                    Setup ACH
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Payment Instructions */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3">Online Payments</h3>
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
              </div>
              
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3">Mail Payments</h3>
                <p className="text-gray-700 mb-4">
                  If you prefer to mail your payments, please send them to:
                </p>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p>
                    Manage369 Property Management<br />
                    5107 North Western Avenue, Suite 1S<br />
                    Chicago, IL 60625
                  </p>
                </div>
                <p className="text-gray-700 mt-4">
                  <strong>Important:</strong> Please include your property address and account number on your check to ensure proper crediting to your account.
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3">ACH/Automatic Payments</h3>
                <p className="text-gray-700 mb-4">
                  Set up convenient recurring payments that are automatically withdrawn from your bank account each month.
                  This ensures your payments are always on time and helps you avoid late fees.
                </p>
                <p className="text-gray-700">
                  To set up automatic payments, please contact our office at 773.728.0652 or email us at service@manage369.com.
                  We'll provide you with the necessary forms and instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Payment FAQs" 
            subtitle="Common questions about payments and billing."
            center
          />
          
          <div className="max-w-3xl mx-auto mt-10 space-y-8">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">When are payments due?</h3>
              <p className="text-gray-600">
                Monthly payments are typically due on the 1st of each month, with a grace period until the 5th. Please check your specific agreement for your property's due dates.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">Is there a fee for online payments?</h3>
              <p className="text-gray-600">
                ACH payments (e-checks) from your bank account are free. Credit card payments incur a small processing fee of 2.95%.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">What if my payment is late?</h3>
              <p className="text-gray-600">
                Late fees vary by association and are outlined in your governing documents. Typically, payments received after the grace period incur a late fee as determined by your association's rules.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">How can I check my account balance?</h3>
              <p className="text-gray-600">
                You can view your current balance by logging into your owner portal. If you haven't set up portal access, please contact our office for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            <Button variant="outline" className="border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
              <a href="mailto:service@manage369.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
