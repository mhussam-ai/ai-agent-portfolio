import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { BlogCard } from "@/components/blog/BlogCard";
import { SearchBar } from "@/components/blog/SearchBar";
import { NoResults } from "@/components/blog/NoResults";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const posts = [
    {
      id: 1,
      slug: "future-of-ai-agents-in-customer-service",
      title: "The Future of AI Agents in Customer Service",
      excerpt: "An in-depth exploration of how AI agents are revolutionizing customer support, with real case studies and implementation strategies for businesses looking to enhance their service capabilities.",
      date: "2025-04-15",
      readTime: "8 min read",
      categories: ["AI Ethics", "Customer Service"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80&auto=format&fit=crop"
    },
    {
      id: 2,
      slug: "complete-guide-to-search-engine-optimization-2025",
      title: "Complete Guide to Search Engine Optimization in 2025",
      excerpt: "An extensive guide to modern SEO practices in 2025, covering everything from technical fundamentals to advanced AI-powered strategies, complete with actionable steps and case studies.",
      date: "2025-04-10",
      readTime: "12 min read",
      categories: ["SEO", "Digital Marketing"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop"
    },
    {
      id: 3,
      slug: "answer-engine-optimization-future-of-search",
      title: "Answer Engine Optimization: The Future of Search",
      excerpt: "Learn the principles of designing intuitive and accessible user interfaces for AI-powered applications, focusing on user experience and ethical considerations.",
      date: "2025-04-05",
      readTime: "10 min read",
      categories: ["AI Search", "SEO"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&auto=format&fit=crop"
    },
    {
      id: 4,
      slug: "technical-seo-fundamentals-modern-websites",
      title: "Technical SEO Fundamentals for Modern Websites",
      excerpt: "Exploring the evolution of autonomous AI agents and their impact on various industries, from customer service to complex decision-making systems.",
      date: "2025-04-01",
      readTime: "11 min read",
      categories: ["Technical SEO", "Web Development"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop"
    },
    {
      id: 5,
      slug: "content-optimization-ai-powered-search",
      title: "Content Optimization for AI-Powered Search",
      excerpt: "A comprehensive guide to implementing ethical principles in AI development, ensuring transparency, fairness, and accountability in your AI systems.",
      date: "2025-03-28",
      readTime: "9 min read",
      categories: ["AI Search", "Content Strategy"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop"
    },
    {
      id: 6,
      slug: "local-seo-strategies-2025",
      title: "Local SEO Strategies for 2025",
      excerpt: "A detailed guide to implementing effective local SEO strategies in 2025, including Google Business Profile optimization, local content creation, citation building, and schema markup techniques.",
      date: "2025-03-20",
      readTime: "12 min read",
      categories: ["Local SEO", "Business Growth"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80&auto=format&fit=crop"
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
