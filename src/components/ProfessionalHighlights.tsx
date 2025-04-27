
import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Data Science Trainee",
    company: "Bompix Mori IT Solutions",
    period: "Aug 2023 - Feb 2024",
    description: "Implemented TensorFlow forecasting pipeline reducing error by 15%"
  },
  {
    title: "Machine Learning Research Intern",
    company: "Spartificial Innovations",
    period: "Jan 2023 - May 2023",
    description: "Led team achieving 91% accuracy in satellite imagery analysis"
  }
];

export const ProfessionalHighlights = () => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-semibold">Professional Highlights</h2>
      </div>
      <div className="grid gap-4">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-primary font-medium mb-1">{highlight.company}</p>
              <p className="text-muted-foreground text-sm mb-2">{highlight.period}</p>
              <p className="text-foreground/80">{highlight.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
