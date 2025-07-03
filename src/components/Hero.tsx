
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Search, Users, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-background via-secondary/20 to-accent/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Stop getting surprised by hidden property issues
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Know What You're Really
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Getting Into</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Before you buy, rent, or build - get the complete story. See permit history, 
            zoning details, and community insights all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Search className="h-5 w-5 mr-2" />
              Search Your Property
            </Button>
            <Button size="lg" variant="outline">
              Check Your Neighborhood
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 mb-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>1,200+ active contributors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>5,000+ verified properties</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Community verified</span>
            </div>
          </div>

          {/* Use Cases */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-card border rounded-lg p-6 text-left">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                🏠
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                Before You Buy
              </h3>
              <p className="text-muted-foreground mb-4">
                "Is that garage addition actually permitted? What about the basement suite?"
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• See all permits and violations</li>
                <li>• Check zoning compliance</li>
                <li>• View construction history</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 text-left">
              <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                🏗️
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                Before You Build
              </h3>
              <p className="text-muted-foreground mb-4">
                "What can I actually build here? What setbacks do I need?"
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Zoning restrictions & allowances</li>
                <li>• Setback requirements</li>
                <li>• Neighborhood precedents</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 text-left">
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                🔍
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                Before You Rent
              </h3>
              <p className="text-muted-foreground mb-4">
                "Is this basement suite legal? Are there safety issues?"
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Legal rental verification</li>
                <li>• Safety compliance history</li>
                <li>• Community insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
