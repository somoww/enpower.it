import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Leaf, Battery } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-energy-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            About EnPower
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            AI-Driven Energy Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            EnPower is an AI-driven platform designed to optimize energy management for distributed solar assets. 
            Our technology intelligently manages energy flow, maximizing savings and promoting energy autonomy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 bg-gradient-card border-0">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">More Savings</h3>
            <p className="text-muted-foreground leading-relaxed">
              Maximize your energy savings with our AI-powered optimization algorithms that learn and adapt to your consumption patterns.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 bg-gradient-card border-0">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Fewer Emissions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reduce your carbon footprint and contribute to a greener future through intelligent energy distribution and waste reduction.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 bg-gradient-card border-0">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Battery className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Energy Autonomy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Gain greater control over your energy consumption and reduce reliance on the grid with autonomous operation.
            </p>
          </Card>
        </div>

        <div className="text-center" id="benefits">
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-glow">
            <h3 className="text-3xl font-bold text-white mb-4">Key Benefits</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-xl font-semibold">
              <span className="text-white bg-white/20 px-6 py-3 rounded-lg">💰 More Savings</span>
              <span className="text-white bg-white/20 px-6 py-3 rounded-lg">🌱 Fewer Emissions</span>
              <span className="text-white bg-white/20 px-6 py-3 rounded-lg">⚡ Energy Autonomy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;