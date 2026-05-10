import { Link } from "wouter";
import { ArrowRight, MapPin, Navigation, Car, Star, ChevronDown } from "lucide-react";
import { useListFeaturedTours } from "@workspace/api-client-react";
import { TourCard } from "@/components/tours/TourCard";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/seo/PageSeo";
import { useState } from "react";

const SITE_URL = "https://sambhajinagar-explorer.replit.app";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best tourist places in Chhatrapati Sambhajinagar (Aurangabad)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best tourist places in Chhatrapati Sambhajinagar include the UNESCO World Heritage Sites of Ajanta Caves and Ellora Caves, the Mughal monument Bibi Ka Maqbara (Taj of the Deccan), the 900-year-old Daulatabad Fort, the sacred Grishneshwar Jyotirlinga Temple, Panchakki (a 17th-century water mill), Aurangabad Caves, Jayakwadi Dam, Mhaismal Hill Station, Siddharth Garden, Khuldabad (Valley of Saints), Salim Ali Lake, Goga Baba Hill, Bhadra Maruti Temple, and Soneri Mahal."
      }
    },
    {
      "@type": "Question",
      "name": "How to travel from Mumbai to Chhatrapati Sambhajinagar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mumbai to Chhatrapati Sambhajinagar (Aurangabad) is approximately 335 km. The fastest route is via the Samruddhi Mahamarg Expressway, which takes about 5 to 6 hours by road. Sambhajinagar Explorer offers sedan, SUV, Tempo Traveller, and luxury coach pickup services from Mumbai starting at ₹750 per person. You can also reach by train (Devagiri Express) or flight to Aurangabad Airport."
      }
    },
    {
      "@type": "Question",
      "name": "How to travel from Pune to Chhatrapati Sambhajinagar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pune to Chhatrapati Sambhajinagar (Aurangabad) is approximately 235 km via NH-65 through Ahmednagar, taking 4 to 5 hours by road. Sambhajinagar Explorer provides comfortable sedan, SUV, and Tempo Traveller pickup services from Pune starting at ₹750 per person."
      }
    },
    {
      "@type": "Question",
      "name": "Are Ajanta and Ellora Caves UNESCO World Heritage Sites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both Ajanta Caves (designated in 1983) and Ellora Caves (designated in 1983) are UNESCO World Heritage Sites. Ajanta Caves consist of 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to 480 CE, famous for their exquisite paintings. Ellora Caves contain 34 monasteries and temples representing Buddhist, Hindu, and Jain faiths, carved between the 6th and 11th centuries. The Kailasa Temple (Cave 16) at Ellora is one of the largest rock-cut temples in the world."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Chhatrapati Sambhajinagar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best time to visit Chhatrapati Sambhajinagar (Aurangabad) is from October to March when the weather is pleasant and cool, with temperatures ranging from 10°C to 28°C. Monsoon season (June to September) brings lush greenery and is ideal for visiting Mhaismal Hill Station and Jayakwadi Dam. Avoid the peak summer months of April and May when temperatures can exceed 40°C."
      }
    },
    {
      "@type": "Question",
      "name": "How far are Ajanta Caves from Aurangabad city?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ajanta Caves are located approximately 105 km from Chhatrapati Sambhajinagar (Aurangabad) city and take about 2.5 to 3 hours to reach by road. Ellora Caves are much closer, only about 30 km from the city, taking around 45 minutes. Sambhajinagar Explorer offers full-day and half-day tour packages covering both sites."
      }
    },
    {
      "@type": "Question",
      "name": "What is Bibi Ka Maqbara?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bibi Ka Maqbara, often called the 'Taj of the Deccan' or 'Poor Man's Taj', is a Mughal mausoleum built in 1678 CE by Prince Azam Shah in memory of his mother, Dilras Banu Begum (also known as Rabia-ud-Daurani), the wife of Emperor Aurangzeb. Located in Chhatrapati Sambhajinagar, it closely resembles the Taj Mahal in Agra in its architectural style and is the most prominent Mughal monument in the Deccan region."
      }
    }
  ]
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Tourist Attractions in Chhatrapati Sambhajinagar",
  "description": "15 must-visit heritage sites, caves, forts, temples, and natural wonders in and around Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
  "url": `${SITE_URL}/tours`,
  "numberOfItems": 15,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ajanta Caves", "url": `${SITE_URL}/tours/1`, "description": "UNESCO World Heritage Site — 30 Buddhist rock-cut caves with ancient paintings, 2nd century BCE" },
    { "@type": "ListItem", "position": 2, "name": "Ellora Caves", "url": `${SITE_URL}/tours/2`, "description": "UNESCO World Heritage Site — 34 caves representing Buddhism, Hinduism, and Jainism" },
    { "@type": "ListItem", "position": 3, "name": "Daulatabad Fort", "url": `${SITE_URL}/tours/3`, "description": "900-year-old impregnable fort atop a 200-metre hill" },
    { "@type": "ListItem", "position": 4, "name": "Bibi Ka Maqbara", "url": `${SITE_URL}/tours/4`, "description": "Mughal mausoleum — the Taj of the Deccan, built 1678 CE" },
    { "@type": "ListItem", "position": 5, "name": "Grishneshwar Temple", "url": `${SITE_URL}/tours/5`, "description": "One of the 12 sacred Jyotirlinga shrines of Lord Shiva" },
    { "@type": "ListItem", "position": 6, "name": "Panchakki", "url": `${SITE_URL}/tours/6`, "description": "17th-century water mill and Sufi heritage complex" },
    { "@type": "ListItem", "position": 7, "name": "Aurangabad Caves", "url": `${SITE_URL}/tours/7`, "description": "Ancient Buddhist rock-cut caves with Tantric art, 3rd–7th century CE" },
    { "@type": "ListItem", "position": 8, "name": "Soneri Mahal", "url": `${SITE_URL}/tours/8`, "description": "17th-century Nizam palace with golden frescoes" },
    { "@type": "ListItem", "position": 9, "name": "Siddharth Garden", "url": `${SITE_URL}/tours/9`, "description": "21-acre city garden and zoo with musical fountain" },
    { "@type": "ListItem", "position": 10, "name": "Jayakwadi Dam", "url": `${SITE_URL}/tours/10`, "description": "Largest dam in Maharashtra on the Godavari River" },
    { "@type": "ListItem", "position": 11, "name": "Mhaismal Hill Station", "url": `${SITE_URL}/tours/11`, "description": "Scenic hill station at 900m altitude with Sahyadri views" },
    { "@type": "ListItem", "position": 12, "name": "Bhadra Maruti Temple", "url": `${SITE_URL}/tours/12`, "description": "Rare reclining Hanuman temple — one of only 3 in India" },
    { "@type": "ListItem", "position": 13, "name": "Goga Baba Hill", "url": `${SITE_URL}/tours/13`, "description": "Panoramic hilltop with 360-degree city views and Sufi dargah" },
    { "@type": "ListItem", "position": 14, "name": "Salim Ali Lake", "url": `${SITE_URL}/tours/14`, "description": "Migratory bird sanctuary and peaceful lakeside retreat" },
    { "@type": "ListItem", "position": 15, "name": "Khuldabad", "url": `${SITE_URL}/tours/15`, "description": "Valley of Saints — tomb of Emperor Aurangzeb and Sufi shrines" }
  ]
};

