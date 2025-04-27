
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ProfessionalHighlights } from "@/components/ProfessionalHighlights";
import { Timeline } from "@/components/Timeline";

const About = () => {
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={item}>
          <Card className="p-6 mb-8">
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
          </Card>
          
          <ProfessionalHighlights />
          <Timeline />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
