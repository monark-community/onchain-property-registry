
import { Card, CardContent } from "@/components/ui/card";
import { History, MapIcon, User } from "lucide-react";

const About = () => {
  return (
    <div className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Cadastrum
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're building a transparent, community-driven solution that gives everyone 
            access to complete property information - no more surprises, no more guessing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Problem We Solve
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Outdated and inaccessible land records</li>
                <li>• Fragmented data across multiple agencies</li>
                <li>• Lack of transparency in property changes</li>
                <li>• Difficulty tracking construction compliance</li>
                <li>• No unified audit trail for modifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Solution
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Blockchain-backed immutable records</li>
                <li>• Community-driven data contributions</li>
                <li>• Real-time updates with full transparency</li>
                <li>• Role-based submission system</li>
                <li>• Complete change history tracking</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Geospatial Integration
            </h3>
            <p className="text-gray-600">
              Built on OpenStreetMap for accurate parcel boundaries and location data
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <History className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Blockchain Audit Trail
            </h3>
            <p className="text-gray-600">
              Every submission is timestamped and permanently recorded for complete transparency
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Community Governance
            </h3>
            <p className="text-gray-600">
              Role-based permissions and optional voting mechanisms for data validation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
