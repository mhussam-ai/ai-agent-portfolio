import { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { Search, Star, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [featuredProject, setFeaturedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);
  
  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end start"]
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    scrollingDown ? [0.2, 0.6, 1] : [0.3, 0.7, 1]
  );
  
  const projects = [
    {
      title: "Voice AI Agent for Customer Support",
      description: "A voice AI agent using ElevenLabs SDK and LangChain that reduced average response time by 20%. Implemented advanced voice processing capabilities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["ElevenLabs", "LangChain", "Python"],
      features: [
        "20% reduction in response time",
        "Real-time voice processing",
        "Natural language understanding",
        "Advanced voice synthesis"
      ],
      date: "Jan 2025 - Mar 2025",
      category: "ai",
      status: "completed",
      metrics: {
        responseTime: "20% faster",
        accuracy: "95% understanding rate",
        satisfaction: "4.8/5 user rating"
      }
    },
    {
      title: "Lead Research and Generation Agent",
      description: "An autonomous agent using Relevance AI that increased lead conversion rates by 10%. Streamlined lead generation process.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["Relevance AI", "Python", "FastAPI"],
      features: [
        "10% increase in conversion rates",
        "Automated lead research",
        "Real-time data processing",
        "Intelligent lead scoring"
      ],
      date: "Feb 2025 - Apr 2025",
      category: "ai",
      status: "completed",
      metrics: {
        conversionRate: "10% increase",
        leadQuality: "32% higher quality",
        processTime: "65% faster"
      }
    },
    {
      title: "Autonomous Task Agent",
      description: "Task automation agent using BrowserUse and custom chain-of-thought prompts for reliable web interactions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80&auto=format&fit=crop",
      tech: ["BrowserUse", "Playwright", "LangChain"],
      features: [
        "Automated web interactions",
        "Custom chain-of-thought prompts",
        "Reliable task execution",
        "Scalable automation"
      ],
      date: "Jan 2025 - Mar 2025",
      category: "automation",
      status: "ongoing",
      metrics: {
        automationRate: "87% of tasks automated",
        errorRate: "Less than 3%",
        timeToImplement: "4 weeks"
      }
    },
    {
      title: "GrainSight AI",
      description: "Extended academic project for grain quality prediction using Google ADK and Gemini model, improving prediction accuracy by 12%.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["Streamlit", "Google ADK", "Python", "Gemini"],
      features: [
        "12% improvement in accuracy",
        "Real-time grain analysis",
        "Advanced ML models",
        "Intuitive interface"
      ],
      github: "https://github.com/mhussam-ai/Grain-Quality-AI",
      date: "Mar 2024 - Dec 2024",
      category: "ai",
      status: "completed",
      metrics: {
        accuracy: "12% improvement",
        processingSpeed: "Real-time analysis",
        adoption: "Used by 3 agricultural firms"
      }
    },
    {
      title: "Predicting CVD",
      description: "RNN-based cardiovascular disease risk assessment model achieving AUC score of 0.9, outperforming baselines by 10%.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["TensorFlow", "Keras", "Matplotlib"],
      features: [
        "0.9 AUC score",
        "10% performance improvement",
        "Real-time risk assessment",
        "Advanced visualization"
      ],
      github: "https://github.com/sam-dev-coder/Predicting-CVD-Risk-and-Outcomes-with-RNN",
      date: "May 2024 - Sep 2024",
      category: "ai",
      status: "completed",
      metrics: {
        aucScore: "0.9",
        improvement: "10% over baselines",
        impactFactor: "Cited by 7 research papers"
      }
    },
    {
      title: "Organic Food Traceability",
      description: "Blockchain-based traceability system for organic food supply chains ensuring transparency and authenticity.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&auto=format&fit=crop",
      tech: ["Blockchain", "Python", "Smart Contracts"],
      features: [
        "End-to-end traceability",
        "Immutable record keeping",
        "Supply chain verification",
        "Real-time tracking"
      ],
      github: "https://github.com/mhussam-ai/Organic-Food-Traceability-Using-Blockchain",
      date: "Mar 2024 - May 2024",
      category: "blockchain",
      status: "completed",
      metrics: {
        trustScore: "92% consumer trust",
        verificationTime: "3 seconds on average",
        fraudReduction: "28% reduction in fraud cases"
      }
    },
    {
      title: "StimulerVoiceX",
      description: "AI-powered noise cancellation system improving audio clarity by 25% with real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["TensorFlow", "Keras", "Audio Processing"],
      features: [
        "25% improved audio clarity",
        "Real-time noise reduction",
        "Low latency processing",
        "Multi-source support"
      ],
      github: "https://github.com/sam-dev-coder/StimulerVoiceX",
      date: "Jun 2023 - Aug 2023",
      category: "ai",
      status: "completed",
      metrics: {
        audioClarity: "25% improvement",
        latency: "Under 10ms",
        userFeedback: "4.7/5 average rating"
      }
    },
    {
      title: "CollegeBot",
      description: "College query chatbot using Rasa, handling 90% of queries accurately with natural language understanding.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["Rasa", "Python", "NLP"],
      features: [
        "90% query accuracy",
        "Natural language processing",
        "Real-time responses",
        "Extensible architecture"
      ],
      github: "https://github.com/sam-dev-coder/CollegeBot",
      date: "Jun 2022 - Sep 2022",
      category: "ai",
      status: "archived",
      metrics: {
        queryAccuracy: "90%",
        responseTime: "Under 1 second",
        userQueries: "Handled 50,000+ monthly queries"
      }
    }
  ];
  
  const allSkills = Array.from(
    new Set(projects.flatMap(project => project.tech))
  ).sort();
  
  const statuses = Array.from(
    new Set(projects.map(project => project.status))
  );

  const filterProjects = (projects, tab, searchTerm, selectedSkills) => {
    return projects.filter(project => {
      const matchesTab = tab === "all" || project.category === tab;
      const matchesSearch = searchTerm === "" || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesSkills = selectedSkills.length === 0 || 
        selectedSkills.every(skill => project.tech.includes(skill));
      
      return matchesTab && matchesSearch && matchesSkills;
    });
  };
  
  const getFeaturedProject = () => {
    if (!featuredProject) return null;
    return projects.find(project => project.title === featuredProject);
  };
  
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSkills([]);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div ref={projectsRef} className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <ProjectsHero scrollProgress={scrollYProgress} />
      
      <motion.div 
        className="container mx-auto px-4 py-10"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sticky top-20 z-30 pt-4 pb-4 bg-background/80 backdrop-blur-sm border-b mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold mr-4">Projects</h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
                  {projects.length} Projects
                </Badge>
                {selectedSkills.length > 0 && (
                  <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
                    {selectedSkills.length} Filters
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
          
          <ScrollArea className="w-full mt-4">
            <Tabs defaultValue="all" className="w-full" value={activeTab} onValueChange={handleTabChange}>
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
              
              {featuredProject && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-10 mt-8"
                >
                  <div className="relative p-6 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 mb-8">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-4 right-4"
                      onClick={() => setFeaturedProject(null)}
                      aria-label="Close featured project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                      </svg>
                    </Button>
                    
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden rounded-lg">
                        <img 
                          src={getFeaturedProject()?.image} 
                          alt={getFeaturedProject()?.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="lg:w-1/2">
                        <div className="flex items-center mb-4">
                          <Badge className="bg-yellow-500 text-white">Featured Project</Badge>
                          <Badge className="ml-2 capitalize">{getFeaturedProject()?.category}</Badge>
                          <Badge variant="outline" className="ml-2 capitalize">{getFeaturedProject()?.status}</Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3">{getFeaturedProject()?.title}</h3>
                        <p className="text-muted-foreground mb-4">{getFeaturedProject()?.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {Object.entries(getFeaturedProject()?.metrics || {}).map(([key, value]) => (
                            <div key={key} className="p-3 rounded-lg bg-background/50 border">
                              <div className="text-sm text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="text-lg font-semibold">{value}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {getFeaturedProject()?.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-start gap-4 mt-4">
                          {getFeaturedProject()?.github && (
                            <Button asChild variant="outline" className="gap-2">
                              <a href={getFeaturedProject()?.github} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                  <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                View Code
                              </a>
                            </Button>
                          )}
                          <Button variant="outline" className="gap-2">
                            <Star className="h-4 w-4" />
                            {getFeaturedProject()?.features.length} Features
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <TabsContent value="all" className="mt-8">
                <div className={view === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'flex flex-col gap-4'
                }>
                  {filterProjects(projects, "all", searchTerm, selectedSkills).map((project, index) => (
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
                
                {filterProjects(projects, "all", searchTerm, selectedSkills).length === 0 && (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Search className="h-8 w-8 text-primary/70" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">No projects found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={clearFilters} variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Clear Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
                
              <TabsContent value="ai" className="mt-8">
                <div className={view === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'flex flex-col gap-4'
                }>
                  {filterProjects(projects, "ai", searchTerm, selectedSkills).map((project, index) => (
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
                
                {filterProjects(projects, "ai", searchTerm, selectedSkills).length === 0 && (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Search className="h-8 w-8 text-primary/70" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">No projects found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={clearFilters} variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Clear Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
                
              <TabsContent value="automation" className="mt-8">
                <div className={view === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'flex flex-col gap-4'
                }>
                  {filterProjects(projects, "automation", searchTerm, selectedSkills).map((project, index) => (
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
                
                {filterProjects(projects, "automation", searchTerm, selectedSkills).length === 0 && (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Search className="h-8 w-8 text-primary/70" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">No projects found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={clearFilters} variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Clear Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
                
              <TabsContent value="blockchain" className="mt-8">
                <div className={view === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'flex flex-col gap-4'
                }>
                  {filterProjects(projects, "blockchain", searchTerm, selectedSkills).map((project, index) => (
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
                
                {filterProjects(projects, "blockchain", searchTerm, selectedSkills).length === 0 && (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Search className="h-8 w-8 text-primary/70" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">No projects found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={clearFilters} variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Clear Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </ScrollArea>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
