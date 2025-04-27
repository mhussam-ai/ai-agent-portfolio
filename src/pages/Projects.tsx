
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Voice AI Agent for Customer Support",
      description: "A voice AI agent using ElevenLabs SDK and LangChain that reduced average response time by 20%. Implemented advanced voice processing capabilities.",
      image: "https://via.placeholder.com/640x360",
      tech: ["ElevenLabs", "LangChain", "Python"],
      features: [
        "20% reduction in response time",
        "Real-time voice processing",
        "Natural language understanding",
        "Advanced voice synthesis"
      ],
      date: "Jan 2025 - Mar 2025",
      category: "ai"
    },
    {
      title: "Lead Research and Generation Agent",
      description: "An autonomous agent using Relevance AI that increased lead conversion rates by 10%. Streamlined lead generation process.",
      image: "https://via.placeholder.com/640x360",
      tech: ["Relevance AI", "Python", "FastAPI"],
      features: [
        "10% increase in conversion rates",
        "Automated lead research",
        "Real-time data processing",
        "Intelligent lead scoring"
      ],
      date: "Feb 2025 - Apr 2025",
      category: "ai"
    },
    {
      title: "Autonomous Task Agent",
      description: "Task automation agent using BrowserUse and custom chain-of-thought prompts for reliable web interactions.",
      image: "https://via.placeholder.com/640x360",
      tech: ["BrowserUse", "Playwright", "LangChain"],
      features: [
        "Automated web interactions",
        "Custom chain-of-thought prompts",
        "Reliable task execution",
        "Scalable automation"
      ],
      date: "Jan 2025 - Mar 2025",
      category: "automation"
    },
    {
      title: "GrainSight AI",
      description: "Extended academic project for grain quality prediction using Google ADK and Gemini model, improving prediction accuracy by 12%.",
      image: "https://via.placeholder.com/640x360",
      tech: ["Streamlit", "Google ADK", "Python", "Gemini"],
      features: [
        "12% improvement in accuracy",
        "Real-time grain analysis",
        "Advanced ML models",
        "Intuitive interface"
      ],
      github: "https://github.com/mhussam-ai/Grain-Quality-AI",
      date: "Mar 2024 - Dec 2024",
      category: "ai"
    },
    {
      title: "Predicting CVD",
      description: "RNN-based cardiovascular disease risk assessment model achieving AUC score of 0.9, outperforming baselines by 10%.",
      image: "https://via.placeholder.com/640x360",
      tech: ["TensorFlow", "Keras", "Matplotlib"],
      features: [
        "0.9 AUC score",
        "10% performance improvement",
        "Real-time risk assessment",
        "Advanced visualization"
      ],
      github: "https://github.com/sam-dev-coder/Predicting-CVD-Risk-and-Outcomes-with-RNN",
      date: "May 2024 - Sep 2024",
      category: "ai"
    },
    {
      title: "Organic Food Traceability",
      description: "Blockchain-based traceability system for organic food supply chains ensuring transparency and authenticity.",
      image: "https://via.placeholder.com/640x360",
      tech: ["Blockchain", "Python", "Smart Contracts"],
      features: [
        "End-to-end traceability",
        "Immutable record keeping",
        "Supply chain verification",
        "Real-time tracking"
      ],
      github: "https://github.com/mhussam-ai/Organic-Food-Traceability-Using-Blockchain",
      date: "Mar 2024 - May 2024",
      category: "blockchain"
    },
    {
      title: "StimulerVoiceX",
      description: "AI-powered noise cancellation system improving audio clarity by 25% with real-time processing capabilities.",
      image: "https://via.placeholder.com/640x360",
      tech: ["TensorFlow", "Keras", "Audio Processing"],
      features: [
        "25% improved audio clarity",
        "Real-time noise reduction",
        "Low latency processing",
        "Multi-source support"
      ],
      github: "https://github.com/sam-dev-coder/StimulerVoiceX",
      date: "Jun 2023 - Aug 2023",
      category: "ai"
    },
    {
      title: "CollegeBot",
      description: "College query chatbot using Rasa, handling 90% of queries accurately with natural language understanding.",
      image: "https://via.placeholder.com/640x360",
      tech: ["Rasa", "Python", "NLP"],
      features: [
        "90% query accuracy",
        "Natural language processing",
        "Real-time responses",
        "Extensible architecture"
      ],
      github: "https://github.com/sam-dev-coder/CollegeBot",
      date: "Jun 2022 - Sep 2022",
      category: "ai"
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
    <motion.div 
      className="container mx-auto px-4 py-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of my work in AI, automation, and blockchain technology. 
          Each project represents a unique challenge and innovative solution.
        </p>
      </motion.div>
      
      <motion.div variants={item} className="mb-10">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
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

          {["all", "ai", "automation", "blockchain"].map(tab => (
            <TabsContent key={tab} value={tab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => tab === "all" || project.category === tab)
                  .map((project, index) => (
                    <motion.div 
                      key={project.title}
                      variants={item}
                      className="group"
                      initial="hidden"
                      animate="show"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video w-full overflow-hidden bg-muted">
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
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <Star className="h-4 w-4" />
                                  {project.features.length} Features
                                </Button>
                              )}
                            </div>
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
