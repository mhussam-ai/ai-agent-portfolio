
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Github, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    features: string[];
    date: string;
    category: string;
    github?: string;
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 border-transparent hover:border-primary/20">
        <div className="aspect-video w-full overflow-hidden bg-muted relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar className="h-4 w-4" />
            <span>{project.date}</span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
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
          
          <div className="mt-auto pt-4 border-t">
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.features && (
                <Button variant="ghost" size="sm" className="gap-2 group">
                  <Star className="h-4 w-4 transition-colors duration-300 group-hover:text-yellow-400" />
                  <span>{project.features.length} Features</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
