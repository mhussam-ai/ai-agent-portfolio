
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoProjectsFoundProps {
  clearFilters: () => void;
}

export const NoProjectsFound = ({ clearFilters }: NoProjectsFoundProps) => {
  return (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Search className="h-8 w-8 text-primary/70" />
      </div>
      <h3 className="text-xl font-medium mb-2">No projects found</h3>
      <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
      <Button onClick={clearFilters} variant="outline" className="gap-2">
        <Filter className="h-4 w-4" />
        Clear Filters
      </Button>
    </div>
  );
};
