
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    categories: string[];
    image: string;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/blog/${post.slug}`} className="block">
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
                <span className="text-primary flex items-center group">
                  Read More 
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </CardFooter>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
