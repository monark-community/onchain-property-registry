
import { MapIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <MapIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Cadastrum</span>
            </div>
            <p className="text-gray-400">
              Building transparent, community-driven land records 
              through blockchain technology.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Interactive Property Maps</li>
              <li>Blockchain Record Storage</li>
              <li>Community Contributions</li>
              <li>Audit Trail Tracking</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>Smart Contracts</li>
              <li>Community Guidelines</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Cadastrum. Building the future of civic infrastructure.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
