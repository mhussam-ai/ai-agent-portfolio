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
  liveDemo?: string;
  status?: string;
  metrics?: Record<string, string>;
  architecture?: string;
  technicalDetails?: string;
  implementationChallenges?: string;
  isWinner?: boolean;
  winnerDetails?: {
    hackathon: string;
    date: string;
    achievement: string;
    judges?: string[];
    prize?: string;
  };
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
      description: "A voice AI agent using ElevenLabs SDK and LangChain that reduced average response time by 20%. Implemented advanced voice processing capabilities and natural language understanding to create a seamless customer support experience.",
      image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?w=800&q=80&auto=format&fit=crop",
      tech: ["ElevenLabs", "LangChain", "Python", "Flask"],
      features: [
        "20% reduction in response time",
        "Real-time voice processing",
        "Natural language understanding",
        "Advanced voice synthesis",
        "Multi-language support",
        "Custom voice persona creation"
      ],
      date: "Jan 2025 - Mar 2025",
      category: "ai",
      status: "ongoing",
      metrics: {
        responseTime: "20% faster",
        accuracy: "95% understanding rate",
        satisfaction: "4.8/5 user rating"
      },
      architecture: "This project utilizes a microservices architecture with three main components: (1) Voice Processing Service that uses ElevenLabs for speech-to-text and text-to-speech conversion, (2) NLP Service powered by LangChain and LLMs to understand user intent and generate appropriate responses, and (3) Customer Data Service that securely retrieves customer information and support history.",
      technicalDetails: "The agent operates in real-time with a response latency under 500ms. It uses WebSockets for streaming audio and a Redis cache layer for frequently accessed data. The system maintains context across multiple turns of conversation and can handle interruptions gracefully with a custom-designed state management system.",
      implementationChallenges: "One of the biggest challenges was reducing latency in the voice processing pipeline while maintaining high accuracy. This was solved by implementing a parallel processing approach where audio segments are analyzed concurrently. Another challenge was building a robust error recovery system that could gracefully handle network interruptions without losing conversation context."
    },
    {
      title: "Lead Research and Generation Agent",
      description: "An autonomous agent using Relevance AI that increased lead conversion rates by 10%. Streamlined lead generation process through automated research and personalized outreach strategies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
      tech: ["Relevance AI", "Python", "FastAPI", "PostgreSQL"],
      features: [
        "10% increase in conversion rates",
        "Automated lead research",
        "Real-time data processing",
        "Intelligent lead scoring",
        "Multi-channel outreach automation", 
        "Personalized messaging templates"
      ],
      date: "Feb 2025 - Apr 2025",
      category: "ai",
      status: "completed",
      metrics: {
        conversionRate: "10% increase",
        leadQuality: "32% higher quality",
        processTime: "65% faster"
      },
      architecture: "The Lead Research Agent uses a pipeline architecture with four main stages: (1) Lead Discovery that identifies potential leads from multiple sources, (2) Research Engine that automatically gathers information about leads from public sources, (3) Analysis Layer that scores and prioritizes leads based on custom criteria, and (4) Outreach Orchestrator that manages personalized communication across channels.",
      technicalDetails: "The system integrates with Relevance AI for data extraction and semantic search capabilities. It uses a custom-built vector database for efficient similarity matching between lead profiles and ideal customer profiles. PostgreSQL with appropriate indexes handles the relational data, while FastAPI provides a responsive backend."
    },
    {
      title: "Web Rover - Autonomous Browser Agent",
      description: "Task automation agent using BrowserUse and custom chain-of-thought prompts for reliable web interactions that can navigate complex interfaces.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80&auto=format&fit=crop",
      tech: ["BrowserUse", "Playwright", "LangChain", "TypeScript"],
      features: [
        "Automated web interactions",
        "Custom chain-of-thought prompts",
        "Reliable task execution",
        "Scalable automation",
        "Self-healing workflows",
        "Visual validation system"
      ],
      date: "Jan 2025 - Mar 2025",
      category: "automation",
      status: "completed",
      metrics: {
        automationRate: "87% of tasks automated",
        errorRate: "Less than 3%",
        timeToImplement: "4 weeks"
      },
      architecture: "Web Rover follows a layered architecture with (1) Browser Automation Layer using Playwright for web interactions, (2) Vision Module for understanding screen content and layouts, (3) Planning Engine that uses LLMs to create action sequences, and (4) Execution Monitor that tracks progress and handles errors with fallback strategies.",
      technicalDetails: "The agent employs a novel approach to web automation by combining traditional selectors with visual understanding. It uses chain-of-thought prompting to reason about complex UI interactions and can recover from unexpected states through dynamic replanning.",
      implementationChallenges: "The most significant challenge was handling dynamic websites with unpredictable layouts. This was addressed by implementing a hybrid approach combining traditional DOM-based selectors with visual recognition. Another challenge was maintaining session state across multiple pages, which was solved with a custom state management system."
    },
    {
      title: "GrainSight AI",
      description: "Extended academic project for grain quality prediction using Google ADK and Gemini model, improving prediction accuracy by 12%. The system analyzes images of grain samples to assess quality factors such as moisture content, foreign material, and damage.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format&fit=crop",
      tech: ["Streamlit", "Google ADK", "Python", "Gemini", "TensorFlow"],
      features: [
        "12% improvement in accuracy",
        "Real-time grain analysis",
        "Advanced ML models",
        "Intuitive interface",
        "Mobile-compatible scanning",
        "Batch processing capabilities"
      ],
      github: "https://github.com/mhussam-ai/Grain-Quality-AI",
      date: "Mar 2024 - Dec 2024",
      category: "ai",
      status: "completed",
      metrics: {
        accuracy: "12% improvement",
        processingSpeed: "Real-time analysis",
        adoption: "Used by 3 agricultural firms"
      },
      architecture: "GrainSight AI uses a three-tier architecture: (1) Frontend built with Streamlit providing an intuitive interface for users to upload grain images, (2) Processing Layer that applies computer vision techniques to identify grain characteristics, and (3) Analysis Engine powered by Google ADK and Gemini that performs the quality assessment.",
      technicalDetails: "The system employs a custom-trained convolutional neural network to identify grain types and quality characteristics. Transfer learning was used with Google's Gemini model to achieve high accuracy with limited training data. The application can process multiple images in batch mode and generate comprehensive quality reports."
    },
    {
      title: "Predicting CVD",
      description: "RNN-based cardiovascular disease risk assessment model achieving AUC score of 0.9, outperforming baselines by 10%. The system uses longitudinal patient data to predict the likelihood of developing cardiovascular disease.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
      tech: ["TensorFlow", "Keras", "Matplotlib", "Scikit-learn"],
      features: [
        "0.9 AUC score",
        "10% performance improvement",
        "Real-time risk assessment",
        "Advanced visualization",
        "Integration with EHR systems",
        "Personalized risk factors analysis"
      ],
      github: "https://github.com/sam-dev-coder/Predicting-CVD-Risk-and-Outcomes-with-RNN",
      date: "May 2024 - Sep 2024",
      category: "ai",
      status: "completed",
      metrics: {
        aucScore: "0.9",
        improvement: "10% over baselines",
        impactFactor: "Cited by 7 research papers"
      },
      architecture: "The CVD prediction system consists of (1) Data Processing Pipeline that cleans and normalizes patient records, (2) Feature Engineering Module that extracts relevant indicators, (3) RNN Model that processes temporal sequences of patient data, and (4) Visualization Layer that presents results and explains risk factors.",
      technicalDetails: "The core of the system is a bidirectional LSTM network that can process variable-length patient histories and identify patterns indicative of CVD risk. The model incorporates attention mechanisms to focus on the most relevant time periods and features in a patient's history. A novel calibration technique ensures reliable probability estimates."
    },
    {
      title: "Organic Food Traceability",
      description: "Blockchain-based traceability system for organic food supply chains ensuring transparency and authenticity. The solution enables end-to-end tracking from farm to consumer and verification of organic certification claims.",
      image: "https://images.unsplash.com/photo-1470107355970-2ace9f20ab15?w=800&q=80&auto=format&fit=crop",
      tech: ["Blockchain", "Python", "Smart Contracts", "Web3.js"],
      features: [
        "End-to-end traceability",
        "Immutable record keeping",
        "Supply chain verification",
        "Real-time tracking",
        "QR code verification for consumers",
        "Certification validation"
      ],
      github: "https://github.com/mhussam-ai/Organic-Food-Traceability-Using-Blockchain",
      date: "Mar 2024 - May 2024",
      category: "blockchain",
      status: "completed",
      metrics: {
        trustScore: "92% consumer trust",
        verificationTime: "3 seconds on average",
        fraudReduction: "28% reduction in fraud cases"
      },
      architecture: "The Organic Food Traceability system uses a permissioned blockchain architecture with (1) Producer Node for farmers and producers to register products, (2) Processor Node for handling processing and packaging information, (3) Distributor Node for tracking logistics and transportation, and (4) Retailer Node for final sale information.",
      technicalDetails: "The solution implements smart contracts that enforce certification rules and automatically verify compliance at each step of the supply chain. Each product has a unique digital identity that accumulates verifiable credentials as it moves through the supply chain. A consumer-facing mobile app allows shoppers to scan QR codes and view the complete history of a product.",
      implementationChallenges: "A major challenge was ensuring data integrity at the point of entry into the blockchain. This was addressed by implementing a multi-signature validation system where data must be corroborated by multiple parties before being added to the chain. Another challenge was creating a user-friendly interface for farmers with limited technical expertise."
    },
    {
      title: "StimulerVoiceX",
      description: "AI-powered noise cancellation system improving audio clarity by 25% with real-time processing capabilities. The solution adaptively removes background noise while preserving the quality and naturalness of speech.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80&auto=format&fit=crop",
      tech: ["TensorFlow", "Keras", "Audio Processing", "PyTorch"],
      features: [
        "25% improved audio clarity",
        "Real-time noise reduction",
        "Low latency processing",
        "Multi-source support",
        "Adaptive environmental learning",
        "Voice preservation technology"
      ],
      github: "https://github.com/sam-dev-coder/StimulerVoiceX",
      date: "Jun 2023 - Aug 2023",
      category: "ai",
      status: "completed",
      metrics: {
        audioClarity: "25% improvement",
        latency: "Under 10ms",
        userFeedback: "4.7/5 average rating"
      },
      architecture: "StimulerVoiceX employs a real-time processing architecture with (1) Signal Acquisition Module that captures audio input, (2) Noise Profile Generator that dynamically models environmental noise, (3) Neural Processing Unit that separates noise from voice, and (4) Audio Reconstruction Engine that rebuilds clean audio signals.",
      technicalDetails: "The system uses a specialized U-Net architecture trained on thousands of hours of noisy speech data. It operates in the frequency domain to efficiently separate noise components from speech components. A novel perceptual loss function ensures that the reconstructed audio maintains natural speech characteristics."
    },
    {
      title: "CollegeBot",
      description: "College query chatbot using Rasa, handling 90% of queries accurately with natural language understanding. The chatbot helps students find information about courses, admissions, campus facilities, and academic policies.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop",
      tech: ["Rasa", "Python", "NLP", "MongoDB"],
      features: [
        "90% query accuracy",
        "Natural language processing",
        "Real-time responses",
        "Extensible architecture",
        "Multi-platform integration",
        "Contextual conversation memory"
      ],
      github: "https://github.com/sam-dev-coder/CollegeBot",
      date: "Jun 2022 - Sep 2022",
      category: "ai",
      status: "archived",
      metrics: {
        queryAccuracy: "90%",
        responseTime: "Under 1 second",
        userQueries: "Handled 50,000+ monthly queries"
      },
      architecture: "CollegeBot is built on a modular architecture with (1) Intent Recognition Module that identifies what information the student is seeking, (2) Entity Extraction that pulls out specific details like course names or dates, (3) Dialog Management System that maintains conversation flow, and (4) Response Generator that creates natural language replies.",
      technicalDetails: "The chatbot uses Rasa's open-source framework with custom components for handling college-specific terminology and queries. A knowledge base built on MongoDB stores structured information about courses, faculty, and campus resources. The system can handle complex multi-turn conversations and remember context from previous interactions."
    },
    {
      title: "Better Hack Winner - AI Knowledge Navigator",
      description: "Award-winning project from The Better Hack hackathon that uses natural language processing and knowledge graphs to transform how users interact with complex data. Built in 24 hours, this solution impressed judges with its innovative approach and technical implementation.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop",
      tech: ["React", "LangChain", "Neo4j", "GPT-4", "TypeScript"],
      features: [
        "Intuitive knowledge exploration interface",
        "Advanced semantic search capabilities",
        "Dynamic knowledge graph visualization",
        "Real-time collaborative features",
        "Enterprise data integration capabilities",
        "Customizable dashboards for insights"
      ],
      date: "May 2023",
      category: "ai",
      status: "completed",
      isWinner: true,
      winnerDetails: {
        hackathon: "The Better Hack",
        date: "May 2023",
        achievement: "First Place Overall",
        judges: ["Dr. Sarah Chen, AI Research Lead", "Michael Rodriguez, Tech Investor", "Jennifer Liu, Product Lead"],
        prize: "$10,000 and 6-month enterprise partnership opportunity"
      },
      metrics: {
        developmentTime: "24 hours",
        teamSize: "Solo developer",
        impact: "Selected for enterprise adoption"
      },
      architecture: "The AI Knowledge Navigator uses a microservice architecture with a React frontend and Node.js backend. The system integrates with Neo4j for knowledge graph storage and leverages LangChain and GPT-4 for natural language understanding and generation. Real-time features are implemented using Socket.io.",
      technicalDetails: "The solution implements a novel approach to knowledge representation by combining traditional graph databases with vector embeddings for semantic search. This hybrid approach allows for both structured queries and natural language exploration of complex datasets.",
      implementationChallenges: "The biggest challenge was developing the knowledge graph visualization system within the 24-hour time constraint. This was solved by implementing a custom force-directed graph algorithm optimized for performance with large datasets and complex relationships."
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
