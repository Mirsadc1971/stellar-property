
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-700">
            Comprehensive property management solutions tailored to Chicago property owners.
          </p>
        </div>
      </div>
    </section>
  );
}
