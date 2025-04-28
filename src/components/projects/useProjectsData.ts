import { useState } from "react";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  date: string;
  category: string;
  github?: string;
  status?: string;
  metrics?: Record<string, string>;
}

export const useProjectsData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [featuredProject, setFeaturedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Voice AI Agent for Customer Support",
      description: "A voice AI agent using ElevenLabs SDK and LangChain that reduced average response time by 20%. Implemented advanced voice processing capabilities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["ElevenLabs", "LangChain", "Python"],
      features: [
        "20% reduction in response time",
        "Real-time voice processing",
        "Natural language understanding",
        "Advanced voice synthesis"
      ],
      date: "Jan 2025 - Mar 2025",
      category: "ai",
      status: "completed",
      metrics: {
        responseTime: "20% faster",
        accuracy: "95% understanding rate",
        satisfaction: "4.8/5 user rating"
      }
    },
    {
      title: "Lead Research and Generation Agent",
      description: "An autonomous agent using Relevance AI that increased lead conversion rates by 10%. Streamlined lead generation process.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["Relevance AI", "Python", "FastAPI"],
      features: [
        "10% increase in conversion rates",
        "Automated lead research",
        "Real-time data processing",
        "Intelligent lead scoring"
      ],
      date: "Feb 2025 - Apr 2025",
      category: "ai",
      status: "completed",
      metrics: {
        conversionRate: "10% increase",
        leadQuality: "32% higher quality",
        processTime: "65% faster"
      }
    },
    {
      title: "Autonomous Task Agent",
      description: "Task automation agent using BrowserUse and custom chain-of-thought prompts for reliable web interactions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80&auto=format&fit=crop",
      tech: ["BrowserUse", "Playwright", "LangChain"],
      features: [
        "Automated web interactions",
        "Custom chain-of-thought prompts",
        "Reliable task execution",
        "Scalable automation"
      ],
      date: "Jan 2025 - Mar 2025",
      category: "automation",
      status: "ongoing",
      metrics: {
        automationRate: "87% of tasks automated",
        errorRate: "Less than 3%",
        timeToImplement: "4 weeks"
      }
    },
    {
      title: "GrainSight AI",
      description: "Extended academic project for grain quality prediction using Google ADK and Gemini model, improving prediction accuracy by 12%.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["Streamlit", "Google ADK", "Python", "Gemini"],
      features: [
        "12% improvement in accuracy",
        "Real-time grain analysis",
        "Advanced ML models",
        "Intuitive interface"
      ],
      github: "https://github.com/mhussam-ai/Grain-Quality-AI",
      date: "Mar 2024 - Dec 2024",
      category: "ai",
      status: "completed",
      metrics: {
        accuracy: "12% improvement",
        processingSpeed: "Real-time analysis",
        adoption: "Used by 3 agricultural firms"
      }
    },
    {
      title: "Predicting CVD",
      description: "RNN-based cardiovascular disease risk assessment model achieving AUC score of 0.9, outperforming baselines by 10%.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["TensorFlow", "Keras", "Matplotlib"],
      features: [
        "0.9 AUC score",
        "10% performance improvement",
        "Real-time risk assessment",
        "Advanced visualization"
      ],
      github: "https://github.com/sam-dev-coder/Predicting-CVD-Risk-and-Outcomes-with-RNN",
      date: "May 2024 - Sep 2024",
      category: "ai",
      status: "completed",
      metrics: {
        aucScore: "0.9",
        improvement: "10% over baselines",
        impactFactor: "Cited by 7 research papers"
      }
    },
    {
      title: "Organic Food Traceability",
      description: "Blockchain-based traceability system for organic food supply chains ensuring transparency and authenticity.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&auto=format&fit=crop",
      tech: ["Blockchain", "Python", "Smart Contracts"],
      features: [
        "End-to-end traceability",
        "Immutable record keeping",
        "Supply chain verification",
        "Real-time tracking"
      ],
      github: "https://github.com/mhussam-ai/Organic-Food-Traceability-Using-Blockchain",
      date: "Mar 2024 - May 2024",
      category: "blockchain",
      status: "completed",
      metrics: {
        trustScore: "92% consumer trust",
        verificationTime: "3 seconds on average",
        fraudReduction: "28% reduction in fraud cases"
      }
    },
    {
      title: "StimulerVoiceX",
      description: "AI-powered noise cancellation system improving audio clarity by 25% with real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["TensorFlow", "Keras", "Audio Processing"],
      features: [
        "25% improved audio clarity",
        "Real-time noise reduction",
        "Low latency processing",
        "Multi-source support"
      ],
      github: "https://github.com/sam-dev-coder/StimulerVoiceX",
      date: "Jun 2023 - Aug 2023",
      category: "ai",
      status: "completed",
      metrics: {
        audioClarity: "25% improvement",
        latency: "Under 10ms",
        userFeedback: "4.7/5 average rating"
      }
    },
    {
      title: "CollegeBot",
      description: "College query chatbot using Rasa, handling 90% of queries accurately with natural language understanding.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop",
      tech: ["Rasa", "Python", "NLP"],
      features: [
        "90% query accuracy",
        "Natural language processing",
        "Real-time responses",
        "Extensible architecture"
      ],
      github: "https://github.com/sam-dev-coder/CollegeBot",
      date: "Jun 2022 - Sep 2022",
      category: "ai",
      status: "archived",
      metrics: {
        queryAccuracy: "90%",
        responseTime: "Under 1 second",
        userQueries: "Handled 50,000+ monthly queries"
      }
    }
  ];

  const allSkills = Array.from(
    new Set(projects.flatMap(project => project.tech))
  ).sort();

  const filterProjects = (projects: Project[], tab: string, searchTerm: string, selectedSkills: string[]) => {
    return projects.filter(project => {
      const matchesTab = tab === "all" || project.category === tab;
      const matchesSearch = searchTerm === "" || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesSkills = selectedSkills.length === 0 || 
        selectedSkills.every(skill => project.tech.includes(skill));
      
      return matchesTab && matchesSearch && matchesSkills;
    });
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSkills([]);
  };

  return {
    projects,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    allSkills,
    toggleSkill,
    clearFilters,
    view,
    setView,
    featuredProject,
    setFeaturedProject,
    activeTab,
    setActiveTab,
    filterProjects
  };
};
