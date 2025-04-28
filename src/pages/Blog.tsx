
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const posts = [
    {
      id: 1,
      title: "The Future of AI Agents in Customer Service",
      excerpt: "An in-depth exploration of how AI agents are revolutionizing customer support, with real case studies and implementation strategies for businesses looking to enhance their service capabilities.",
      date: "2025-04-15",
      readTime: "8 min read",
      categories: ["AI Ethics", "Customer Service"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Mastering LLM Fine-tuning: A Developer's Guide",
      excerpt: "Practical insights and step-by-step instructions for developers looking to fine-tune large language models for specific industry applications, including code examples and best practices.",
      date: "2025-04-10",
      readTime: "12 min read",
      categories: ["Machine Learning", "Development"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Building Human-Centric AI Interfaces",
      excerpt: "Learn the principles of designing intuitive and accessible user interfaces for AI-powered applications, focusing on user experience and ethical considerations.",
      date: "2025-04-05",
      readTime: "6 min read",
      categories: ["UI/UX", "AI Ethics"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "The Rise of Autonomous AI Agents",
      excerpt: "Exploring the evolution of autonomous AI agents and their impact on various industries, from customer service to complex decision-making systems.",
      date: "2025-04-01",
      readTime: "10 min read",
      categories: ["AI", "Automation"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Ethical Considerations in AI Development",
      excerpt: "A comprehensive guide to implementing ethical principles in AI development, ensuring transparency, fairness, and accountability in your AI systems.",
      date: "2025-03-28",
      readTime: "15 min read",
      categories: ["AI Ethics", "Development"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop"
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.categories.some(category => category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item} className="text-4xl font-bold mb-8">Latest Articles</motion.h1>
      
      <motion.div variants={item} className="mb-8 relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          placeholder="Search articles..." 
          className="pl-10 focus-visible:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </motion.div>

      {filteredPosts.length > 0 ? (
        <motion.div 
          className="grid gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredPosts.map((post) => (
            <motion.div 
              key={post.id} 
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-transparent hover:border-primary/20">
                <div className="md:flex">
                  <div className="md:w-1/3 overflow-hidden">
                    <motion.img 
                      src={post.image} 
                      alt={post.title} 
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.categories.map(category => (
                          <Badge key={category} variant="secondary" className="hover:bg-primary hover:text-white transition-all">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl font-semibold group">
                        <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_1px] group-hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-all duration-500">
                          {post.title}
                        </span>
                      </CardTitle>
                      <CardDescription className="flex gap-4 text-sm items-center">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="p-0 h-auto group">
                        <span className="flex items-center">
                          Read More 
                          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div variants={item} className="text-center py-16">
          <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Blog;
