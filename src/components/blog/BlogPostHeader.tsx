
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
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
  );
}