const faqs = [
  {
    q: "What are the best tourist places in Chhatrapati Sambhajinagar?",
    a: "Ajanta Caves, Ellora Caves, Bibi Ka Maqbara, Daulatabad Fort, Grishneshwar Temple, Panchakki, and 9 more iconic destinations. Both Ajanta and Ellora are UNESCO World Heritage Sites."
  },
  {
    q: "How to reach from Mumbai to Chhatrapati Sambhajinagar?",
    a: "Mumbai to Chhatrapati Sambhajinagar is approximately 335 km via Samruddhi Mahamarg Expressway — a 5 to 6 hour comfortable drive. We offer sedan, SUV, and group transport from Mumbai."
  },
  {
    q: "How to reach from Pune to Chhatrapati Sambhajinagar?",
    a: "Pune is approximately 235 km away via NH-65 through Ahmednagar — about 4 to 5 hours by road. We provide comfortable pickup and drop services from Pune."
  },
  {
    q: "What is the best time to visit?",
    a: "October to March is ideal — pleasant weather between 10°C and 28°C. Monsoon (June–September) is great for Mhaismal and Jayakwadi Dam. Avoid April–May peak summer."
  },
  {
    q: "How far are Ajanta Caves from Aurangabad city?",
    a: "Ajanta Caves are about 105 km from the city (2.5–3 hours by road). Ellora Caves are only 30 km away (45 minutes). We offer full-day tour packages covering both."
  },
  {
    q: "Is Grishneshwar Temple a Jyotirlinga?",
    a: "Yes. Grishneshwar Temple near Ellora is the 12th and last of the 12 sacred Jyotirlinga shrines of Lord Shiva in India, making it an important pilgrimage destination."
  }
];

