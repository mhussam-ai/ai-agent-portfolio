import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { BlogCard } from "@/components/blog/BlogCard";
import { SearchBar } from "@/components/blog/SearchBar";
import { NoResults } from "@/components/blog/NoResults";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post =>
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
    <>
      <Helmet>
        <title>Blog - SEO & Digital Marketing Insights | Mohammad Hussam</title>
        <meta name="description" content="Explore expert insights on SEO, Answer Engine Optimization, Technical SEO, AI Search, and Digital Marketing strategies from Mohammad Hussam." />
        <meta property="og:title" content="Blog - SEO & Digital Marketing Insights | Mohammad Hussam" />
        <meta property="og:description" content="Explore expert insights on SEO, Answer Engine Optimization, Technical SEO, AI Search, and Digital Marketing strategies from Mohammad Hussam." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://example.com/blog" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Mohammad Hussam Blog",
              "description": "Expert insights on SEO, Answer Engine Optimization, Technical SEO, AI Search, and Digital Marketing",
              "url": "https://example.com/blog",
              "publisher": {
                "@type": "Person",
                "name": "Mohammad Hussam"
              }
            }
          `}
        </script>
      </Helmet>

      <motion.div 
        className="container mx-auto px-4 py-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-50" />
          <motion.div 
            className="relative z-10 max-w-4xl mx-auto text-center py-12"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              variants={item}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover"
            >
              AI & Tech Insights
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-lg md:text-xl text-muted-foreground mb-6"
            >
              Exploring the intersection of AI, Machine Learning, and Modern Development
            </motion.p>
            <motion.div 
              variants={item}
              className="flex flex-wrap justify-center gap-3"
            >
              <Badge variant="secondary" className="text-sm py-1.5 px-4">
                AI Development
              </Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-4">
                Technical Insights
              </Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-4">
                Best Practices
              </Badge>
            </motion.div>
          </motion.div>
        </div>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {filteredPosts.length > 0 ? (
          <motion.div 
            className="grid gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>
        ) : (
          <NoResults />
        )}
      </motion.div>
    </>
  );
};

export default Blog;
