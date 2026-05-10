import { Link } from "wouter";
import { MapPin, Clock, Star } from "lucide-react";
import type { Tour } from "@/data/tours";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Link href={`/tours/${tour.id}`} data-testid={`tour-card-${tour.id}`}>
      <Card className="group overflow-hidden h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card hover:-translate-y-1 cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={tour.imageUrl || "/images/placeholder.png"} 
            alt={tour.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur text-foreground font-medium border-none shadow-sm">
              {tour.category}
            </Badge>
            {tour.featured && (
              <Badge className="bg-primary text-primary-foreground font-medium border-none shadow-sm">
                Featured
              </Badge>
            )}
          </div>
          
          {tour.rating && (
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur px-2.5 py-1 rounded-full shadow-sm text-sm font-medium">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span>{tour.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {tour.name}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {tour.description}
          </p>
          
          <div className="flex items-center justify-between text-sm mt-auto pt-4 border-t border-border/50">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary/80" />
              <span className="truncate max-w-[120px]">{tour.location}</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-muted-foreground font-medium">
              <Clock className="w-4 h-4 text-primary/80" />
              <span>{tour.duration}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
