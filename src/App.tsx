
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Loader } from "lucide-react";

// Lazy load pages for performance optimization
const LazyAbout = lazy(() => import("./pages/About"));
const LazyProjects = lazy(() => import("./pages/Projects"));
const LazyBlog = lazy(() => import("./pages/Blog"));
const LazyContact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Loader className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// AnimatePresence needs to be used outside of the Routes component
// so we create a separate component for the routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={
          <Suspense fallback={<PageLoader />}>
            <LazyAbout />
          </Suspense>
        } />
        <Route path="/projects" element={
          <Suspense fallback={<PageLoader />}>
            <LazyProjects />
          </Suspense>
        } />
        <Route path="/blog" element={
          <Suspense fallback={<PageLoader />}>
            <LazyBlog />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<PageLoader />}>
            <LazyContact />
          </Suspense>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground pt-16">
            <Navigation />
            <AnimatedRoutes />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
