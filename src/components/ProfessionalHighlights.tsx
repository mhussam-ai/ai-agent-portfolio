
import { Briefcase, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const highlights = [
  {
    title: "Data Science Trainee",
    company: "Bompix Mori IT Solutions",
    location: "Bangalore",
    period: "Aug 2023 - Feb 2024",
    description: "Designed a TensorFlow forecasting pipeline for logistics, reducing forecasting error by 15%.",
    achievements: ["Optimized data preprocessing workflows using Pandas and NumPy", "Implemented efficient ETL processes"],
  },
  {
    title: "Machine Learning Research Intern",
    company: "Spartificial Innovations",
    location: "Remote",
    period: "Jan 2023 - May 2023",
    description: "Supervised a team of 5 to develop ML models (U-Net, ResNet-50) for satellite imagery, achieving 91% accuracy in building and shadow detection.",
    achievements: ["Built scalable image data pipelines processing over 10,000 images", "Evaluated model performance using custom metrics"],
  }
];

export const ProfessionalHighlights = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-2 rounded-full">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold text-primary">Professional Experience</h2>
      </div>
      
      <div className="grid gap-6">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{highlight.title}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-primary font-medium">{highlight.company}</span>
                      <span className="text-muted-foreground">• {highlight.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{highlight.period}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                <p className="text-foreground/90 mb-4">{highlight.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Key Contributions</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {highlight.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary/70 mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
