
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch } from "./ui/switch";

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-sm" : "py-4 bg-background/80 backdrop-blur-sm"
      } border-b`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold hover:text-primary transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              MH
            </div>
            <span className="hidden sm:inline-block">Mohammad Hussam</span>
          </Link>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          
          <div className="flex items-center gap-3">
            <SocialLinks />
            <div className="h-6 w-px bg-border mx-1"></div>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
        
        <div className="flex items-center md:hidden">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            className="ml-2"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-background border-b"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <NavLinks mobile />
              
              <div className="pt-4 border-t flex justify-center gap-4">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];
  
  return (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'}`}>
      {links.map((link) => (
        <Link 
          key={link.path}
          to={link.path}
          className={`
            relative ${mobile ? 'py-2 px-4 hover:bg-primary/5 rounded-md transition-colors w-full' : ''} 
            hover:text-primary transition-colors
            ${location.pathname === link.path ? 'text-primary font-medium' : ''}
          `}
        >
          {link.label}
          {location.pathname === link.path && (
            <motion.div 
              className={`absolute ${mobile ? 'left-0 top-0 h-full w-1' : 'bottom-[-4px] left-0 h-0.5 w-full'} bg-primary`}
              layoutId="navbar-indicator"
              initial={{ width: mobile ? '2px' : 0 }}
              animate={{ width: mobile ? '2px' : '100%' }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </div>
  );
};

const SocialLinks = () => {
  return (
    <>
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" asChild>
        <a href="https://github.com/mhussam-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" asChild>
        <a href="https://linkedin.com/in/mhussam-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" asChild>
        <a href="mailto:mohammadhussam.ai@gmail.com" aria-label="Email">
          <Mail className="h-4 w-4" />
        </a>
      </Button>
    </>
  );
};

const ThemeToggle = ({ theme, setTheme }: { theme: string, setTheme: (theme: "dark" | "light") => void }) => {
  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        className="data-[state=checked]:bg-primary"
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
};
