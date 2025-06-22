import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo/SEOHead";

export default function Blog() {
  return (
    <MainLayout>
      <SEOHead
        title="Chicago Property Management Blog | Stellar Property Management"
        description="Expert advice on HOA management, condo associations, and property investment throughout Chicago's neighborhoods. Written by our experienced local team."
        canonical="/blog"
        keywords="Chicago property management blog, HOA management tips, condo association advice, Chicago real estate, property management resources"
      />
      
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">Chicago Property Management Insights</h1>
            <p className="text-lg text-gray-600">
              Expert advice on HOA management, condo associations, and property investment throughout Chicago's neighborhoods. Written by our experienced local team.
            </p>
          </div>
        </div>
      </section>

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
      <div className="bg-gray-200 h-48">
        {post.image ? (
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-100">
            <span className="text-3xl text-gray-400">📝</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <Badge variant="outline" className="mb-3">Chicago Property Management</Badge>
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