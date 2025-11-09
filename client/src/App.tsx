import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GlitterEffect } from "@/components/GlitterEffect";
import { AudioProvider } from "@/contexts/AudioContext";
import LandingPage from "./pages/LandingPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="wedding-ui-theme">
      <TooltipProvider>
        <AudioProvider>
          <GlitterEffect />
          <Toaster />
          <Sonner />
          <Router>
            <Switch>
              <Route path="/" component={LandingPage} />
              <Route path="/invitation" component={Index} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route component={NotFound} />
            </Switch>
          </Router>
        </AudioProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
