
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface PostMetaFooterProps {
  author: string;
  categories: string[];
}

export function PostMetaFooter({ author, categories }: PostMetaFooterProps) {
  return (
    <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Author */}
      <div className="flex-1">
        <h3 className="font-medium mb-2">About the Author</h3>
        <p className="text-sm text-muted-foreground">
          {author || 'Mohammad Hussam'} is a seasoned expert in {categories.join(', ')} 
          with extensive experience in helping businesses and organizations improve their online presence.
        </p>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="flex items-center text-sm text-muted-foreground">
          <Tag className="h-4 w-4 mr-2" /> Topics:
        </span>
        {categories.map(category => (
          <Badge key={category} variant="outline">
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}
