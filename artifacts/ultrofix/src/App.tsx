import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/home/Navbar";
import MobileActionBar from "@/components/home/MobileActionBar";
import Footer from "@/components/home/Footer";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
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
        <Layout>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={ServicesPage} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
