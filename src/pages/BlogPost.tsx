import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import SEOHead from "@/components/seo/SEOHead";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((post) => post.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} /> Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <SEOHead
        title={`${post.title} | Stellar Property Management Blog`}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
        keywords={`Chicago property management, ${post.title.toLowerCase()}, HOA management Chicago, condo association management, Stellar Property Management`}
      />
      
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="ghost" className="flex items-center gap-2 pl-0 hover:bg-transparent">
                <ArrowLeft size={16} /> Back to Blog
              </Button>
            </Link>
          </div>
          
          {/* Post header */}
          <h1 className="font-heading text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-8">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
          
          {/* Featured image */}
          <div className="w-full h-80 bg-gray-200 rounded-lg mb-8">
            {post.image ? (
              <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg">
                <span className="text-5xl text-gray-400">📝</span>
              </div>
            )}
          </div>
          
          {/* Post content */}
          <div className="prose prose-lg max-w-none">
            {post.content ? (
              <div className="whitespace-pre-line">{post.content}</div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                
                <p className="mb-6">
                  Property management is a complex field that requires expertise in various areas, from maintenance to financial management to legal compliance. This article explores the key considerations when selecting a property management company that will protect your investment and ensure smooth operations.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">What to Look for in a Property Management Company</h2>
                
                <p className="mb-6">
                  The right property management partner should have deep local knowledge, especially in a complex market like Chicago. They should understand the nuances of different neighborhoods, local regulations, and market trends that affect your property's performance.
                </p>
                
                <p className="mb-6">
                  Experience matters significantly in this field. A seasoned property management company will have established relationships with reliable vendors, maintenance professionals, and legal advisors. They'll also have proven systems for handling emergencies, tenant concerns, and routine operations.
                </p>
              </>
            )}
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-4">Need Professional Property Management?</h3>
              <p className="mb-4">
                If you're looking for expert property management services in Chicago or the surrounding suburbs, our team is ready to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-darkBlue hover:bg-blue-800">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
                  <Link to="/request-proposal">Request a Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related posts */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
                    <h4 className="font-semibold mb-2">
                      <Link to={`/blog/${relatedPost.id}`} className="text-darkBlue hover:underline">
                        {relatedPost.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">{relatedPost.excerpt}</p>
                    <Link to={`/blog/${relatedPost.id}`} className="text-sm text-darkBlue hover:underline">
                      Read More →
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}