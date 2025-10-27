import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, duration, image, link }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift bg-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <Link to={link}>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
