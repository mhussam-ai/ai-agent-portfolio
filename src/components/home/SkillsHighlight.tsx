
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Code, Terminal, Book } from "lucide-react";

export const SkillsHighlight = () => {
  const skills = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI & Machine Learning",
      description: "Neural Networks, NLP, Computer Vision, RAG, Supervised & Unsupervised Learning",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Core Technologies",
      description: "Python (OOP), Pandas, NumPy, SQL, Git, Flask, FastAPI, Supabase",
    },
    {
      icon: <Terminal className="h-8 w-8 text-primary" />,
      title: "Agent Development",
      description: "LangChain, PydanticAI, Agno, Crew AI, AutoGen, Agentforce",
    },
    {
      icon: <Book className="h-8 w-8 text-primary" />,
      title: "Voice & LLM",
      description: "ElevenLabs, GPT, Gemini, Claude, LLaMA, Ollama, Fine-Tuning",
    },
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
      className="py-24 px-4"
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
            Expertise
          </motion.h2>
          <motion.h3 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skillset
          </motion.h3>
          <motion.p variants={item} className="text-muted-foreground">
            Specialized in AI and machine learning with focus on building agentic systems and voice interfaces.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/skills">
              View All Skills
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
