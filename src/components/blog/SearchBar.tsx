
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <motion.div variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }} className="mb-8 relative max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input 
        placeholder="Search articles..." 
        className="pl-10 focus-visible:ring-primary"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </motion.div>
  );
}
