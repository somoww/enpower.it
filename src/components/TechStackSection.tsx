import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Brain, Cloud, Monitor } from "lucide-react";

const TechStackSection = () => {
  const technologies = [
    {
      icon: Network,
      title: "System Integrator",
      description: "Seamless integration with various solar systems and IoT devices for comprehensive energy management.",
      features: ["Multi-protocol support", "Real-time data sync", "Hardware agnostic"]
    },
    {
      icon: Brain,
      title: "ML-Driven Software",
      description: "Advanced machine learning algorithms for accurate forecasting and intelligent decision making.",
      features: ["Deep learning models", "Predictive analytics", "Adaptive algorithms"]
    },
    {
      icon: Cloud,
      title: "Cloud & Dashboard",
      description: "Secure cloud platform with an intuitive dashboard for monitoring and control from anywhere.",
      features: ["Enterprise security", "Real-time analytics", "Mobile responsive"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-energy-light/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Our Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cutting-Edge Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built on enterprise-grade technology for reliability, scalability, and performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="p-8 shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105 bg-gradient-card border-0 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                  <tech.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{tech.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {tech.description}
              </p>
              
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-energy-green rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Architecture Overview */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">System Architecture</h3>
            <p className="text-muted-foreground">End-to-end solution designed for scalability and reliability</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-energy-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <Network className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground">Solar Assets</span>
            </div>
            
            <div className="flex justify-center">
              <div className="h-0.5 w-full bg-gradient-accent hidden md:block"></div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-energy-green rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground">AI Engine</span>
            </div>
            
            <div className="flex justify-center">
              <div className="h-0.5 w-full bg-gradient-accent hidden md:block"></div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-energy-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <Monitor className="w-8 h-8 text-accent-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;