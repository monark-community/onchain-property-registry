import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Found out the 'brand new' deck wasn't permitted before I made an offer. Saved me $15k in potential fines.",
      author: "Sarah Chen",
      role: "First-time Home Buyer",
      initials: "SC"
    },
    {
      quote: "As a contractor, I love being able to show clients my verified work history. It's helped me win 3 new projects this month.",
      author: "Mike Rodriguez", 
      role: "Licensed Contractor",
      initials: "MR"
    },
    {
      quote: "We caught a zoning violation before listing our property. Fixed it proactively and got asking price.",
      author: "Jennifer Park",
      role: "Property Owner",
      initials: "JP"
    }
  ];

  return (
    <div className="py-16 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Real Stories from Real Users
          </h2>
          <p className="text-lg text-muted-foreground">
            See how Cadastrum helps people make better property decisions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;