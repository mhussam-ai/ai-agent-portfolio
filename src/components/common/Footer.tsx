
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      className="py-12 md:py-16 px-4 border-t"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 gap-x-4 md:gap-x-8">
          <div>
            <h3 className="font-semibold mb-4 text-center md:text-left">Navigate</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-center md:text-left">Content</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><a href="/resume.pdf" download className="text-muted-foreground hover:text-primary transition-colors">Resume</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-center md:text-left">Contact</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Get in Touch</Link></li>
              <li><a href="mailto:mohammadhussam.ai@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email Me</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-center md:text-left">Social</h3>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="https://github.com/mhussam-ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/mhussam-ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:mohammadhussam.ai@gmail.com" className="hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://huggingface.co/mhussam-ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Award className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Mohammad Hussam. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};
