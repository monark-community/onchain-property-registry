import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, LogOut, Home, Hammer, Key, ShoppingCart } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const { user, disconnectWallet, updateSelectedProfile } = useWallet();
  const navigate = useNavigate();

  if (!user) return null;

  const profileIcons = {
    buyer: Home,
    seller: ShoppingCart,
    developer: Hammer,
    agent: Key,
  };

  const handleLogout = () => {
    disconnectWallet();
    navigate('/');
  };

  const handleProfileChange = (profile: typeof user.selectedProfile) => {
    updateSelectedProfile(profile);
    navigate('/dashboard');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-2 flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user.alias.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-left">
            <div className="text-sm font-medium text-foreground">{user.alias}</div>
            <div className="text-xs text-muted-foreground">{user.walletAddress}</div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Profile Selection</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleProfileChange('buyer')}>
          <Home className="mr-2 h-4 w-4" />
          Property Buyer
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleProfileChange('seller')}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Property Seller
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleProfileChange('developer')}>
          <Hammer className="mr-2 h-4 w-4" />
          Developer
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleProfileChange('agent')}>
          <Key className="mr-2 h-4 w-4" />
          Real Estate Agent
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/profile')}>
          <User className="mr-2 h-4 w-4" />
          Profile & Preferences
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/settings')}>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Disconnect Wallet
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;