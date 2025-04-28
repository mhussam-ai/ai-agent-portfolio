
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

export const RecentPosts = () => {
  // Get the 3 most recent blog posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      className="py-24 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <motion.h2 variants={item} className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
              Blog
            </motion.h2>
            <motion.h3 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
              Recent Articles
            </motion.h3>
            <motion.p variants={item} className="text-muted-foreground">
              Insights on AI development, agent systems, and emerging technologies.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 md:mt-0"
          >
            <Button asChild variant="outline" className="gap-2">
              <Link to="/blog">
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {recentPosts.map((post) => (
            <motion.div 
              key={post.id}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring" }}
            >
              <Link to={`/blog/${post.slug}`}>
                <Card className="overflow-hidden h-full border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image || "/placeholder.svg"} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    
                    <div className="mt-4">
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group">
                        Read Article
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
