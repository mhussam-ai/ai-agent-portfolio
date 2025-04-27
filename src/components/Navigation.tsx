
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
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
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      } border-b`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">
            <span className="pr-1">👨‍💻</span> Mohammad Hussam
          </Link>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <ThemeToggle theme={theme} setTheme={setTheme} />
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
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <NavLinks mobile />
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
    <>
      {links.map((link) => (
        <Link 
          key={link.path}
          to={link.path}
          className={`
            relative ${mobile ? 'py-2 px-4 hover:bg-primary/5 rounded-md transition-colors' : ''} 
            hover:text-primary transition-colors
            ${location.pathname === link.path ? 'text-primary font-medium' : ''}
          `}
        >
          {link.label}
          {location.pathname === link.path && (
            <motion.div 
              className="absolute bottom-[-2px] left-0 h-0.5 bg-primary"
              layoutId="navbar-indicator"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </>
  );
};

const ThemeToggle = ({ theme, setTheme }: { theme: string, setTheme: (theme: "dark" | "light") => void }) => {
  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <Moon className="h-4 w-4" />
    </div>
  );
};
