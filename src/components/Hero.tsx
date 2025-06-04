
import { Button } from "@/components/ui/button";
import { MapIcon, History, User } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Decentralized Land
            <span className="block text-blue-600">Registry</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A blockchain-powered public registry that enables communities to collaboratively 
            track, verify, and maintain accurate land and building data with full transparency 
            and immutable audit trails.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <MapIcon className="h-5 w-5 mr-2" />
              Explore Registry
            </Button>
            <Button size="lg" variant="outline">
              Submit Property Data
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Interactive Mapping
              </h3>
              <p className="text-gray-600">
                Browse property records on an intuitive map interface with real-time data
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <History className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Immutable History
              </h3>
              <p className="text-gray-600">
                Every change is timestamped and stored permanently on blockchain
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Citizens, officials, and inspectors collaborate to maintain accurate records
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
