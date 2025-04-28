
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectsGrid } from "./ProjectsGrid";
import { Project } from "./useProjectsData";

interface ProjectTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  projects: Project[];
  view: "grid" | "list";
  setFeaturedProject: (title: string | null) => void;
  featuredProject: string | null;
  clearFilters: () => void;
  filterProjects: (projects: Project[], tab: string, searchTerm: string, selectedSkills: string[]) => Project[];
  searchTerm: string;
  selectedSkills: string[];
}

export const ProjectTabs = ({
  activeTab,
  setActiveTab,
  projects,
  view,
  setFeaturedProject,
  featuredProject,
  clearFilters,
  filterProjects,
  searchTerm,
  selectedSkills,
}: ProjectTabsProps) => {
  return (
    <ScrollArea className="w-full mt-4">
      <Tabs defaultValue="all" className="w-full" value={activeTab} onValueChange={value => setActiveTab(value)}>
        <TabsList className="flex flex-wrap gap-2">
          <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            All Projects
          </TabsTrigger>
          <TabsTrigger value="ai" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            AI & ML
          </TabsTrigger>
          <TabsTrigger value="automation" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Automation
          </TabsTrigger>
          <TabsTrigger value="blockchain" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Blockchain
          </TabsTrigger>
        </TabsList>
        
        {["all", "ai", "automation", "blockchain"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-8">
            <ProjectsGrid
              projects={filterProjects(projects, tab, searchTerm, selectedSkills)}
              view={view}
              setFeaturedProject={setFeaturedProject}
              featuredProject={featuredProject}
              clearFilters={clearFilters}
            />
          </TabsContent>
        ))}
      </Tabs>
    </ScrollArea>
  );
};
