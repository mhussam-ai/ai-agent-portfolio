
import { motion } from "framer-motion";
import { ProfileImage } from "./hero/ProfileImage";
import { SocialLinks } from "./hero/SocialLinks";
import { HeroContent } from "./hero/HeroContent";
import { ScrollIndicator } from "./hero/ScrollIndicator";
import { useIsMobile } from "@/hooks/use-mobile";

export const HomepageHero = () => {
  const isMobile = useIsMobile();
  
  const words = [
    { text: "AI Specialist" },
    { text: "Agent Developer" },
    { text: "Voice AI Engineer" },
    { text: "ML Researcher" },
  ];
  
  const handleScrollDown = () => {
    const featuredProjectsSection = document.getElementById('featured-projects');
    if (featuredProjectsSection) {
      featuredProjectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center py-10 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl pt-8 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Social Media Links - Left Side (Desktop) */}
          <motion.div 
            className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <SocialLinks vertical />
          </motion.div>

          {/* Main Content - Middle Section with Mobile-First Approach */}
          <div className="lg:col-span-11 lg:grid lg:grid-cols-11">
            {/* Profile Image - For Mobile (Top) */}
            <motion.div 
              className="lg:hidden flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileImage />
            </motion.div>

            {/* Hero Content - Left Side */}
            <div className="lg:col-span-7">
              <HeroContent typewriterWords={words} />
            </div>
            
            {/* Profile Image - Desktop (Right Side) */}
            <motion.div 
              className="hidden lg:col-span-4 lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileImage />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Mobile Scroll Down Indicator (positioned within content flow) */}
      <div className="lg:hidden mt-4 mb-6 w-full flex justify-center">
        <ScrollIndicator onClick={handleScrollDown} />
      </div>
      
      {/* Desktop Scroll Down Indicator (positioned absolutely) */}
      <div className="hidden lg:block">
        <ScrollIndicator onClick={handleScrollDown} />
      </div>
    </section>
  );
};
