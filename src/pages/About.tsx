
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const About = () => {
  const skills = {
    "AI & Machine Learning": [
      { name: "Natural Language Processing", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "LLM Fine-tuning", level: 80 },
    ],
    "Frontend Development": [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
    ],
    "Backend Technologies": [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 90 },
      { name: "GraphQL", level: 75 },
    ],
    "DevOps & Cloud": [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
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
            I'm an AI Agent developer with over 5 years of experience creating intelligent 
            conversational systems. My background in machine learning and natural language 
            processing allows me to build AI solutions that are both powerful and user-friendly.
          </p>
          <p className="text-lg mb-6">
            After completing my Master's in Computer Science with a focus on AI, I've worked with 
            startups and enterprise clients to develop custom AI agents that solve specific business 
            challenges across multiple industries.
          </p>
          <p className="text-lg">
            I'm passionate about creating AI systems that are ethical, transparent, and that 
            augment human capabilities rather than replace them. My approach focuses on building 
            AI that's accessible to everyone and that delivers real value.
          </p>
        </motion.div>
        
        <motion.div variants={item}>
          <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
          
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-medium mb-4">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
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
