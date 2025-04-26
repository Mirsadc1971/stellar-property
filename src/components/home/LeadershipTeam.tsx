
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, User } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { name: "David Chen", role: "CEO, Licensed Property Manager" },
  { name: "Sarah Rodriguez", role: "Operations Director" },
  { name: "Michael Kim", role: "Association Services Manager" },
];

export default function LeadershipTeam() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <User className="h-5 w-5" />
        Our Leadership Team
      </h3>
      <ul className="space-y-2 text-gray-700">
        {teamMembers.map((member) => (
          <li key={member.name} className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-gray-400" />
            {member.name} - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
