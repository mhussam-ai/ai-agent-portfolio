
interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-muted/30 p-6 rounded-lg"
            itemScope 
            itemType="https://schema.org/Question"
          >
            <h3 
              className="text-xl font-medium mb-3" 
              itemProp="name"
            >
              {faq.question}
            </h3>
            <div 
              className="text-muted-foreground"
              itemScope 
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <div itemProp="text">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
