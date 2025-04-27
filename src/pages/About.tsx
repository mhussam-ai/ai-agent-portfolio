
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ProfessionalHighlights } from "@/components/ProfessionalHighlights";
import { Timeline } from "@/components/Timeline";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={item} className="lg:col-span-2">
          <Card className="p-6 mb-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" /> 
              Professional Background
            </h2>
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
            
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                LLM Engineering
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                Voice AI
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                Machine Learning
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
                Agent Development
              </Badge>
            </div>
          </Card>
          
          <ProfessionalHighlights />
        </motion.div>
        
        <motion.div variants={item} className="space-y-8">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Bachelor of Technology in Computer Science</h3>
                <p className="text-muted-foreground">Lovely Professional University, 2020-2024</p>
              </div>
              <div>
                <h3 className="font-medium">AI & Machine Learning Certification</h3>
                <p className="text-muted-foreground">DeepLearning.AI, 2023</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Achievements
            </h2>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Hackathon Winner - AI Innovation Challenge 2023</li>
              <li>Published research on ML for environmental monitoring</li>
              <li>Top 5% contributor on AI research platforms</li>
              <li>Open source contributor to LangChain framework</li>
            </ul>
          </Card>
          
          <Timeline />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
