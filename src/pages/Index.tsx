
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code } from "lucide-react";
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
          className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden"
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
      </div>
    </>
  );
};

export default Index;
