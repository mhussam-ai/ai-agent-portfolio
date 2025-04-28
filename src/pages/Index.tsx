
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, FileText, Code, Award } from "lucide-react";
import { motion } from "framer-motion";
import { HomepageHero } from "@/components/home/HomepageHero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsHighlight } from "@/components/home/SkillsHighlight";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { RecentPosts } from "@/components/home/RecentPosts";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mohammad Hussam | AI Specialist & Agent Developer</title>
        <meta name="description" content="AI Specialist with expertise in agentic systems, voice interfaces, and machine learning. Building intelligent solutions with modern AI technologies." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Hero Section */}
        <HomepageHero />
        
        {/* Featured Projects */}
        <FeaturedProjects />
        
        {/* Skills Highlight */}
        <SkillsHighlight />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Recent Blog Posts */}
        <RecentPosts />
        
        {/* CTA Section */}
        <motion.section 
          className="py-24 px-4 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10 max-w-3xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Ready to Collaborate?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Let's build intelligent solutions together. Whether you're looking for AI expertise 
              or want to discuss potential projects, I'm ready to help.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Button asChild size="lg" className="gap-2 group">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="gap-2 border-primary/30 hover:border-primary transition-colors">
                <Link to="/projects">
                  View My Work
                  <Code className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Footer Navigation */}
        <motion.div 
          className="py-16 px-4 border-t"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Navigate</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                  <li><Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
                  <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Content</h3>
                <ul className="space-y-2">
                  <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                  <li><a href="/resume.pdf" download className="text-muted-foreground hover:text-primary transition-colors">Resume</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Get in Touch</Link></li>
                  <li><a href="mailto:mohammadhussam.ai@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email Me</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Social</h3>
                <div className="flex space-x-3">
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
            
            <div className="mt-16 pt-8 border-t text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} Mohammad Hussam. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Index;
