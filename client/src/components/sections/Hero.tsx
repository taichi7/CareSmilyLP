import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-[7rem] pb-[4rem] md:pt-[9rem] md:pb-[6rem]">
      <div className="container relative">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="mb-6 font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-3 duration-1000">
            Building the Future of Web Applications
          </h1>
          <p className="mb-8 text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Create beautiful, modern, and responsive web applications with our
            powerful platform. Start building your next project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
