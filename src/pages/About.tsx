
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const About = () => {
  const skillCategories = {
    "Programming and Data": [
      { name: "Python (OOP)", level: 90 },
      { name: "SQL", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Git", level: 85 },
    ],
    "AI and Machine Learning": [
      { name: "Neural Networks", level: 90 },
      { name: "NLP", level: 85 },
      { name: "Computer Vision", level: 85 },
      { name: "RAG", level: 80 },
    ],
    "Libraries and Frameworks": [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "LangChain", level: 90 },
      { name: "Hugging Face", level: 85 },
    ],
    "Voice and LLM Technologies": [
      { name: "ElevenLabs", level: 85 },
      { name: "LLM Deployment", level: 80 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Agent Development", level: 85 },
    ],
  };

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
      <motion.h1 variants={item} className="text-4xl font-bold mb-8">About Me</motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={item}>
          <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
          <p className="text-lg mb-6">
            I'm an AI Specialist with expertise in developing agentic systems and voice interfaces. 
            My work with LangChain, Crew AI, and Pydantic has achieved significant results, including 
            91% accuracy in satellite imagery analysis.
          </p>
          <p className="text-lg mb-6">
            As a Data Science Trainee at Bompix Mori IT Solutions, I implemented TensorFlow forecasting 
            pipelines that reduced forecasting errors by 15%. Previously, at Spartificial Innovations, 
            I led a team developing ML models for satellite imagery analysis.
          </p>
          <p className="text-lg">
            I'm passionate about creating AI systems that solve real-world problems and am continuously 
            learning cutting-edge technologies like RAG and LLM deployment. My approach focuses on 
            building practical, efficient solutions that deliver measurable results.
          </p>
        </motion.div>
        
        <motion.div variants={item}>
          <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
          
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-medium mb-4">{category}</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
