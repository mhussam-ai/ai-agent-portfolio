
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
      <motion.h1 variants={item} className="text-4xl font-bold mb-8">Skills & Expertise</motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, { icon, skills }]) => (
          <motion.div key={category} variants={item}>
            <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {icon}
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1 px-3 hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
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
