
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, FileText, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./TypewriterEffect";

export const HomepageHero = () => {
  const words = [
    { text: "AI" },
    { text: "Specialist" },
    { text: "&" },
    { text: "Agent" },
    { text: "Developer" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      className="relative pt-32 md:pt-40 pb-24 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="text-center space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-6 inline-block">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-lg"></div>
              <div className="w-28 h-28 md:w-32 md:h-32 bg-background border-2 border-primary/40 rounded-full flex items-center justify-center shadow-xl relative">
                <motion.div 
                  className="text-4xl"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 2, duration: 1.5 }}
                >
                  👋
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <TypewriterEffect words={words} className="text-4xl md:text-5xl lg:text-6xl font-bold pb-2 text-center" />
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-primary relative">
              Mohammad Hussam
              <motion.div
                className="absolute -z-10 bottom-1 left-0 right-0 h-3 bg-primary/20 rounded-md"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.6 }}
              ></motion.div>
            </span>
          </motion.h1>
          
          <motion.p 
            variants={item} 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Building intelligent agentic systems and voice interfaces with cutting-edge AI technologies
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-wrap justify-center gap-4 pt-6"
          >
            <Button asChild size="lg" className="gap-2 group">
              <Link to="/projects">
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2 border-primary/30 hover:border-primary transition-colors">
              <a href="/resume.pdf" download>
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="flex justify-center gap-4 mt-6 pt-4"
          >
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" asChild>
              <a href="https://github.com/mhussam-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" asChild>
              <a href="https://linkedin.com/in/mhussam-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" asChild>
              <a href="mailto:mohammadhussam.ai@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" asChild>
              <a href="https://huggingface.co/mhussam-ai" target="_blank" rel="noopener noreferrer" aria-label="Hugging Face Profile">
                <Smile className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
