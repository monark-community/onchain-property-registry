import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Building, Users, HardHat, Award } from "lucide-react";

const RoleBasedValue = () => {
  const roles = [
    {
      icon: Home,
      title: "Property Owners",
      subtitle: "Protect your investment",
      benefits: [
        "Track your property's complete history",
        "Get alerts about neighborhood changes",
        "Increase transparency for buyers"
      ],
      cta: "Register Your Property",
      badge: "Most Popular"
    },
    {
      icon: Users,
      title: "Buyers & Renters", 
      subtitle: "Make informed decisions",
      benefits: [
        "Verify all claims before signing",
        "See hidden issues upfront", 
        "Compare neighborhood data"
      ],
      cta: "Start Searching"
    },
    {
      icon: Building,
      title: "Real Estate Professionals",
      subtitle: "Build trust with clients",
      benefits: [
        "Access comprehensive property data",
        "Provide verified information",
        "Avoid liability issues"
      ],
      cta: "Professional Access"
    },
    {
      icon: HardHat,
      title: "Contractors & Inspectors",
      subtitle: "Share your expertise, earn recognition",
      benefits: [
        "Build your reputation through contributions",
        "Get referrals from verified work",
        "Access detailed property histories"
      ],
      cta: "Join as Professional",
      badge: "Earn Rewards"
    }
  ];

  return (
    <div className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Built for Everyone in Real Estate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're buying, selling, building, or just curious about your neighborhood, 
            Cadastrum gives you the information you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                {role.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {role.badge}
                  </Badge>
                )}
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {role.subtitle}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {role.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={index === 0 ? "default" : "outline"}
                  >
                    {role.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Incentive Preview */}
        <div className="mt-16 bg-card border rounded-xl p-8 text-center">
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-card-foreground mb-3">
            Earn Recognition for Contributing
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contributors earn reputation points, badges, and community recognition. Top contributors 
            get featured profiles and priority support.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span>Reputation Points</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span>Community Badges</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <span>Featured Profiles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleBasedValue;