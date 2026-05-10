import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageSeo } from "@/components/seo/PageSeo";

const SITE_URL = "https://sambhajinagar-explorer.replit.app";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact`,
  "name": "Contact Sambhajinagar Explorer — Book a Tour",
  "description": "Contact Sambhajinagar Explorer to book tours to Ajanta Caves, Ellora Caves, Bibi Ka Maqbara, and 12 more destinations in Chhatrapati Sambhajinagar. Pickup from Mumbai and Pune.",
  "url": `${SITE_URL}/contact`,
  "mainEntity": {
    "@id": `${SITE_URL}/#business`
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Contact & Booking", "item": `${SITE_URL}/contact` }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <PageSeo
        title="Contact & Book a Tour in Chhatrapati Sambhajinagar"
        description="Book your Chhatrapati Sambhajinagar heritage tour today. Contact Sambhajinagar Explorer for guided tours to Ajanta Caves, Ellora Caves, Bibi Ka Maqbara, Daulatabad Fort and more. Pickup from Mumbai & Pune. Call +91-9923322790."
        canonicalPath="/contact"
        keywords="book Aurangabad tour, contact Sambhajinagar Explorer, Ajanta Ellora tour booking, Aurangabad guided tour, heritage tour inquiry Maharashtra, Mumbai Aurangabad tour booking, Pune Aurangabad tour package"
        schema={contactSchema}
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
                  <span itemProp="name" className="text-foreground font-medium">Contact &amp; Booking</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">Contact &amp; Booking</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ready to explore the wonders of Chhatrapati Sambhajinagar? Send us your requirements, and our team will craft the perfect heritage itinerary for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">

            <aside className="lg:col-span-1 space-y-12" itemScope itemType="https://schema.org/TouristInformationCenter">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <a
                        href="tel:+919923322790"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                        itemProp="telephone"
                        data-testid="link-phone"
                      >
                        +91-9923322790
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <a
                        href="mailto:hello@sambhajinagar-explorer.replit.app"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                        itemProp="email"
                        data-testid="link-email"
                      >
                        hello@sambhajinagar-explorer.replit.app
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div itemScope itemType="https://schema.org/PostalAddress">
                      <h3 className="font-bold text-lg mb-1">Office</h3>
                      <p className="text-muted-foreground" itemProp="streetAddress">Station Road, Near Central Bus Stand,</p>
                      <p className="text-muted-foreground">
                        <span itemProp="addressLocality">Chhatrapati Sambhajinagar</span>,
                        <span itemProp="addressRegion"> Maharashtra</span>
                        <span itemProp="postalCode"> 431001</span>
                      </p>
                      <meta itemProp="addressCountry" content="IN" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-lg">Business Hours</h3>
                </div>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Mon – Sat</dt>
                    <dd className="font-medium">9:00 AM – 8:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Sunday</dt>
                    <dd className="font-medium">10:00 AM – 5:00 PM</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="font-bold text-lg mb-3">We Cover</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Ajanta &amp; Ellora Caves (UNESCO)</li>
                  <li>Bibi Ka Maqbara</li>
                  <li>Daulatabad Fort</li>
                  <li>Grishneshwar Jyotirlinga</li>
                  <li>Panchakki, Aurangabad Caves</li>
                  <li>Mhaismal, Jayakwadi Dam</li>
                  <li>Khuldabad, Salim Ali Lake</li>
                  <li>+ 6 more destinations</li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-2">
              <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold mb-8 text-foreground">Send an Inquiry</h2>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
