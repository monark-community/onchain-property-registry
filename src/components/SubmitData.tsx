
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const SubmitData = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Data Submitted Successfully",
        description: "Your property update has been recorded on the blockchain.",
      });
    }, 2000);
  };

  return (
    <div className="py-16 bg-white" id="submit">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Submit Property Data
          </h2>
          <p className="text-lg text-gray-600">
            Update property records and contribute to the community registry
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Property Information Update</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input 
                    id="address" 
                    placeholder="123 Main Street"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="constructionYear">Construction Year</Label>
                  <Input 
                    id="constructionYear" 
                    type="number"
                    placeholder="1985"
                    required 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="zoning">Zoning Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select zoning type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="mixed">Mixed Use</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="updateType">Update Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select update type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">New Construction</SelectItem>
                      <SelectItem value="renovation">Renovation</SelectItem>
                      <SelectItem value="zoning">Zoning Change</SelectItem>
                      <SelectItem value="demolition">Demolition</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Update Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe the changes or updates to this property..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Your Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="citizen">Citizen</SelectItem>
                    <SelectItem value="homeowner">Property Owner</SelectItem>
                    <SelectItem value="official">City Official</SelectItem>
                    <SelectItem value="inspector">Inspector</SelectItem>
                    <SelectItem value="contractor">Contractor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting to Blockchain..." : "Submit Update"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubmitData;
