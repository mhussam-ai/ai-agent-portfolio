
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
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-semibold">Timeline</h2>
      </div>
      <div className="relative space-y-8">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="relative pl-8 border-l border-border"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
            <div className="relative">
              <span className="text-sm font-medium text-primary">{event.date}</span>
              <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
