import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Leaf, DollarSign, Zap } from "lucide-react";
const ResultsSection = () => {
  const metrics = [{
    icon: DollarSign,
    value: "30%",
    label: "Return on Investment",
    description: "Average ROI achieved by our clients within the first year of implementation",
    color: "energy-blue"
  }, {
    icon: Leaf,
    value: "1.6x",
    label: "Emission Reduction",
    description: "Significant decrease in carbon footprint through intelligent optimization",
    color: "energy-green"
  }];
  const testimonials = [{
    quote: "EnPower transformed our energy management. We've seen remarkable savings and our carbon footprint has significantly decreased.",
    author: "Sarah Chen",
    role: "Facility Manager",
    company: "GreenTech Industries"
  }, {
    quote: "The AI-driven optimization is incredible. It learns our patterns and continuously improves efficiency without any manual intervention.",
    author: "Michael Rodriguez",
    role: "Sustainability Director",
    company: "EcoSolutions Corp"
  }];
  return <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-2 border-energy-green text-energy-green">
            Proven Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Real Impact, Measurable Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how our clients are achieving significant savings and environmental impact
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {metrics.map((metric, index) => <Card key={index} className="p-8 text-center shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105 bg-gradient-card border-0 group">
              <div className={`w-16 h-16 bg-${metric.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className={`text-4xl font-bold mb-2 text-${metric.color}`}>
                {metric.value}
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {metric.label}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </Card>)}
        </div>


        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white shadow-glow">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Energy Management?</h3>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of organizations already saving with EnPower
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-white text-energy-blue px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Start Your Journey
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ResultsSection;