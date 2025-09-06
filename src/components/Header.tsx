import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToDivById = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="EnPower Logo"
              className="w-12 h-12 object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToDivById("benefits")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("tech-stack")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
