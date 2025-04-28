
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, BookOpen, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/data/blogPosts";
import { BlogPost as BlogPostType } from "@/types/blog";

const BlogPost = () => {
  const { slug } = useParams();
  
  const post = blogPosts.find(p => p.slug === slug);

  // Function to convert markdown headings to HTML with IDs
  const renderContent = (content: string) => {
    // Replace markdown headings with HTML headings with IDs
    const processedContent = content.replace(/## (.*)/g, (match, heading) => {
      const id = heading.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return `<h2 id="${id}" class="text-2xl font-semibold mt-8 mb-4">${heading}</h2>`;
    });

    // Replace markdown code blocks with HTML code blocks
    const contentWithCodeBlocks = processedContent.replace(/```(.*?)\n([\s\S]*?)```/g, 
      '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto my-4"><code>$2</code></pre>'
    );

    // Return as HTML
    return { __html: contentWithCodeBlocks };
  };

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
          <CardDescription className="flex flex-wrap gap-4 text-sm items-center">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
            {post.author && (
              <span className="flex items-center gap-1">
                By {post.author}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-0">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
            
            {post.toc && (
              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" /> Table of Contents
                </h2>
                <ul className="space-y-2">
                  {post.toc.map((item) => (
                    <li key={item.anchor}>
                      <a 
                        href={`#${item.anchor}`}
                        className="text-primary hover:underline flex items-center"
                      >
                        <span className="mr-2">•</span> {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div dangerouslySetInnerHTML={renderContent(post.content)} />
            
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="bg-muted/30 p-6 rounded-lg"
                      itemScope 
                      itemType="https://schema.org/Question"
                    >
                      <h3 
                        className="text-xl font-medium mb-3" 
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                      <div 
                        className="text-muted-foreground"
                        itemScope 
                        itemType="https://schema.org/Answer"
                        itemProp="acceptedAnswer"
                      >
                        <div itemProp="text">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                <h3 className="font-medium mb-2">About the Author</h3>
                <p className="text-sm text-muted-foreground">
                  {post.author || 'Mohammad Hussam'} is a seasoned expert in {post.categories.join(', ')} 
                  with extensive experience in helping businesses and organizations improve their online presence.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 items-center">
                <span className="flex items-center text-sm text-muted-foreground">
                  <Tag className="h-4 w-4 mr-2" /> Topics:
                </span>
                {post.categories.map(category => (
                  <Badge key={category} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {post.relatedPosts && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {post.relatedPosts.map(relatedSlug => {
                    const relatedPost = blogPosts.find(p => p.slug === relatedSlug);
                    if (!relatedPost) return null;
                    
                    return (
                      <Link 
                        to={`/blog/${relatedPost.slug}`} 
                        key={relatedPost.slug}
                        className="group"
                      >
                        <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="h-40 overflow-hidden">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogPost;
