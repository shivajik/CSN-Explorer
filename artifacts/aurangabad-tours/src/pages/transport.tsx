import { useListTransportOptions } from "@workspace/api-client-react";
import { Car, MapPin, Users, IndianRupee, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function TransportPage() {
  const { data: transportOptions = [], isLoading } = useListTransportOptions();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">Transport Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Comfortable, reliable, and premium transportation from major cities directly to your historical destinations in Aurangabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
              <Car className="text-primary w-8 h-8" />
              Available Routes & Vehicles
            </h2>

            {isLoading ? (
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-48 bg-muted/50 animate-pulse rounded-2xl" />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {transportOptions.map((option) => (
                  <Card key={option.id} className="overflow-hidden border-border/50 hover:shadow-lg transition-all" data-testid={`transport-card-${option.id}`}>
                    <CardHeader className="bg-muted/30 border-b border-border/30 pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-primary" />
                          <CardTitle className="text-xl font-serif">
                            {option.from} <ArrowRight className="inline-block w-4 h-4 mx-2 text-muted-foreground" /> {option.to}
                          </CardTitle>
                        </div>
                        <Badge variant="secondary" className="w-fit text-base px-4 py-1 font-medium bg-background text-foreground shadow-sm">
                          {option.vehicleType}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-6">
                        {option.description || `Premium travel from ${option.from} to ${option.to} via ${option.vehicleType}.`}
                      </p>
                      
                      <div className="flex flex-wrap gap-x-8 gap-y-4">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Clock className="w-5 h-5 text-primary" />
                          <span>{option.duration} Approx</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Users className="w-5 h-5 text-primary" />
                          <span>Upto {option.capacity} Passengers</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <IndianRupee className="w-5 h-5 text-primary" />
                          <span>₹{option.pricePerPerson} / person</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 sticky top-32">
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Need Custom Transport?</h3>
              <p className="text-muted-foreground mb-8">
                We also offer local sightseeing vehicles within Aurangabad, multi-day transport, and large group bookings. Get in touch to customize your travel.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Experienced local drivers
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Well-maintained AC vehicles
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Flexible pickup points
                </li>
              </ul>
              
              <Link href="/contact">
                <Button size="lg" className="w-full text-lg h-14" data-testid="btn-book-transport">
                  Book Transport
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
