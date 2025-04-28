
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { ProjectTabs } from "@/components/projects/ProjectTabs";
import { useProjectsData } from "@/components/projects/useProjectsData";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

const Projects = () => {
  const {
    projects,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    allSkills,
    toggleSkill,
    clearFilters,
    view,
    setView,
    featuredProject,
    setFeaturedProject,
    activeTab,
    setActiveTab,
    filterProjects
  } = useProjectsData();
  
  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end start"]
  });

  return (
    <div ref={projectsRef} className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <ProjectsHero scrollProgress={scrollYProgress} />
      
      <div className="container mx-auto px-4 py-10">
        <div className="sticky top-20 z-30 pt-4 pb-4 bg-background/80 backdrop-blur-sm border-b mb-8">
          <ProjectsHeader
            totalProjects={projects.length}
            selectedSkillsCount={selectedSkills.length}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedSkills={selectedSkills}
            allSkills={allSkills}
            toggleSkill={toggleSkill}
            clearFilters={clearFilters}
            view={view}
            setView={setView}
          />
          
          <ProjectTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            projects={projects}
            view={view}
            setFeaturedProject={setFeaturedProject}
            featuredProject={featuredProject}
            clearFilters={clearFilters}
            filterProjects={filterProjects}
            searchTerm={searchTerm}
            selectedSkills={selectedSkills}
          />
        </div>
        
        {featuredProject && (
          <ProjectDetail 
            project={projects.find(p => p.title === featuredProject)!}
            onClose={() => setFeaturedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
