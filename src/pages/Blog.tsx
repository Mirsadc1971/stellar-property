
import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
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

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">Manage369 Blog</h1>
            <p className="text-lg text-gray-600">
              Insights, guides, and expert advice on property management, association leadership, and investment throughout Chicago and the suburbs. Each article is provided or curated by the local experts at Manage369.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-200 h-48">
        {post.image ? (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-100">
            <span className="text-3xl text-gray-400">📝</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.author} • {post.date}</span>
          <Link to={`/blog/${post.id}`} className="text-darkBlue hover:text-blue-700 font-medium">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
