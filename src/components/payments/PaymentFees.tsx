
export function PaymentFees() {
  return (
    <div>
      <h3 className="font-heading text-xl font-semibold mb-3">Payment Fees Explained</h3>
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
        <p className="text-yellow-800">
          <strong>Fee Notice:</strong> We strive to provide transparent and cost-effective payment options.
        </p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Credit Card Payments:</strong> 3.5% processing fee per transaction</li>
        <li><strong>Bank Bill Pay:</strong> 100% FREE - No additional charges</li>
      </ul>
      <p className="text-gray-600 mt-4 text-sm italic">
        We recommend Bank Bill Pay for the most cost-effective payment method.
      </p>
    </div>
  );
}
