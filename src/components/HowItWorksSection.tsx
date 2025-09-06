import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dataCollectionIcon from "@/assets/data-collection-icon.png";
import mlForecastingIcon from "@/assets/ml-forecasting-icon.png";
import optimizationIcon from "@/assets/optimization-icon.png";
import automationIcon from "@/assets/automation-icon.png";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: dataCollectionIcon,
      title: "Data Collection",
      description: "Seamlessly collect data from your solar assets with real-time monitoring and comprehensive analytics.",
      step: "01"
    },
    {
      icon: mlForecastingIcon,
      title: "ML Forecasting",
      description: "Advanced machine learning algorithms analyze patterns to provide accurate energy production and consumption forecasts.",
      step: "02"
    },
    {
      icon: optimizationIcon,
      title: "Optimization Engine",
      description: "Real-time energy flow optimization based on forecasts, weather data, and consumption patterns.",
      step: "03"
    },
    {
      icon: automationIcon,
      title: "Automated Control",
      description: "Intelligent scheduling and automated energy distribution for maximum efficiency and cost savings.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-2 border-energy-blue text-energy-blue">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Four Steps to Energy Independence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our intelligent system follows a proven four-step process to optimize your solar energy management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-8 text-center shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105 bg-gradient-card border-0 relative overflow-hidden group"
            >
              {/* Step number background */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-energy-light/20 group-hover:text-energy-blue/30 transition-colors">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="relative mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-hero p-4 shadow-glow">
                  <img 
                    src={step.icon} 
                    alt={step.title}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground relative z-10">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {step.description}
              </p>

              {/* Connecting line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-accent transform -translate-y-1/2 z-0"></div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-card rounded-full px-8 py-4 shadow-soft">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-energy-blue rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Real-time Processing</span>
              <div className="w-3 h-3 bg-energy-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm font-medium text-muted-foreground">24/7 Monitoring</span>
              <div className="w-3 h-3 bg-energy-yellow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm font-medium text-muted-foreground">Autonomous Operation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;