import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

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
                  <Button 
                    className="w-full bg-darkBlue hover:bg-blue-800"
                    onClick={() => window.open('https://stellarpropertygrp.appfolio.com/oportal/users/log_in', '_blank')}
                  >
                    Access Portal
                  </Button>
                </div>
                
                <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Mail Payment</h3>
                  <p className="text-gray-600 mb-4">
                    Send check payments to our office address with your account details.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
                        View Mailing Address
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Mailing Address for Payments</DialogTitle>
                        <DialogDescription>
                          Please send check payments to the following address:
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
                </div>
              
                <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">🏦</div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Bill Pay</h3>
                  <p className="text-gray-600 mb-4">
                    Set up Bill Pay through your bank's online banking platform.
                  </p>
                  <div className="text-sm space-y-2">
                    <p className="font-semibold">Instructions:</p>
                    <ol className="text-left list-decimal list-inside space-y-1">
                      <li>Log in to your bank's online banking</li>
                      <li>Navigate to Bill Pay or Payments section</li>
                      <li>Add new payee with these details:
                        <div className="ml-6 mt-1">
                          <p><strong>Payable to:</strong> Your Association</p>
                          <p><strong>Mailing Address:</strong><br />
                          5107 North Western Avenue, Suite 1S<br />
                          Chicago, IL 60625</p>
                        </div>
                      </li>
                      <li>Set up your payment schedule</li>
                    </ol>
                  </div>
                  <div className="text-sm text-gray-600 italic mt-4">
                    <strong>Important:</strong> Include your property address and unit number with the payment.
                  </div>
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
                <h3 className="font-heading text-xl font-semibold mb-3">Setting Up Bill Pay</h3>
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
                Free Bill Pay! We do not charge any additional fees for online payments. Simply use your bank's online banking to set up payments at no extra cost.
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
