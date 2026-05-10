import { useParams, Link } from "wouter";
import { getTourById } from "@/data/tours";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Clock, Star, Tag, ChevronRight, Map, Home } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/seo/PageSeo";

const SITE_URL = "https://sambhajinagar-explorer.replit.app";

const categoryMap: Record<string, string> = {
  cave: "UNESCO cave monument",
  fort: "historical fort",
  temple: "sacred temple",
  mausoleum: "Mughal mausoleum",
  monument: "heritage monument",
  garden: "botanical garden",
  lake: "natural lake",
  hill: "hill station",
};

export default function TourDetail() {
  const { id } = useParams<{ id: string }>();
  const tour = getTourById(Number(id));

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-serif font-bold text-muted-foreground">Tour not found</h1>
      </div>
    );
  }

  const categoryLabel = categoryMap[tour.category] || tour.category;

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": `${SITE_URL}/tours/${tour.id}`,
    "name": tour.name,
    "description": tour.description,
    "url": `${SITE_URL}/tours/${tour.id}`,
    "image": tour.imageUrl,
    "touristType": ["Cultural Tourism", "Heritage Tourism", "Religious Tourism"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": tour.location,
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    ...(tour.rating ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": tour.rating,
        "bestRating": 5,
        "worstRating": 1,
        "ratingCount": 100
      }
    } : {}),
    "isAccessibleForFree": tour.price === 0 || tour.price === null,
    "publicAccess": true,
    "availableLanguage": ["English", "Hindi", "Marathi"],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Tours & Places", "item": `${SITE_URL}/tours` },
        { "@type": "ListItem", "position": 3, "name": tour.name, "item": `${SITE_URL}/tours/${tour.id}` }
      ]
    }
  };

  return (
    <>
      <PageSeo
        title={`${tour.name} — ${categoryLabel} in ${tour.location}`}
        description={`${tour.description.slice(0, 155)}...`}
        canonicalPath={`/tours/${tour.id}`}
        image={tour.imageUrl}
        imageAlt={`${tour.name} — ${tour.location}, Maharashtra`}
        type="article"
        keywords={`${tour.name}, ${tour.location} tourism, ${tour.category} Chhatrapati Sambhajinagar, Aurangabad ${tour.name}, visit ${tour.name} Maharashtra`}
        schema={tourSchema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative h-[60vh] min-h-[500px] w-full">
          <img
            src={tour.imageUrl}
            alt={`${tour.name} — ${tour.location}, Maharashtra, India`}
            className="w-full h-full object-cover"
            width="1200"
            height="700"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" aria-hidden="true" />

          <div className="absolute bottom-0 w-full">
            <div className="container mx-auto px-4 md:px-6 pb-12">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-2 text-sm text-white/70">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                      <Home className="w-3 h-3" aria-hidden="true" />Home
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/40">/</li>
                  <li><Link href="/tours" className="hover:text-white transition-colors">Tours</Link></li>
                  <li aria-hidden="true" className="text-white/40">/</li>
                  <li className="text-white/90 font-medium" aria-current="page">{tour.name}</li>
                </ol>
              </nav>

              <div className="flex gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium capitalize">
                  <Tag className="w-4 h-4" aria-hidden="true" />
                  {tour.category}
                </span>
                {tour.rating && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur text-white text-sm font-medium">
                    <Star className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
                    <span aria-label={`Rating: ${tour.rating.toFixed(1)} out of 5`}>{tour.rating.toFixed(1)}</span>
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
                {tour.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span>{tour.duration}</span>
                </div>
                {tour.price !== null && tour.price !== undefined && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{tour.price === 0 ? "Free Entry" : `From ₹${tour.price}`}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            <article className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">About {tour.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {tour.description}
                </p>
              </section>

              {tour.highlights.length > 0 && (
                <section>
                  <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Highlights</h2>
                  <ul className="grid sm:grid-cols-2 gap-4" aria-label={`Highlights of ${tour.name}`}>
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                          <ChevronRight className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Quick Info */}
              <section>
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Visitor Information</h2>
                <dl className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-card p-5 rounded-xl border border-border/50">
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Location</dt>
                    <dd className="text-foreground font-semibold">{tour.location}</dd>
                  </div>
                  <div className="bg-card p-5 rounded-xl border border-border/50">
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Suggested Duration</dt>
                    <dd className="text-foreground font-semibold">{tour.duration}</dd>
                  </div>
                  <div className="bg-card p-5 rounded-xl border border-border/50">
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Category</dt>
                    <dd className="text-foreground font-semibold capitalize">{categoryLabel}</dd>
                  </div>
                  <div className="bg-card p-5 rounded-xl border border-border/50">
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Entry</dt>
                    <dd className="text-foreground font-semibold">
                      {tour.price === 0 || tour.price === null ? "Free" : `From ₹${tour.price}`}
                    </dd>
                  </div>
                </dl>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 bg-card border border-border p-8 rounded-2xl shadow-xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Map className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">Plan Your Visit</h3>
                <p className="text-muted-foreground mb-8">
                  Ready to explore {tour.name}? Get in touch to arrange transport, guides, and customized itineraries from Mumbai or Pune.
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full text-lg h-14 rounded-xl mb-4" data-testid="btn-book-tour">
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

                <p className="text-center text-sm text-muted-foreground">
                  Call us: <a href="tel:+919923322790" className="text-primary font-semibold hover:underline">+91-9923322790</a>
                </p>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
