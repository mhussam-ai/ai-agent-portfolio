
import { ProjectCard } from "@/components/ProjectCard";
import { NoProjectsFound } from "./NoProjectsFound";

interface Project {
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
}

interface ProjectsGridProps {
  projects: Project[];
  view: "grid" | "list";
  setFeaturedProject: (title: string | null) => void;
  featuredProject: string | null;
  clearFilters: () => void;
}

export const ProjectsGrid = ({
  projects,
  view,
  setFeaturedProject,
  featuredProject,
  clearFilters,
}: ProjectsGridProps) => {
  if (projects.length === 0) {
    return <NoProjectsFound clearFilters={clearFilters} />;
  }

  return (
    <div className={view === 'grid' 
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
      : 'flex flex-col gap-4'
    }>
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.title} 
          project={project} 
          index={index} 
          view={view}
          setFeaturedProject={setFeaturedProject}
          isFeatured={featuredProject === project.title}
        />
      ))}
    </div>
  );
};
