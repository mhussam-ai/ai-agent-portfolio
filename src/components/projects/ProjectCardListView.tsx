
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Github, Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCardBaseProps } from "@/types/project";

export const ProjectCardListView = ({ 
  project, 
  index, 
  setFeaturedProject, 
  isFeatured 
}: ProjectCardBaseProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`${isFeatured ? 'ring-2 ring-primary/50 ring-offset-2' : ''}`}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-transparent hover:border-primary/20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 aspect-video relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.isWinner && (
              <div className="absolute top-0 left-0 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-3 py-1 flex items-center gap-1 shadow-lg">
                <Trophy className="h-3 w-3" />
                <span className="text-xs font-bold">WINNER</span>
              </div>
            )}
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Calendar className="h-4 w-4" />
              <span>{project.date}</span>
              {project.status && (
                <Badge variant="outline" className={`capitalize ml-2 ${
                  project.status === 'completed' ? 'bg-green-500/10 text-green-600' : 
                  project.status === 'ongoing' ? 'bg-blue-500/10 text-blue-600' : 
                  'bg-amber-500/10 text-amber-600'
                }`}>
                  {project.status}
                </Badge>
              )}
              {project.isWinner && (
                <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30 ml-2">
                  <Trophy className="h-3 w-3 mr-1" /> 
                  {project.winnerDetails?.hackathon || "Hackathon Winner"}
                </Badge>
              )}
            </div>
            
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary"
                  className="bg-muted hover:bg-primary hover:text-white transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="mt-auto pt-4 border-t flex flex-wrap gap-4">
              {project.github && (
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              <Button 
                variant="outline"
                size="sm" 
                className="gap-2" 
                onClick={() => setFeaturedProject(project.title)}
              >
                <Star className="h-4 w-4" />
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
