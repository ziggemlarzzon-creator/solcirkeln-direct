import { Toaster } from "@/components/ui/sonner"; // choose either shadcn or Sonner, not both
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast notifications */}
      <Toaster />

      {/* Routing with GitHub Pages base path */}
      <BrowserRouter basename="/solcirkeln-direct/">
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Add all custom routes above the catch-all "*" route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
