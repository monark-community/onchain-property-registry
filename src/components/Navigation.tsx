
import { Button } from "@/components/ui/button";
import { MapIcon, User } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { isConnected, connectWallet } = useWallet();

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={isConnected ? "/dashboard" : "/"} className="flex items-center space-x-3">
            <MapIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Cadastrum</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {isConnected ? (
              <>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
                <a href="#registry" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Registry
                </a>
              </>
            ) : (
              <>
                <a href="#map" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Registry
                </a>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </>
            )}
          </div>

          {isConnected ? (
            <UserMenu />
          ) : (
            <Button onClick={connectWallet} className="bg-primary hover:bg-primary/90">
              <User className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
