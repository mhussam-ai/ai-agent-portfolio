
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/common/Footer";
import Index from "./pages/Index";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Loader } from "lucide-react";
import ScrollToTop from "./components/common/ScrollToTop";

// Lazy load pages for performance optimization
const LazyAbout = lazy(() => import("./pages/About"));
const LazyProjects = lazy(() => import("./pages/Projects"));
const LazyBlog = lazy(() => import("./pages/Blog"));
const LazyContact = lazy(() => import("./pages/Contact"));
const LazySkills = lazy(() => import("./pages/Skills"));
const LazyBlogPost = lazy(() => import("./pages/BlogPost"));
const LazyNotFound = lazy(() => import("./pages/NotFound"));

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
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={
            <Suspense fallback={<PageLoader />}>
              <LazyAbout />
            </Suspense>
          } />
          <Route path="/skills" element={
            <Suspense fallback={<PageLoader />}>
              <LazySkills />
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
          <Route path="/blog/:slug" element={
            <Suspense fallback={<PageLoader />}>
              <LazyBlogPost />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<PageLoader />}>
              <LazyContact />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<PageLoader />}>
              <LazyNotFound />
            </Suspense>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