export default function Home() {
  const { data: featuredTours, isLoading } = useListFeaturedTours();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageSeo
        title="Sambhajinagar Explorer | Tours & Travel in Chhatrapati Sambhajinagar"
        description="Explore Ajanta Caves, Ellora Caves, Bibi Ka Maqbara, Daulatabad Fort and 11 more UNESCO & heritage sites in Chhatrapati Sambhajinagar. Premium tours with pickup from Mumbai (335 km) and Pune (235 km). Call +91-9923322790."
        canonicalPath="/"
        keywords="Chhatrapati Sambhajinagar tours, Aurangabad tourist places, Ajanta Caves, Ellora Caves, Bibi Ka Maqbara, Daulatabad Fort, Mumbai to Aurangabad tour, Pune to Aurangabad cab, heritage tourism Maharashtra"
        schema={[homeSchema, homeFaqSchema]}
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden" aria-label="Hero">
          <div className="absolute inset-0 bg-black">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/The_Tomb_of_Dilras_Banu_Begum.jpg"
              alt="Bibi Ka Maqbara - Taj of the Deccan, Chhatrapati Sambhajinagar"
              className="w-full h-full object-cover opacity-60 animate-in fade-in duration-1000"
              width="1200"
              height="800"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-background/95" />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <div className="animate-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                Discover the <span className="text-primary italic">Soul</span> of Ancient India
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Experience the majestic Ajanta &amp; Ellora caves, Mughal monuments, and timeless heritage of Chhatrapati Sambhajinagar with our premium tours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/tours">
                  <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full font-medium" data-testid="btn-explore-tours">
                    Explore Destinations <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
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
        <section className="py-24 bg-background" aria-label="Featured tours">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">Featured Experiences</h2>
              <p className="text-muted-foreground text-lg">
                Curated journeys through time, from UNESCO World Heritage sites to legendary forts and sacred Jyotirlinga temples in Chhatrapati Sambhajinagar.
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-xl bg-muted/50 animate-pulse h-[400px]" aria-hidden="true" />
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
                  View All 15 Destinations
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Connectivity / Transport Preview */}
        <section className="py-24 bg-card relative overflow-hidden" aria-label="Transport from Mumbai and Pune">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} aria-hidden="true" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                  Seamless Connectivity to History
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer premium pickup and drop services directly from Mumbai and Pune to Chhatrapati Sambhajinagar. Travel comfortably via the Samruddhi Mahamarg Expressway.
                </p>

                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl mb-1">Mumbai to Chhatrapati Sambhajinagar</h3>
                      <p className="text-muted-foreground">Approx. 335 km | Fast travel via Samruddhi Expressway</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Navigation className="w-6 h-6 text-primary" aria-hidden="true" />
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
                      <Car className="mr-2 w-5 h-5" aria-hidden="true" /> View Transport Options
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/00/Daulatabad_Fort.jpg"
                    alt="Daulatabad Fort - 900-year-old historical fort near Chhatrapati Sambhajinagar"
                    className="w-full h-full object-cover"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-2xl shadow-xl border border-border max-w-xs">
                  <div className="flex items-center gap-2 mb-2" aria-label="5 star rating" role="img">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="font-medium text-foreground italic">"Exceptional service! The pickup from Mumbai was punctual and the tour was magical."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section — AEO & GEO */}
        <section className="py-24 bg-background" aria-label="Frequently asked questions">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about touring Chhatrapati Sambhajinagar
              </p>
            </div>

            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-border rounded-2xl overflow-hidden"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    data-testid={`faq-question-${i}`}
                  >
                    <span className="font-serif font-semibold text-lg text-foreground pr-4" itemProp="name">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {openFaq === i && (
                    <div
                      className="px-6 pb-6 text-muted-foreground leading-relaxed"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
