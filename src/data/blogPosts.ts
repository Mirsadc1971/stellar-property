
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-to-choose",
    title: "How to Choose a Property Management Company",
    excerpt: "A complete guide to selecting the right property management partner for your real estate assets in Chicago.",
    author: "Sarah Anderson",
    date: "4/9/2025",
  },
  {
    id: "condo-association-help",
    title: "5 Signs Your Condo Association Needs Help",
    excerpt: "Is your condo board overwhelmed? Here are five major red flags that indicate it's time for professional assistance.",
    author: "John Kim",
    date: "3/27/2025",
  },
  {
    id: "reserve-funds",
    title: "Understanding Reserve Funds for Associations",
    excerpt: "Learn the essentials of planning long-term capital repairs and keeping your association solvent.",
    author: "Priya Patel",
    date: "3/13/2025",
  },
  {
    id: "renovation-rules",
    title: "Renovation Rules: What Every Owner Needs to Know",
    excerpt: "A practical breakdown of construction approval processes and consequences for non-compliance.",
    author: "Alex Torres",
    date: "2/19/2025",
  },
  {
    id: "tenant-communication",
    title: "Tenant Communication Best Practices",
    excerpt: "How to keep tenants informed, happy, and following the rules with minimal friction.",
    author: "Natalie Mehta",
    date: "2/5/2025",
  },
  {
    id: "investment-property",
    title: "What Makes a Good Investment Property?",
    excerpt: "Expert insight on evaluating market value, location, and risk for investors in Chicago.",
    author: "Daniel Smith",
    date: "1/24/2025",
  },
  {
    id: "annual-meeting-prep",
    title: "Annual Meeting Prep for HOA Boards",
    excerpt: "Step-by-step checklist for successful and efficient annual meetings with your association.",
    author: "Grace Lin",
    date: "1/9/2025",
  },
  {
    id: "chicago-rental-ordinance",
    title: "Navigating the Chicago Rental Ordinance",
    excerpt: "Essential reading for landlords and residents on compliance with city regulations.",
    author: "Omar Williams",
    date: "12/21/2024",
  },
  {
    id: "owner-tenant-disputes",
    title: "How to Handle Owner and Tenant Disputes",
    excerpt: "A manager's playbook for resolving common conflicts without drama.",
    author: "Maya Lee",
    date: "11/30/2024",
  },
  {
    id: "preventative-maintenance",
    title: "Preventative Maintenance for Commercial Buildings",
    excerpt: "Why proactive upkeep saves you money and headaches over the long run.",
    author: "Jordan Brooks",
    date: "11/15/2024",
  }
];
