
import { BlogPost } from "@/types/blog";
import { aiAgentsPost } from "./blog-posts/ai-agents-customer-service";
import { seoGuidePost } from "./blog-posts/seo-guide-2025";
import { answerEnginePost } from "./blog-posts/answer-engine-optimization";
import { technicalSeoPost } from "./blog-posts/technical-seo-fundamentals";
import { contentOptimizationPost } from "./blog-posts/content-optimization";
import { localSeoPost } from "./blog-posts/local-seo-strategies";

export const blogPosts: BlogPost[] = [
  aiAgentsPost,
  seoGuidePost,
  answerEnginePost,
  technicalSeoPost,
  contentOptimizationPost,
  localSeoPost
];
