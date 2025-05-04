
export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  date: string;
  category: string;
  github?: string;
  status?: string;
  metrics?: Record<string, string>;
  isWinner?: boolean;
  winnerDetails?: {
    hackathon: string;
    date: string;
    achievement: string;
    judges?: string[];
    prize?: string;
  };
}

export interface ProjectCardBaseProps {
  project: Project;
  index: number;
  setFeaturedProject: (title: string | null) => void;
  isFeatured: boolean;
}
