
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { BlogCard } from "@/components/blog/BlogCard";
import { SearchBar } from "@/components/blog/SearchBar";
import { NoResults } from "@/components/blog/NoResults";
import { blogPosts } from "@/data/blogPosts";

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
        <motion.h1 
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }} 
          className="text-4xl font-bold mb-8"
        >
          Latest Articles
        </motion.h1>
        
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
