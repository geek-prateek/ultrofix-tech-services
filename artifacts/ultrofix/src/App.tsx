import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Estimator from "@/components/home/Estimator";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Reviews from "@/components/home/Reviews";
import MobileActionBar from "@/components/home/MobileActionBar";
import Footer from "@/components/home/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Estimator />
        <Services />
        <About />
        <Reviews />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Home />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
