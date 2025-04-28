
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    date: "2024",
    title: "Bachelor's in AI",
    description: "Graduated from G. H. Raisoni Institute"
  },
  {
    date: "2023",
    title: "Data Science Internship",
    description: "Bompix Mori IT Solutions"
  },
  {
    date: "2023",
    title: "ML Research Internship",
    description: "Spartificial Innovations"
  },
  {
    date: "2020",
    title: "Started B.Tech in AI",
    description: "Began academic journey in Artificial Intelligence"
  }
];

export const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-semibold">Timeline</h2>
      </div>
      <motion.div 
        className="relative space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="relative pl-8 border-l border-border"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
            <div className="relative">
              <span className="text-sm font-medium text-primary">{event.date}</span>
              <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
