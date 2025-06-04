
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "flagged": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="py-16 bg-gray-50" id="map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Property Registry Map
          </h2>
          <p className="text-lg text-gray-600">
            Explore property records and their histories across the community
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="text-center z-10">
                    <MapIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-gray-600">
                      Click on properties to view detailed records
                    </p>
                  </div>
                  
                  {/* Sample property markers */}
                  <div 
                    className="absolute top-20 left-32 w-4 h-4 bg-green-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                    onClick={() => setSelectedProperty(sampleProperties[0])}
                  ></div>
                  <div 
                    className="absolute top-32 right-40 w-4 h-4 bg-yellow-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                    onClick={() => setSelectedProperty(sampleProperties[1])}
                  ></div>
                  <div 
                    className="absolute bottom-24 left-48 w-4 h-4 bg-red-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                    onClick={() => setSelectedProperty(sampleProperties[2])}
                  ></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property Details Panel */}
          <div>
            {selectedProperty ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Property Details
                    <Badge className={getStatusColor(selectedProperty.status)}>
                      {selectedProperty.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">{selectedProperty.address}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Construction Year</h4>
                    <p className="text-gray-600">{selectedProperty.constructionYear}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Zoning</h4>
                    <p className="text-gray-600">{selectedProperty.zoning}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Last Updated</h4>
                    <p className="text-gray-600">{selectedProperty.lastUpdated}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Total Updates</h4>
                    <p className="text-gray-600">{selectedProperty.updates} recorded changes</p>
                  </div>

                  <Button className="w-full mt-4">
                    View Full History
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MapIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Select a Property
                  </h3>
                  <p className="text-gray-500">
                    Click on a property marker on the map to view its details and history
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
