import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SecondaryNavProps {
  title: string;
  showBackButton?: boolean;
}

const SecondaryNav = ({ title, showBackButton = true }: SecondaryNavProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-background border-b h-12 flex items-center px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button variant="ghost" size="sm" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        )}
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>
    </div>
  );
};

export default SecondaryNav;