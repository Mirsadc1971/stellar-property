
import { SectionHeading } from "@/components/ui/section-heading";

export const FaqSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Common questions about our property management proposal process."
          center
        />
        
        <div className="max-w-3xl mx-auto mt-12 space-y-8">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">How quickly will I receive a proposal?</h3>
            <p className="text-gray-600">
              We typically respond to all proposal requests within 1-2 business days. For complex properties, a site visit may be required before we can provide a comprehensive proposal.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">Is there a fee for receiving a proposal?</h3>
            <p className="text-gray-600">
              No, all of our property management proposals are provided free of charge with no obligation.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">What information will be included in the proposal?</h3>
            <p className="text-gray-600">
              Our proposals include detailed service offerings, management fees, recommended services for your specific property, and an implementation timeline.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">Can the proposal be customized to my specific needs?</h3>
            <p className="text-gray-600">
              Absolutely! We tailor each proposal to the unique needs of your property. The more details you provide in your request, the more customized your proposal will be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
