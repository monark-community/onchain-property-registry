
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapIcon } from "lucide-react";

interface PropertyRecord {
  id: string;
  address: string;
  constructionYear: number;
  zoning: string;
  lastUpdated: string;
  updates: number;
  status: "verified" | "pending" | "flagged";
}

const PropertyMap = () => {
  const [selectedProperty, setSelectedProperty] = useState<PropertyRecord | null>(null);

  // Mock data for demonstration
  const sampleProperties: PropertyRecord[] = [
    {
      id: "1",
      address: "123 Main Street",
      constructionYear: 1985,
      zoning: "Residential",
      lastUpdated: "2024-05-15",
      updates: 3,
      status: "verified"
    },
    {
      id: "2", 
      address: "456 Oak Avenue",
      constructionYear: 2010,
      zoning: "Commercial",
      lastUpdated: "2024-05-20",
      updates: 1,
      status: "pending"
    },
    {
      id: "3",
      address: "789 Pine Road",
      constructionYear: 1972,
      zoning: "Residential",
      lastUpdated: "2024-05-18",
      updates: 5,
      status: "flagged"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "verified": return "default";
      case "pending": return "secondary";
      case "flagged": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="py-20 bg-background" id="map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Explore Property Data
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Search through verified property records and see real-time updates from the community
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Modern Map Interface */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="h-[500px] bg-gradient-to-br from-muted/20 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <div className="w-full h-full" 
                         style={{
                           backgroundImage: `
                             linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
                           `,
                           backgroundSize: '20px 20px'
                         }}>
                    </div>
                  </div>
                  
                  <div className="text-center z-10">
                    <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <MapIcon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Interactive Property Browser
                    </h3>
                    <p className="text-muted-foreground">
                      Click on properties to explore their complete history
                    </p>
                  </div>
                  
                  {/* Modern property markers */}
                  <div 
                    className="absolute top-24 left-32 w-3 h-3 bg-accent rounded-full cursor-pointer hover:scale-150 transition-all duration-200 shadow-lg"
                    onClick={() => setSelectedProperty(sampleProperties[0])}
                  >
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div 
                    className="absolute top-40 right-40 w-3 h-3 bg-secondary rounded-full cursor-pointer hover:scale-150 transition-all duration-200 shadow-lg"
                    onClick={() => setSelectedProperty(sampleProperties[1])}
                  >
                    <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div 
                    className="absolute bottom-32 left-48 w-3 h-3 bg-destructive rounded-full cursor-pointer hover:scale-150 transition-all duration-200 shadow-lg"
                    onClick={() => setSelectedProperty(sampleProperties[2])}
                  >
                    <div className="absolute inset-0 bg-destructive rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property Details Panel */}
          <div className="lg:col-span-2">
            {selectedProperty ? (
              <Card className="border-0 shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-foreground">
                      Property Overview
                    </CardTitle>
                    <Badge variant={getStatusVariant(selectedProperty.status)}>
                      {selectedProperty.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Address
                      </h4>
                      <p className="text-foreground font-medium">{selectedProperty.address}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Built
                        </h4>
                        <p className="text-foreground font-medium">{selectedProperty.constructionYear}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Zoning
                        </h4>
                        <p className="text-foreground font-medium">{selectedProperty.zoning}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Last Updated
                        </h4>
                        <p className="text-foreground font-medium">{selectedProperty.lastUpdated}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Updates
                        </h4>
                        <p className="text-foreground font-medium">{selectedProperty.updates} changes</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6" size="lg">
                    View Complete History
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <div className="bg-muted/50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <MapIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Select a Property
                  </h3>
                  <p className="text-muted-foreground">
                    Click on any property marker to explore its detailed records and history
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
