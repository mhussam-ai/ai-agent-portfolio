
import { Badge } from "@/components/ui/badge";
import { ProjectFilters } from "./ProjectFilters";
import { Button } from "@/components/ui/button";

interface ProjectsHeaderProps {
  totalProjects: number;
  selectedSkillsCount: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  allSkills: string[];
  toggleSkill: (skill: string) => void;
  clearFilters: () => void;
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

export const ProjectsHeader = ({
  totalProjects,
  selectedSkillsCount,
  searchTerm,
  setSearchTerm,
  selectedSkills,
  allSkills,
  toggleSkill,
  clearFilters,
  view,
  setView,
}: ProjectsHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mr-4">Projects</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
            {totalProjects} Projects
          </Badge>
          {selectedSkillsCount > 0 && (
            <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
              {selectedSkillsCount} Filters
            </Badge>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2 w-full md:w-auto">
        <ProjectFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSkills={selectedSkills}
          allSkills={allSkills}
          toggleSkill={toggleSkill}
          clearFilters={clearFilters}
        />
        
        <Button
          variant="outline"
          size="icon"
          className={`${view === 'grid' ? 'bg-primary/10' : ''}`}
          onClick={() => setView('grid')}
          aria-label="Grid view"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className={`${view === 'list' ? 'bg-primary/10' : ''}`}
          onClick={() => setView('list')}
          aria-label="List view"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
        </Button>
      </div>
    </div>
  );
};
