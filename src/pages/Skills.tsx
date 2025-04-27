
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Terminal, Users, Book } from "lucide-react";

// Skill categories with their icons and items
const skillCategories = {
  "Programming and Data": {
    icon: <Code className="h-5 w-5 text-primary" />,
    skills: [
      { name: "Python (OOP)", level: 90 },
      { name: "SQL", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Git", level: 85 },
    ]
  },
  "AI and Machine Learning": {
    icon: <Brain className="h-5 w-5 text-primary" />,
    skills: [
      { name: "Neural Networks", level: 90 },
      { name: "NLP", level: 85 },
      { name: "Computer Vision", level: 85 },
      { name: "RAG", level: 80 },
    ]
  },
  "Libraries and Frameworks": {
    icon: <Terminal className="h-5 w-5 text-primary" />,
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "LangChain", level: 90 },
      { name: "Hugging Face", level: 85 },
    ]
  },
  "Voice and LLM Technologies": {
    icon: <Book className="h-5 w-5 text-primary" />,
    skills: [
      { name: "ElevenLabs", level: 85 },
      { name: "LLM Deployment", level: 80 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Agent Development", level: 85 },
    ]
  },
  "Soft Skills": {
    icon: <Users className="h-5 w-5 text-primary" />,
    skills: [
      { name: "Collaboration", level: 90 },
      { name: "Technical Communication", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 85 },
    ]
  }
};

const Skills = () => {
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
      <motion.h1 variants={item} className="text-4xl font-bold mb-8">Skills & Expertise</motion.h1>
      
      <Tabs defaultValue="Programming and Data" className="w-full">
        <TabsList className="flex flex-wrap gap-2 mb-8">
          {Object.keys(skillCategories).map((category) => (
            <TabsTrigger key={category} value={category} className="flex items-center gap-2">
              {skillCategories[category].icon}
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {Object.entries(skillCategories).map(([category, { skills }]) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  variants={item}
                  className="w-full"
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
};

export default Skills;
