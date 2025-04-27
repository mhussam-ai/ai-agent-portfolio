
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
  ];

  return (
    <div className="container mx-auto px-4 py-20 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-6">
            Hi! I'm a passionate software developer with a love for building
            beautiful and functional web applications. I specialize in frontend
            development with React and have experience with various backend
            technologies.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or writing about my experiences in
            tech.
          </p>
        </div>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
