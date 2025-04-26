
type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div>
      <h3 className="font-heading text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

export function PaymentFAQ() {
  const faqs = [
    {
      question: "When are payments due?",
      answer: "Monthly payments are typically due on the 1st of each month, with a grace period until the 5th. Please check your specific agreement for your property's due dates."
    },
    {
      question: "Is there a fee for online payments?",
      answer: "Credit card payments incur a processing fee of 3.5% per transaction. ACH/eCheck payments from your bank account are free."
    },
    {
      question: "What if my payment is late?",
      answer: "Late fees vary by association and are outlined in your governing documents. Typically, payments received after the grace period incur a late fee as determined by your association's rules."
    },
    {
      question: "How can I check my account balance?",
      answer: "You can view your current balance by logging into your owner portal. If you haven't set up portal access, please contact our office for assistance."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-8">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
