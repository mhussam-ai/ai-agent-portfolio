
export interface BlogPost {
  id: number | string;
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
  authorImage?: string;
  toc?: {
    title: string;
    anchor: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedPosts?: string[];
  tableOfContents?: {
    id: string;
    text: string;
    level: number;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
}
