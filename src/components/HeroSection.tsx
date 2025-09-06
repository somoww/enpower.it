import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-solar-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-energy-dark/80 to-energy-dark/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-energy-yellow mr-3 animate-pulse-glow" />
            <span className="text-energy-yellow font-semibold text-lg">AI-Powered Energy Optimization</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turning Surplus into{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent animate-pulse-glow">
              Savings
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Intelligent, Dynamic, and Autonomous Energy Optimization for Distributed Solar Assets
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Get Started Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-black hover:bg-white/10"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-energy-yellow mb-2">30%</div>
              <div className="text-white/80">Return on Investment</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-energy-green mb-2">1.6x</div>
              <div className="text-white/80">Emission Reduction</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-energy-blue mb-2">100%</div>
              <div className="text-white/80">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-energy-yellow rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-energy-green rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-energy-blue rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;