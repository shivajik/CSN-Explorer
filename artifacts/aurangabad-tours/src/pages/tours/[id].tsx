import { useParams } from "wouter";
import { useGetTour } from "@workspace/api-client-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Clock, Star, Tag, ChevronRight, Map } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function TourDetail() {
  const { id } = useParams<{ id: string }>();
  const tourId = Number(id);
  const { data: tour, isLoading } = useGetTour(tourId, {
    query: { enabled: !!tourId }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-24 container mx-auto px-4">
        <div className="w-full h-[50vh] bg-muted/50 animate-pulse rounded-2xl mb-12" />
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="h-12 w-2/3 bg-muted/50 animate-pulse rounded-lg" />
          <div className="h-6 w-1/3 bg-muted/50 animate-pulse rounded-lg" />
          <div className="space-y-3 pt-8">
            <div className="h-4 w-full bg-muted/50 animate-pulse rounded" />
            <div className="h-4 w-full bg-muted/50 animate-pulse rounded" />
            <div className="h-4 w-3/4 bg-muted/50 animate-pulse rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-serif font-bold text-muted-foreground">Tour not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <img 
          src={tour.imageUrl || "/images/placeholder.png"} 
          alt={tour.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 w-full">
          <div className="container mx-auto px-4 md:px-6 pb-12">
            <div className="flex gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                <Tag className="w-4 h-4" />
                <span className="capitalize">{tour.category}</span>
              </span>
              {tour.rating && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur text-white text-sm font-medium">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  {tour.rating.toFixed(1)}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
              {tour.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>{tour.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">About the Place</h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {tour.description}
              </p>
            </section>

            {tour.highlights && tour.highlights.length > 0 && (
              <section>
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ChevronRight className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-card border border-border p-8 rounded-2xl shadow-xl">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Map className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">Plan Your Visit</h3>
              <p className="text-muted-foreground mb-8">
                Ready to explore {tour.name}? Get in touch to arrange transport, guides, and customized itineraries.
              </p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full text-lg h-14 rounded-xl" data-testid="btn-book-tour">
                    Get in Touch for this Tour
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif">Inquire about {tour.name}</DialogTitle>
                  </DialogHeader>
                  <div className="pt-6">
                    <ContactForm defaultTourId={tour.id} defaultTourName={tour.name} />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
