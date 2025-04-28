import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Smile, FileText, Book, User, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground py-24 px-4">
      <motion.div 
        className="text-center space-y-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="relative inline-block mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
          <div className="w-28 h-28 md:w-32 md:h-32 bg-background border-2 border-primary/40 rounded-full flex items-center justify-center shadow-xl relative">
            <motion.div 
              className="text-4xl"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 1.5 }}
            >
              👋
            </motion.div>
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <motion.span 
            className="text-primary relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Mohammad Hussam
            <motion.div
              className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-primary/20 rounded-md"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.7, duration: 0.6 }}
            ></motion.div>
          </motion.span>
        </h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          AI Specialist focused on developing intelligent agentic systems and voice interfaces. 
          Skilled in LangChain, Crew AI, and cutting-edge AI technologies.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button asChild size="lg" className="gap-2 group hover:scale-105 transition-all duration-300">
            <Link to="/projects">
              <Briefcase className="h-4 w-4" />
              View Projects 
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button asChild size="lg" className="gap-2 group hover:scale-105 transition-all duration-300">
            <Link to="/skills">
              <Book className="h-4 w-4" />
              Skills
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button asChild size="lg" className="gap-2 group hover:scale-105 transition-all duration-300">
            <Link to="/about">
              <User className="h-4 w-4" />
              About Me
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button asChild size="lg" className="gap-2 group hover:scale-105 transition-all duration-300">
            <Link to="/blog">
              <FileText className="h-4 w-4" />
              Blog
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2 border-primary/30 hover:border-primary transition-colors hover:scale-105 duration-300">
            <a href="/resume.pdf" download aria-label="Download Resume">
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2 border-primary/30 hover:border-primary transition-colors hover:scale-105 duration-300">
            <Link to="/contact">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4 mt-10 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
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
  );
};

export default Index;
