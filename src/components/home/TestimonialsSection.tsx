
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Mohammad's AI expertise was instrumental in developing our customer service voice agent. His technical skills and attention to detail produced remarkable results.",
      author: "Alex Chen",
      position: "CTO, TechSolutions Inc.",
      initials: "AC"
    },
    {
      id: 2,
      content: "Working with Mohammad on our research automation project was a game-changer. His knowledge of agent frameworks and ability to solve complex problems efficiently saved us countless hours.",
      author: "Priya Sharma",
      position: "Research Lead, DataInsights",
      initials: "PS"
    },
    {
      id: 3,
      content: "Mohammad's deep understanding of both AI theory and practical implementation helped our team develop an innovative grain quality assessment system that exceeded expectations.",
      author: "Michael Rodriguez",
      position: "Product Manager, AgriTech",
      initials: "MR"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      className="py-24 px-4 bg-primary/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={item} className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
            Testimonials
          </motion.h2>
          <motion.h3 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
            What People Say
          </motion.h3>
          <motion.p variants={item} className="text-muted-foreground">
            Feedback from clients and collaborators on projects and expertise.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring" }}
            >
              <Card className="h-full border border-border/50 bg-background backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-primary/40" />
                  </div>
                  
                  <p className="italic text-foreground mb-6">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
