import { useState, useMemo } from "react";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/tours/TourCard";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/seo/PageSeo";

const SITE_URL = "https://sambhajinagar-explorer.replit.app";

const toursPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/tours`,
  "name": "Tourist Destinations in Chhatrapati Sambhajinagar",
  "description": "Browse all 15 tourist attractions in Chhatrapati Sambhajinagar (Aurangabad) — UNESCO caves, Mughal monuments, Jyotirlinga temples, hill stations, and more.",
  "url": `${SITE_URL}/tours`,
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Tours & Places", "item": `${SITE_URL}/tours` }
    ]
  }
};

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set(tours.map(t => t.category));
    return ["All", ...Array.from(cats)].sort();
  }, []);

  const filteredTours = useMemo(() => {
    if (activeCategory === "All") return tours;
    return tours.filter(t => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageSeo
        title="All Tourist Places in Chhatrapati Sambhajinagar (Aurangabad)"
        description="Explore 15 iconic tourist destinations in Chhatrapati Sambhajinagar — Ajanta Caves, Ellora Caves (UNESCO), Bibi Ka Maqbara, Daulatabad Fort, Grishneshwar Jyotirlinga, Mhaismal Hill Station, Jayakwadi Dam and more. Book a guided tour today."
        canonicalPath="/tours"
        keywords="tourist places in Chhatrapati Sambhajinagar, Aurangabad sightseeing, Ajanta Caves visit, Ellora Caves tour, UNESCO heritage Aurangabad, Grishneshwar Jyotirlinga, Bibi Ka Maqbara, Daulatabad Fort trek, Mhaismal hill station, Jayakwadi dam, Maharashtra heritage tourism"
        schema={toursPageSchema}
      />

      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                  <a href="/" itemProp="item" className="hover:text-primary transition-colors">
                    <span itemProp="name">Home</span>
                  </a>
                  <meta itemProp="position" content="1" />
                </li>
                <li aria-hidden="true">/</li>
                <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                  <span itemProp="name" className="text-foreground font-medium">Tours &amp; Places</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">Destinations &amp; Places</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore the rich heritage of Chhatrapati Sambhajinagar — 15 iconic destinations including two UNESCO World Heritage Sites, a sacred Jyotirlinga, Mughal monuments, ancient caves, hill stations, and tranquil lakes.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16" role="group" aria-label="Filter by category">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="rounded-full capitalize"
                onClick={() => setActiveCategory(category)}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
                aria-pressed={activeCategory === category}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label={`${activeCategory === "All" ? "All" : activeCategory} tourist places`}>
            {filteredTours.map((tour) => (
              <div key={tour.id} role="listitem">
                <TourCard tour={tour} />
              </div>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif font-medium text-muted-foreground">No places found for this category.</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
