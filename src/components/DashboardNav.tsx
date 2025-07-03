import { MapIcon } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import UserMenu from "./UserMenu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Home, Hammer, Key, ShoppingCart } from "lucide-react";

const DashboardNav = () => {
  const { user, updateSelectedProfile } = useWallet();

  if (!user) return null;

  const profileOptions = [
    { value: 'buyer', label: 'Property Buyer', icon: Home },
    { value: 'seller', label: 'Property Seller', icon: ShoppingCart },
    { value: 'developer', label: 'Developer', icon: Hammer },
    { value: 'agent', label: 'Real Estate Agent', icon: Key },
  ];

  const handleProfileChange = (value: string) => {
    updateSelectedProfile(value as typeof user.selectedProfile);
  };

  const currentProfile = profileOptions.find(p => p.value === user.selectedProfile);

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-6">
            <MapIcon className="h-8 w-8 text-primary" />
            
            <Select value={user.selectedProfile} onValueChange={handleProfileChange}>
              <SelectTrigger className="w-48 bg-background border-input">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    {currentProfile && <currentProfile.icon className="h-4 w-4" />}
                    {currentProfile?.label}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border shadow-lg z-50">
                {profileOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-accent hover:text-accent-foreground">
                    <div className="flex items-center gap-2">
                      <option.icon className="h-4 w-4" />
                      {option.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;