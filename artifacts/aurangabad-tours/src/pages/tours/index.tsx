import { useState, useMemo } from "react";
import { useListTours } from "@workspace/api-client-react";
import { TourCard } from "@/components/tours/TourCard";
import { Button } from "@/components/ui/button";

export default function ToursPage() {
  const { data: tours = [], isLoading } = useListTours();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set(tours.map(t => t.category));
    return ["All", ...Array.from(cats)].sort();
  }, [tours]);

  const filteredTours = useMemo(() => {
    if (activeCategory === "All") return tours;
    return tours.filter(t => t.category === activeCategory);
  }, [tours, activeCategory]);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">Destinations & Places</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Explore the rich tapestry of Chhatrapati Sambhajinagar. From ancient rock-cut caves to majestic forts and spiritual centers, discover 15 incredible places that define this historic region.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
              data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl bg-muted/50 animate-pulse h-[400px]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}

        {!isLoading && filteredTours.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif font-medium text-muted-foreground">No places found for this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
