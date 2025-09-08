import { Linkedin, Mail, Sun } from "lucide-react";
const Footer = () => {
  return <footer className="bg-energy-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Sun className="w-8 h-8 text-energy-blue" />
              <span className="text-2xl font-bold">EnPower</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Intelligent, Dynamic, and Autonomous Energy Optimization for Distributed Solar Assets. 
              Transforming surplus into savings through AI-driven technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/enpowerco/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-energy-blue transition-colors" />
              </a>
              <a href="hamad@enpower.it.com" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group">
                <Mail className="w-5 h-5 group-hover:text-energy-blue transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="hamad@enpower.it.com" className="hover:text-white transition-colors block">Hamad Shokr - CEO</a>
              </li>
              <li>
                <a href="Ibrahim.goda@enpower.it.com" className="hover:text-white transition-colors block">Ibrahim Goda - CTO</a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 EnPower. All rights reserved. Turning surplus into savings.
          </div>
          <div className="flex items-center space-x-6 text-sm text-white/60">
            <span>Built with sustainable technology</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-energy-green rounded-full animate-pulse"></div>
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;