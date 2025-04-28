
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams();
  
  // This would typically come from an API or database
  const posts = [
    {
      id: 1,
      slug: "future-of-ai-agents-in-customer-service",
      title: "The Future of AI Agents in Customer Service",
      excerpt: "An in-depth exploration of how AI agents are revolutionizing customer support, with real case studies and implementation strategies for businesses looking to enhance their service capabilities.",
      content: "The integration of AI agents in customer service represents a significant leap forward in how businesses interact with their customers. These intelligent systems are not just handling routine inquiries; they're learning, adapting, and providing increasingly sophisticated support...",
      date: "2025-04-15",
      readTime: "8 min read",
      categories: ["AI Ethics", "Customer Service"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80&auto=format&fit=crop"
    },
    // ... Add more posts with their full content
  ];

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl">Post not found</h1>
        <Link to="/blog">
          <Button variant="link" className="pl-0">
            <ArrowLeft className="mr-2" /> Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="container mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/blog">
        <Button variant="link" className="pl-0 mb-4">
          <ArrowLeft className="mr-2" /> Back to Blog
        </Button>
      </Link>
      
      <Card className="overflow-hidden border-none shadow-none">
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <CardHeader className="px-0">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map(category => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-4xl font-bold mb-4">{post.title}</CardTitle>
          <CardDescription className="flex gap-4 text-sm items-center">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-0">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">{post.excerpt}</p>
            <p>{post.content}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogPost;
