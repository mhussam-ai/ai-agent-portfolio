
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const posts = [
    {
      id: 1,
      title: "Building Ethical AI Agents: Best Practices",
      excerpt: "How to develop AI agents that are not only effective but also ethical and transparent in their decision-making processes.",
      date: "2025-04-15",
      readTime: "8 min read",
      categories: ["AI Ethics", "Development"],
      image: "https://via.placeholder.com/600x300"
    },
    {
      id: 2,
      title: "Fine-tuning LLMs for Domain-Specific Applications",
      excerpt: "A comprehensive guide to fine-tuning large language models to perform exceptionally well in specialized domains and industries.",
      date: "2025-04-10",
      readTime: "12 min read",
      categories: ["Machine Learning", "LLMs"],
      image: "https://via.placeholder.com/600x300"
    },
    {
      id: 3,
      title: "Creating Responsive UIs for AI Applications",
      excerpt: "Design strategies and implementation techniques for building interfaces that effectively present AI capabilities to users.",
      date: "2025-04-05",
      readTime: "6 min read",
      categories: ["UI/UX", "Frontend"],
      image: "https://via.placeholder.com/600x300"
    },
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
      <motion.h1 variants={item} className="text-4xl font-bold mb-8">Blog</motion.h1>
      
      <motion.div variants={item} className="mb-8 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          placeholder="Search articles..." 
          className="pl-10"
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
            <motion.div key={post.id} variants={item}>
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.categories.map(category => (
                          <Badge key={category} variant="secondary">{category}</Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl font-semibold">{post.title}</CardTitle>
                      <CardDescription className="flex gap-4 text-sm">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="p-0 h-auto">
                        Read More →
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
