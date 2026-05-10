import { Link } from "wouter";
import { ArrowRight, MapPin, Navigation, Car, Star } from "lucide-react";
import { useListFeaturedTours } from "@workspace/api-client-react";
import { TourCard } from "@/components/tours/TourCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: featuredTours, isLoading } = useListFeaturedTours();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/The_Tomb_of_Dilras_Banu_Begum.jpg"
            alt="Bibi Ka Maqbara - Taj of the Deccan"
            className="w-full h-full object-cover opacity-60 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-background/95" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="animate-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Discover the <span className="text-primary italic">Soul</span> of Ancient India
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the majestic Ajanta & Ellora caves, Mughal monuments, and timeless heritage of Chhatrapati Sambhajinagar with our premium tours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tours">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full font-medium" data-testid="btn-explore-tours">
                  Explore Destinations <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 hover:text-white" data-testid="btn-plan-trip">
                  Plan Your Trip
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">Featured Experiences</h2>
            <p className="text-muted-foreground text-lg">
              Curated journeys through time, from UNESCO World Heritage sites to legendary forts.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-muted/50 animate-pulse h-[400px]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours?.slice(0, 6).map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          )}
          
          <div className="mt-16 text-center">
            <Link href="/tours">
              <Button variant="outline" size="lg" className="rounded-full px-8" data-testid="btn-view-all-tours">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Connectivity / Transport Preview */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Seamless Connectivity to History
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer premium pickup and drop services directly from Mumbai and Pune. Travel comfortably via the Samruddhi Mahamarg expressway.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1">Mumbai to Chhatrapati Sambhajinagar</h3>
                    <p className="text-muted-foreground">Approx. 335 km | Fast travel via Samruddhi Expressway</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1">Pune to Chhatrapati Sambhajinagar</h3>
                    <p className="text-muted-foreground">Approx. 235 km | Scenic route through Ahmednagar</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Link href="/transport">
                  <Button size="lg" className="rounded-full" data-testid="btn-view-transport">
                    <Car className="mr-2 w-5 h-5" /> View Transport Options
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/00/Daulatabad_Fort.jpg" 
                  alt="Daulatabad Fort" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-2xl shadow-xl border border-border max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <Star className="w-5 h-5 fill-primary text-primary" />
                </div>
                <p className="font-medium text-foreground italic">"Exceptional service! The pickup from Mumbai was punctual and the tour was magical."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
