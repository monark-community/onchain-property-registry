import DashboardNav from "@/components/DashboardNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Settings = () => {
  const [activeSection, setActiveSection] = useState('notifications');

  const settingSections = [
    { id: 'notifications', label: 'Notifications', description: 'Manage your notification preferences' },
    { id: 'appearance', label: 'Appearance', description: 'Customize how Cadastrum looks' },
    { id: 'map', label: 'Map Preferences', description: 'Configure map display settings' },
    { id: 'privacy', label: 'Privacy', description: 'Control your data and privacy' },
    { id: 'data', label: 'Data & Storage', description: 'Manage your data and storage' },
    { id: 'advanced', label: 'Advanced', description: 'Advanced settings and options' },
  ];

  const renderNotifications = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Property Alerts</CardTitle>
          <CardDescription>Get notified about new properties matching your criteria</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-alerts">Email Alerts</Label>
              <p className="text-sm text-muted-foreground">Receive property alerts via email</p>
            </div>
            <Switch id="email-alerts" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="browser-notifications">Browser Notifications</Label>
              <p className="text-sm text-muted-foreground">Show browser notifications for urgent alerts</p>
            </div>
            <Switch id="browser-notifications" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Market Updates</CardTitle>
          <CardDescription>Receive weekly market trend reports</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="market-weekly">Weekly Reports</Label>
              <p className="text-sm text-muted-foreground">Get weekly market analysis reports</p>
            </div>
            <Switch id="market-weekly" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="market-breaking">Breaking News</Label>
              <p className="text-sm text-muted-foreground">Immediate notifications for market changes</p>
            </div>
            <Switch id="market-breaking" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Community Activity</CardTitle>
          <CardDescription>Updates on community contributions and discussions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="community-updates">Community Updates</Label>
              <p className="text-sm text-muted-foreground">Get notified about community activity</p>
            </div>
            <Switch id="community-updates" />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAppearance = () => (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>Customize how Cadastrum looks and feels</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
          </div>
          <Switch id="dark-mode" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="compact-view">Compact View</Label>
            <p className="text-sm text-muted-foreground">Show more content in less space</p>
          </div>
          <Switch id="compact-view" />
        </div>
      </CardContent>
    </Card>
  );

  const renderMapPreferences = () => (
    <Card>
      <CardHeader>
        <CardTitle>Map Preferences</CardTitle>
        <CardDescription>Configure map display and interaction settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="satellite-view">Default to Satellite View</Label>
            <p className="text-sm text-muted-foreground">Start with satellite imagery instead of street map</p>
          </div>
          <Switch id="satellite-view" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="auto-zoom">Auto-zoom to Properties</Label>
            <p className="text-sm text-muted-foreground">Automatically focus on property details</p>
          </div>
          <Switch id="auto-zoom" />
        </div>
      </CardContent>
    </Card>
  );

  const renderPrivacy = () => (
    <Card>
      <CardHeader>
        <CardTitle>Privacy Settings</CardTitle>
        <CardDescription>Control your data and privacy preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label>Public Profile</Label>
            <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
          </div>
          <Button variant="outline" size="sm">Enabled</Button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label>Data Sharing</Label>
            <p className="text-sm text-muted-foreground">Allow anonymized data to improve platform features</p>
          </div>
          <Button variant="outline" size="sm">Manage</Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderDataStorage = () => (
    <Card>
      <CardHeader>
        <CardTitle>Data & Storage</CardTitle>
        <CardDescription>Manage your data and storage preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label>Cache Size</Label>
            <p className="text-sm text-muted-foreground">152 MB of cached property data</p>
          </div>
          <Button variant="outline" size="sm">Clear Cache</Button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label>Export Data</Label>
            <p className="text-sm text-muted-foreground">Download your property research and saved data</p>
          </div>
          <Button variant="outline" size="sm">Export</Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderAdvanced = () => (
    <Card>
      <CardHeader>
        <CardTitle>Advanced</CardTitle>
        <CardDescription>Advanced settings and developer options</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="debug-mode">Debug Mode</Label>
            <p className="text-sm text-muted-foreground">Enable detailed logging and debugging features</p>
          </div>
          <Switch id="debug-mode" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label>Reset Settings</Label>
            <p className="text-sm text-muted-foreground">Reset all settings to default values</p>
          </div>
          <Button variant="outline" size="sm">Reset</Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'notifications':
        return renderNotifications();
      case 'appearance':
        return renderAppearance();
      case 'map':
        return renderMapPreferences();
      case 'privacy':
        return renderPrivacy();
      case 'data':
        return renderDataStorage();
      case 'advanced':
        return renderAdvanced();
      default:
        return renderNotifications();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and application settings</p>
        </div>

        <div className="flex gap-8">
          {/* Left Navigation */}
          <div className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              {settingSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                    activeSection === section.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <div className="font-medium">{section.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{section.description}</div>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;