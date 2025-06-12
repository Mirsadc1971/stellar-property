
import { Link } from "react-router-dom";
import Gpt4ChatBox from "./Gpt4ChatBox";

export default function AIAssistantSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-darkBlue mb-8">
            Your AI Property Management Assistant
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Get instant insights, answers, and guidance about Chicago property management directly from our advanced AI assistant. 
            Ask about specific neighborhoods like <Link to="/neighborhoods/lakeview" className="text-darkBlue hover:underline">Lakeview</Link> or 
            <Link to="/neighborhoods/west-loop" className="text-darkBlue hover:underline mx-1">West Loop</Link> management challenges.
          </p>
          <Gpt4ChatBox />
        </div>
      </div>
    </section>
  );
}
