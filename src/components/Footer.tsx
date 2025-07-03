
import { MapIcon, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-background/10 p-2 rounded-lg">
                <MapIcon className="h-6 w-6 text-background" />
              </div>
              <span className="text-2xl font-bold">Cadastrum</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Building transparent, community-driven property records. 
              Empowering informed decisions through verified data.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-background">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Search Properties</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Submit Data</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Developer Tools</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-background">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-background/70 hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            &copy; 2024 Cadastrum. Building the future of transparent property records.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
