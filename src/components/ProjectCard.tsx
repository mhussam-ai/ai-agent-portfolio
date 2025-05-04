
import { Project } from "@/types/project";
import { ProjectCardGridView } from "./projects/ProjectCardGridView";
import { ProjectCardListView } from "./projects/ProjectCardListView";

interface ProjectCardProps {
  project: Project;
  index: number;
  view: "grid" | "list";
  setFeaturedProject: (title: string | null) => void;
  isFeatured: boolean;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { view } = props;
  
  if (view === "list") {
    return <ProjectCardListView {...props} />;
  }
  
  return <ProjectCardGridView {...props} />;
};
