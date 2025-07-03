import { Card, CardContent } from "@/components/ui/card";
import { History, MapIcon, User, Shield, Database, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background via-secondary/20 to-accent/30 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            About Cadastrum
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building a transparent, community-driven solution that gives everyone 
            access to complete property information. No more surprises, no more guessing.
          </p>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Problem We're Solving
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Property records are fragmented across multiple agencies, often outdated, 
                  and difficult to access when you need them most.
                </p>
                <p>
                  Buyers discover unpermitted additions after closing. Renters find out 
                  basement suites are illegal after moving in. Contractors can't verify 
                  their work history to new clients.
                </p>
                <p>
                  Critical decisions are made with incomplete information, leading to 
                  financial losses, legal issues, and community frustration.
                </p>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Our Solution
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Database className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Unified Records</h4>
                      <p className="text-sm text-muted-foreground">All property data in one accessible place</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Community Driven</h4>
                      <p className="text-sm text-muted-foreground">Verified by local experts and residents</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Transparent History</h4>
                      <p className="text-sm text-muted-foreground">Complete audit trail of all changes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              How Cadastrum Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern approach to property records that puts transparency and accuracy first
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-card border rounded-xl p-8 shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MapIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Geospatial Integration
                </h3>
                <p className="text-muted-foreground">
                  Built on accurate mapping data with precise parcel boundaries 
                  and location information for every property.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card border rounded-xl p-8 shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <History className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Immutable Records
                </h3>
                <p className="text-muted-foreground">
                  Every submission is timestamped and permanently recorded, 
                  creating an unalterable history of property changes.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card border rounded-xl p-8 shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Community Governance
                </h3>
                <p className="text-muted-foreground">
                  Role-based permissions and community validation ensure 
                  data quality while maintaining democratic oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To create a world where property information is transparent, accessible, 
            and reliable for everyone. Where buying a home, renting an apartment, 
            or building an addition doesn't come with hidden surprises. Where 
            communities can maintain accurate records together, and where good work 
            by professionals is recognized and rewarded.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;