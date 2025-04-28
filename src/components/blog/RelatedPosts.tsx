
import { Link } from "react-router-dom";
import { BlogPost } from "@/types/blog";

interface RelatedPostsProps {
  relatedPosts: BlogPost[];
}

export function RelatedPosts({ relatedPosts }: RelatedPostsProps) {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t">
      <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {relatedPosts.map(post => (
          <Link 
            to={`/blog/${post.slug}`} 
            key={post.slug}
            className="group"
          >
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
