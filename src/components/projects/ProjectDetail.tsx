
import { motion } from "framer-motion";
import { X, Github, ExternalLink, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project } from "./useProjectsData";
import { useEffect } from "react";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  // When project detail is shown, prevent scrolling on the body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-64 overflow-hidden rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="absolute top-4 right-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-background/20 hover:bg-background/40 backdrop-blur-md rounded-full"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-primary/20 text-primary-foreground border-primary/30">
                {project.category === 'ai' ? 'AI & ML' : 
                 project.category === 'automation' ? 'Automation' : 
                 project.category === 'blockchain' ? 'Blockchain' : 
                 project.category}
              </Badge>
              {project.status && (
                <Badge className={`capitalize ${
                  project.status === 'completed' ? 'bg-green-500 text-white' : 
                  project.status === 'ongoing' ? 'bg-blue-500 text-white' : 
                  'bg-amber-500 text-white'
                }`}>
                  {project.status}
                </Badge>
              )}
            </div>
            <h2 className="text-3xl font-bold">{project.title}</h2>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="features">Key Features</TabsTrigger>
              {project.metrics && <TabsTrigger value="results">Results</TabsTrigger>}
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-6">{project.description}</p>
                
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="bg-secondary/10 hover:bg-secondary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.github && (
                    <Button asChild variant="outline" className="gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button asChild className="gap-2">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="architecture" className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
              
              <div className="bg-muted/30 border border-border rounded-lg p-6 mb-6">
                {project.architecture ? (
                  <div className="prose max-w-none">
                    <p>{project.architecture}</p>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-muted-foreground">Architecture details not available for this project.</p>
                  </div>
                )}
              </div>
              
              {project.technicalDetails && (
                <>
                  <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
                  <div className="prose max-w-none">
                    <p>{project.technicalDetails}</p>
                  </div>
                </>
              )}
              
              {project.implementationChallenges && (
                <>
                  <h3 className="text-xl font-semibold mb-4">Implementation Challenges</h3>
                  <div className="prose max-w-none">
                    <p>{project.implementationChallenges}</p>
                  </div>
                </>
              )}
            </TabsContent>
            
            <TabsContent value="features" className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <Card key={index} className="bg-muted/20 border-primary/10">
                    <CardContent className="p-4 flex gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p>{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {project.metrics && (
              <TabsContent value="results" className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Project Results</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <Card key={key} className="bg-primary/5 border-primary/10">
                      <CardContent className="p-6">
                        <h4 className="text-sm text-muted-foreground mb-1 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-2xl font-semibold">{value}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </motion.div>
    </motion.div>
  );
};
