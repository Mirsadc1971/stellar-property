
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="bg-darkBlue py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Simplify Your Property Management?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join hundreds of property owners in Chicago who trust Manage369 with their valuable investments.
        </p>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-darkBlue">
          <Link to="/contact">Get Started Today</Link>
        </Button>
      </div>
    </section>
  );
}
