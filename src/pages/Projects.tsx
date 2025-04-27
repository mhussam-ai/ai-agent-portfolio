
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Code } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "CustomerAI Assistant",
      description: "An AI-powered customer service agent that handles support inquiries with natural conversation.",
      image: "https://via.placeholder.com/640x360",
      tech: ["React", "Python", "TensorFlow", "GPT-4"],
      features: [
        "Natural language understanding with 95% accuracy",
        "Seamless handoff to human agents when needed",
        "Multi-language support for global customers",
        "Integration with CRM systems"
      ],
      demo: "https://demo.com/customer-ai",
      github: "https://github.com/your-username/customer-ai",
      category: "ai"
    },
    {
      title: "DataSense Dashboard",
      description: "Analytics dashboard for visualizing complex AI model performance metrics.",
      image: "https://via.placeholder.com/640x360",
      tech: ["Next.js", "TypeScript", "D3.js", "Python"],
      features: [
        "Real-time model performance monitoring",
        "Custom visualization components",
        "Exportable reports and insights",
        "Role-based access control"
      ],
      demo: "https://demo.com/datasense",
      github: "https://github.com/your-username/datasense",
      category: "web"
    },
    {
      title: "ConvoTrainer",
      description: "Platform for training and fine-tuning conversational AI models with minimal data.",
      image: "https://via.placeholder.com/640x360",
      tech: ["React", "Node.js", "PyTorch", "MongoDB"],
      features: [
        "Few-shot learning capabilities",
        "Interactive training interface",
        "Performance evaluation tools",
        "Model versioning and rollback"
      ],
      demo: "https://demo.com/convotrainer",
      github: "https://github.com/your-username/convotrainer",
      category: "ai"
    },
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
            <TabsTrigger value="ai">AI Agents</TabsTrigger>
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
                          
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Code className="h-4 w-4" /> Tech Stack
                          </h4>
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
                            <Button asChild variant="default" className="gap-2">
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                Live Demo <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                            <Button asChild variant="outline" className="gap-2">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                GitHub <Github className="h-4 w-4" />
                              </a>
                            </Button>
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
