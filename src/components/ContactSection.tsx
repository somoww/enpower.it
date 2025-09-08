import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-energy-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Power Your Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to optimize your energy management? Contact our team to learn how EnPower can transform your solar assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card bg-gradient-card border-0">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Hamad Shokr - CEO</div>
                    <a href="mailto:hamad@enpower.it.com" className="text-energy-blue hover:text-energy-blue/80 transition-colors">hamad@enpower.it.com</a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Ibrahim Goda - CTO</div>
                    <a href="Ibrahim.goda@enpower.it.com" className="text-energy-blue hover:text-energy-blue/80 transition-colors">
                      Ibrahim.goda@enpower.it.com
                    </a>
                    
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                    <Linkedin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">LinkedIn</div>
                    <a href="https://www.linkedin.com/company/enpowerco/" target="_blank" rel="noopener noreferrer" className="text-energy-blue hover:text-energy-blue/80 transition-colors">
                      Connect with us
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  
                  
                </div>
              </div>
            </Card>

            {/* Quick Response Promise */}
            
          </div>

          {/* Call-to-Action */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card bg-gradient-card border-0">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Ready to Get Started?</h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-energy-light/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Free Consultation</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a free 30-minute consultation to discuss your energy optimization needs.
                  </p>
                  <Button variant="hero" className="w-full" onClick={() => window.open('mailto:hamad@enpower.it.com')}>
                    Schedule Consultation
                  </Button>
                </div>

                

                
              </div>
            </Card>

            {/* Social Proof */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;