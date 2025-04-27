
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and start building web applications...",
      date: "2025-04-20",
      readTime: "5 min read",
    },
    {
      title: "Understanding TypeScript",
      excerpt: "A comprehensive guide to TypeScript and its benefits...",
      date: "2025-04-15",
      readTime: "7 min read",
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Explore modern CSS features and how to use them effectively...",
      date: "2025-04-10",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <Card key={post.title} className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <div className="flex gap-4 text-sm text-muted-foreground mb-4">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <Button variant="link" className="p-0">
              Read More →
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
