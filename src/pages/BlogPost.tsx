
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/data/blogPosts";
import { BlogPost as BlogPostType } from "@/types/blog";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ContentRenderer } from "@/components/blog/ContentRenderer";
import { FAQSection } from "@/components/blog/FAQSection";
import { PostMetaFooter } from "@/components/blog/PostMetaFooter";
import { RelatedPosts } from "@/components/blog/RelatedPosts";

const BlogPost = () => {
  const { slug } = useParams();
  
  const post = blogPosts.find(p => p.slug === slug);

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

  // Find related posts if they exist
  const relatedPostsData = post.relatedPosts
    ? post.relatedPosts
        .map(slug => blogPosts.find(p => p.slug === slug))
        .filter((p): p is BlogPostType => p !== undefined)
    : [];

  return (
    <>
      {/* Add SEO meta tags with React Helmet */}
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle || post.title} />
        <meta name="twitter:description" content={post.metaDescription || post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <link rel="canonical" href={`https://example.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${post.title}",
              "image": "${post.image}",
              "author": {
                "@type": "Person",
                "name": "${post.author || 'Mohammad Hussam'}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Mohammad Hussam Portfolio",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://example.com/logo.png"
                }
              },
              "datePublished": "${post.date}",
              "dateModified": "${post.date}",
              "description": "${post.metaDescription || post.excerpt}"
            }
          `}
        </script>
      </Helmet>

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
          
          <BlogPostHeader post={post} />
          
          <CardContent className="px-0">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
              
              {/* Table of Contents */}
              {post.toc && <TableOfContents toc={post.toc} />}
              
              {/* Main Content */}
              <ContentRenderer content={post.content} />
              
              {/* FAQs Section */}
              {post.faqs && <FAQSection faqs={post.faqs} />}
              
              {/* Author and Tags Section */}
              <PostMetaFooter author={post.author || 'Mohammad Hussam'} categories={post.categories} />

              {/* Related Posts Section - if available */}
              {relatedPostsData.length > 0 && <RelatedPosts relatedPosts={relatedPostsData} />}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default BlogPost;
