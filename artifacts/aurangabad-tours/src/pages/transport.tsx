import { transportOptions } from "@/data/transport";
import { Car, MapPin, Users, IndianRupee, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/seo/PageSeo";

const SITE_URL = "https://sambhajinagar-explorer.replit.app";

const transportSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/transport`,
  "name": "Mumbai & Pune to Chhatrapati Sambhajinagar Transport Service",
  "description": "Premium cab and coach pickup and drop services between Mumbai, Pune, and Chhatrapati Sambhajinagar (Aurangabad). Sedan, SUV, Tempo Traveller, and Luxury Coach options available.",
  "url": `${SITE_URL}/transport`,
  "provider": { "@id": `${SITE_URL}/#business` },
  "serviceType": "Transportation",
  "areaServed": [
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Pune" },
    { "@type": "City", "name": "Chhatrapati Sambhajinagar" }
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "servicePhone": "+91-9923322790",
    "serviceUrl": `${SITE_URL}/contact`
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Transport", "item": `${SITE_URL}/transport` }
    ]
  }
};

export default function TransportPage() {
  return (
    <>
      <PageSeo
        title="Mumbai & Pune to Chhatrapati Sambhajinagar Transport — Cab & Coach Service"
        description="Book premium cab and group transport from Mumbai (335 km) and Pune (235 km) to Chhatrapati Sambhajinagar. Sedan, SUV, Tempo Traveller, and Luxury Coach available. Starting ₹750/person. Call +91-9923322790."
        canonicalPath="/transport"
        keywords="Mumbai to Aurangabad cab, Pune to Aurangabad taxi, Chhatrapati Sambhajinagar transport, Mumbai Aurangabad tour package, Pune Aurangabad cab booking, Samruddhi expressway cab, Aurangabad group transport, tempo traveller Aurangabad"
        schema={transportSchema}
      />

      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                  <a href="/" itemProp="item" className="hover:text-primary transition-colors"><span itemProp="name">Home</span></a>
                  <meta itemProp="position" content="1" />
                </li>
                <li aria-hidden="true">/</li>
                <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                  <span itemProp="name" className="text-foreground font-medium">Transport</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">Transport Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comfortable, reliable, and premium transportation from Mumbai and Pune directly to your historical destinations in Chhatrapati Sambhajinagar. Travel via the Samruddhi Mahamarg Expressway.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                <Car className="text-primary w-8 h-8" aria-hidden="true" />
                Available Routes &amp; Vehicles
              </h2>

              <div className="space-y-6">
                {transportOptions.map((option) => (
                  <Card
                    key={option.id}
                    className="overflow-hidden border-border/50 hover:shadow-lg transition-all"
                    data-testid={`transport-card-${option.id}`}
                    itemScope
                    itemType="https://schema.org/TaxiService"
                  >
                    <CardHeader className="bg-muted/30 border-b border-border/30 pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                          <CardTitle className="text-xl font-serif" itemProp="name">
                            <span itemProp="serviceArea">{option.from}</span>
                            <ArrowRight className="inline-block w-4 h-4 mx-2 text-muted-foreground" aria-hidden="true" />
                            <span>{option.to}</span>
                          </CardTitle>
                        </div>
                        <Badge variant="secondary" className="w-fit text-base px-4 py-1 font-medium bg-background text-foreground shadow-sm">
                          {option.vehicleType}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {option.description && (
                        <p className="text-muted-foreground mb-6" itemProp="description">
                          {option.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-x-8 gap-y-4">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                          <span>{option.duration} Approx</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                          <span>Upto {option.capacity} Passengers</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <IndianRupee className="w-5 h-5 text-primary" aria-hidden="true" />
                          <span itemProp="priceRange">₹{option.pricePerPerson} / person</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 sticky top-32">
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Need Custom Transport?</h3>
                <p className="text-muted-foreground mb-8">
                  We also offer local sightseeing vehicles within Chhatrapati Sambhajinagar, multi-day transport packages, and large group bookings.
                </p>

                <ul className="space-y-4 mb-8" aria-label="Transport features">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" /> Experienced local drivers
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" /> Well-maintained AC vehicles
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" /> Flexible pickup points
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" /> Via Samruddhi Mahamarg
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" /> 24/7 customer support
                  </li>
                </ul>

                <Link href="/contact">
                  <Button size="lg" className="w-full text-lg h-14 mb-4" data-testid="btn-book-transport">
                    Book Transport
                  </Button>
                </Link>
                <p className="text-center text-sm text-muted-foreground">
                  Or call: <a href="tel:+919923322790" className="text-primary font-semibold hover:underline">+91-9923322790</a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
