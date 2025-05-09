
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Terminal, Book, Users, Laptop, Database, FileText } from "lucide-react";

const skillCategories = {
  "Core Technologies": {
    icon: <Code className="h-5 w-5 text-primary" />,
    skills: [
      "Python (OOP)",
      "SQL",
      "FastAPI",
      "Git",
      "Flask",
      "Supabase"
    ]
  },
  "AI & ML": {
    icon: <Brain className="h-5 w-5 text-primary" />,
    skills: [
      "Neural Networks",
      "NLP",
      "Computer Vision",
      "RAG",
      "Supervised Learning",
      "Unsupervised Learning"
    ]
  },
  "Frameworks & Libraries": {
    icon: <Terminal className="h-5 w-5 text-primary" />,
    skills: [
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "LangChain",
      "Scikit-learn",
      "PydanticAI"
    ]
  },
  "Voice & LLM": {
    icon: <Book className="h-5 w-5 text-primary" />,
    skills: [
      "ElevenLabs",
      "GPT",
      "Gemini",
      "Claude",
      "LLaMA",
      "Ollama"
    ]
  },
  "Tools & Platforms": {
    icon: <Laptop className="h-5 w-5 text-primary" />,
    skills: [
      "Jupyter",
      "N8N",
      "Make.com",
      "Zapier",
      "Langflow",
      "AutoGPT"
    ]
  },
  "Data & APIs": {
    icon: <Database className="h-5 w-5 text-primary" />,
    skills: [
      "OpenAI Platform",
      "Google Vertex AI",
      "Azure OpenAI",
      "Azure AI Foundry",
      "Pandas",
      "NumPy"
    ]
  },
  "Agent Development": {
    icon: <FileText className="h-5 w-5 text-primary" />,
    skills: [
      "Agno",
      "Crew AI",
      "AutoGen",
      "Google ADK",
      "OpenAI SDK",
      "Agentforce"
    ]
  },
  "Soft Skills": {
    icon: <Users className="h-5 w-5 text-primary" />,
    skills: [
      "Technical Communication",
      "Problem Solving",
      "Critical Thinking",
      "Collaboration",
      "Agile Methodologies",
      "Team Leadership"
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
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-50" />
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center py-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover"
          >
            Technical Expertise
          </motion.h1>
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-muted-foreground mb-6"
          >
            AI Specialist with expertise in agentic systems, voice interfaces, and machine learning
          </motion.p>
          <motion.div 
            variants={item}
            className="flex flex-wrap justify-center gap-3"
          >
            <Badge variant="secondary" className="text-sm py-1.5 px-4">
              AI Development
            </Badge>
            <Badge variant="secondary" className="text-sm py-1.5 px-4">
              Machine Learning
            </Badge>
            <Badge variant="secondary" className="text-sm py-1.5 px-4">
              Voice Interfaces
            </Badge>
          </motion.div>
        </motion.div>
      </div>

      <motion.h1 variants={item} className="text-4xl font-bold mb-8">Skills & Expertise</motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, { icon, skills }], index) => (
          <motion.div 
            key={category} 
            variants={item}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  >
                    <Badge 
                      variant="secondary"
                      className="text-sm py-1 px-3 hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
