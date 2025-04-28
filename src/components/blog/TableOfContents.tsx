
import { BookOpen } from "lucide-react";

interface TableOfContentsProps {
  toc: {
    title: string;
    anchor: string;
  }[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  if (!toc || toc.length === 0) return null;
  
  return (
    <div className="bg-muted/50 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <BookOpen className="mr-2 h-5 w-5" /> Table of Contents
      </h2>
      <ul className="space-y-2">
        {toc.map((item) => (
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
  );
}
