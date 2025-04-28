
import { useState } from "react";
import { Search, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ProjectFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  allSkills: string[];
  toggleSkill: (skill: string) => void;
  clearFilters: () => void;
}

export const ProjectFilters = ({
  searchTerm,
  setSearchTerm,
  selectedSkills,
  allSkills,
  toggleSkill,
  clearFilters,
}: ProjectFiltersProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <div className="flex items-center gap-2 flex-grow md:flex-grow-0">
      {!isSearchOpen ? (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsSearchOpen(true)}
          className="md:hidden"
          aria-label="Search projects"
        >
          <Search className="h-4 w-4" />
        </Button>
      ) : (
        <div className="flex items-center gap-2 w-full md:hidden">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setSearchTerm("");
              setIsSearchOpen(false);
            }}
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      <div className="relative hidden md:block w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Filter projects">
            <Filter className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Filter by skills</h4>
              {selectedSkills.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="h-8 text-xs"
                >
                  Clear all
                </Button>
              )}
            </div>
            
            <div className="space-y-2 max-h-[300px] overflow-auto pr-2">
              {allSkills.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`skill-${skill}`} 
                    checked={selectedSkills.includes(skill)}
                    onCheckedChange={() => toggleSkill(skill)}
                  />
                  <Label
                    htmlFor={`skill-${skill}`}
                    className="text-sm cursor-pointer flex-1"
                  >
                    {skill}
                  </Label>
                </div>
              ))}
            </div>
            
            {selectedSkills.length > 0 && (
              <div>
                <div className="text-sm font-medium mb-2">Selected skills</div>
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
                      <X className="ml-1 h-3 w-3" />
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
