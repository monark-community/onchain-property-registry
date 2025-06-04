
import { Button } from "@/components/ui/button";
import { MapIcon, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <MapIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Cadastrum</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#map" className="text-gray-700 hover:text-blue-600 transition-colors">
              Browse Registry
            </a>
            <a href="#submit" className="text-gray-700 hover:text-blue-600 transition-colors">
              Submit Data
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700">
            <User className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
