import { useWallet } from "@/contexts/WalletContext";
import { Home, Hammer, Key, ShoppingCart, TrendingUp, MapPin, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardNav from "@/components/DashboardNav";

const Dashboard = () => {
  const { user } = useWallet();

  if (!user) return null;

  const profileConfig = {
    buyer: {
      title: "Property Buyer Dashboard",
      description: "Find and research your perfect property",
      cards: [
        { title: "Saved Properties", description: "12 properties", icon: Home, color: "text-primary" },
        { title: "Market Alerts", description: "3 new matches", icon: TrendingUp, color: "text-accent" },
        { title: "Property Reports", description: "5 completed", icon: FileText, color: "text-muted-foreground" },
      ]
    },
    seller: {
      title: "Property Seller Dashboard",
      description: "Manage your property listings and market presence",
      cards: [
        { title: "Active Listings", description: "2 properties", icon: ShoppingCart, color: "text-primary" },
        { title: "Market Analytics", description: "View trends", icon: TrendingUp, color: "text-accent" },
        { title: "Property History", description: "Complete records", icon: FileText, color: "text-muted-foreground" },
      ]
    },
    developer: {
      title: "Developer Dashboard",
      description: "Plan and manage your development projects",
      cards: [
        { title: "Active Projects", description: "3 developments", icon: Hammer, color: "text-primary" },
        { title: "Zoning Research", description: "8 areas analyzed", icon: MapPin, color: "text-accent" },
        { title: "Permit Tracking", description: "12 applications", icon: FileText, color: "text-muted-foreground" },
      ]
    },
    agent: {
      title: "Real Estate Agent Dashboard",
      description: "Manage clients and grow your business",
      cards: [
        { title: "Active Clients", description: "15 clients", icon: Key, color: "text-primary" },
        { title: "Property Tours", description: "8 scheduled", icon: Home, color: "text-accent" },
        { title: "Market Reports", description: "Generate insights", icon: FileText, color: "text-muted-foreground" },
      ]
    }
  };

  const config = profileConfig[user.selectedProfile];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{config.title}</h1>
          <p className="text-lg text-muted-foreground">{config.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {config.cards.map((card, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <card.icon className={`h-4 w-4 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{card.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks for your profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <MapPin className="mr-2 h-4 w-4" />
                Browse Property Registry
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Generate Property Report
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Market Trends
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Searched properties in Downtown</span>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Generated permit report</span>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Updated profile preferences</span>
                  <span className="text-xs text-muted-foreground">3 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;