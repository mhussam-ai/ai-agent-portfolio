
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  categories: string[];
  image: string;
  author?: string;
  toc?: {
    title: string;
    anchor: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedPosts?: string[];
}
