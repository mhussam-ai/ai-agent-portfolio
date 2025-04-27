
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Voice AI Agent",
      description: "A voice AI agent using ElevenLabs SDK and LangChain that reduced average response time by 20%.",
      image: "https://via.placeholder.com/640x360",
      tech: ["ElevenLabs", "LangChain", "Python"],
      features: [
        "Real-time voice processing",
        "Natural language understanding",
        "Reduced response time by 20%",
        "Seamless voice interactions"
      ],
      category: "ai"
    },
    {
      title: "GrainSight AI",
      description: "Extended academic project for grain quality prediction using Google ADK and Gemini model.",
      image: "https://via.placeholder.com/640x360",
      tech: ["Streamlit", "Google ADK", "Python", "Gemini"],
      features: [
        "Improved prediction accuracy by 12%",
        "Real-time grain quality analysis",
        "Integration with Google ADK",
        "User-friendly interface"
      ],
      demo: "https://github.com/mhussam-ai/Grain-Quality-AI",
      github: "https://github.com/mhussam-ai/Grain-Quality-AI",
      category: "ai"
    },
    {
      title: "Predicting CVD",
      description: "RNN-based cardiovascular disease risk assessment model with high accuracy.",
      image: "https://via.placeholder.com/640x360",
      tech: ["TensorFlow", "Keras", "Matplotlib", "Python"],
      features: [
        "AUC score of 0.9",
        "Outperformed baseline by 10%",
        "Real-time risk assessment",
        "Comprehensive visualization"
      ],
      github: "https://github.com/sam-dev-coder/Predicting-CVD-Risk-and-Outcomes-with-RNN",
      category: "ai"
    },
    {
      title: "StimulerVoiceX",
      description: "AI-powered noise cancellation system improving audio clarity by 25%.",
      image: "https://via.placeholder.com/640x360",
      tech: ["TensorFlow", "Keras", "Python", "Audio Processing"],
      features: [
        "Real-time noise reduction",
        "25% improved audio clarity",
        "Low latency processing",
        "Multiple audio source support"
      ],
      github: "https://github.com/sam-dev-coder/StimulerVoiceX",
      category: "ai"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item} className="text-4xl font-bold mb-8">Projects</motion.h1>
      
      <motion.div variants={item} className="mb-10">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="ai">AI Projects</TabsTrigger>
            <TabsTrigger value="web">Web Applications</TabsTrigger>
          </TabsList>

          {["all", "ai", "web"].map(tab => (
            <TabsContent key={tab} value={tab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects
                  .filter(project => tab === "all" || project.category === tab)
                  .map((project) => (
                    <motion.div key={project.title} variants={item}>
                      <Card className="overflow-hidden h-full flex flex-col">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline">{tech}</Badge>
                            ))}
                          </div>
                          
                          <h4 className="font-medium mb-2">Key Features</h4>
                          <ul className="list-disc list-inside mb-6 text-sm text-muted-foreground">
                            {project.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                          
                          <div className="flex gap-4 mt-auto pt-4">
                            {project.demo && (
                              <Button asChild variant="default" className="gap-2">
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  Live Demo <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                            {project.github && (
                              <Button asChild variant="outline" className="gap-2">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  GitHub <Github className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
