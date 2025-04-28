
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Voice AI Agent for Customer Support",
      description: "An intelligent voice interface that responds to customer inquiries, built with ElevenLabs SDK for natural voice interactions.",
      image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1000",
      tags: ["Voice AI", "ElevenLabs", "Customer Support"],
      link: "/projects",
      date: "April 2025"
    },
    {
      id: 2,
      title: "Lead Research and Generation Agent",
      description: "Autonomous agent that identifies potential leads and generates research reports using Relevance AI.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
      tags: ["Autonomous Agent", "Relevance AI", "Lead Generation"],
      link: "/projects",
      date: "March 2025"
    },
    {
      id: 3,
      title: "GrainSight AI",
      description: "Computer vision system for grain quality prediction using Google ADK and Gemini model.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000",
      tags: ["Computer Vision", "Google ADK", "Gemini"],
      link: "https://github.com/mhussam-ai/Grain-Quality-AI",
      github: "https://github.com/mhussam-ai/Grain-Quality-AI",
      date: "February 2025"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      id="featured-projects"
      className="py-20 md:py-24 px-4 bg-gradient-to-b from-background to-primary/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <motion.h2 variants={item} className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
              Featured Projects
            </motion.h2>
            <motion.h3 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
              Recent Work & Case Studies
            </motion.h3>
            <motion.p variants={item} className="text-muted-foreground">
              Explore my latest AI projects focusing on agentic systems, voice interfaces, and intelligent automation.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 md:mt-0"
          >
            <Button asChild variant="outline" className="gap-2">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring" }}
            >
              <Card className="overflow-hidden h-full border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-background/80 hover:bg-background p-2 rounded-full backdrop-blur-sm transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">{project.date}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <Button asChild variant="ghost" size="sm" className="gap-1 hover:bg-primary/10 hover:text-primary p-0">
                      <Link to={project.link}>
                        Learn More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
