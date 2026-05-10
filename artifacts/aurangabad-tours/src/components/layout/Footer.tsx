import { Link } from "wouter";
import { Compass, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Compass className="w-8 h-8 text-primary" />
              <span className="font-serif font-bold text-xl tracking-tight">
                Sambhajinagar Explorer
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your premium guide to the historical capital of Maharashtra. Discover UNESCO heritage sites, ancient caves, and majestic forts with our curated experiences.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary transition-colors">
                  All Tourist Places
                </Link>
              </li>
              <li>
                <Link href="/transport" className="text-muted-foreground hover:text-primary transition-colors">
                  Transport Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Popular Categories</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/tours" className="hover:text-primary transition-colors">Ancient Caves</Link></li>
              <li><Link href="/tours" className="hover:text-primary transition-colors">Historical Forts</Link></li>
              <li><Link href="/tours" className="hover:text-primary transition-colors">Spiritual Temples</Link></li>
              <li><Link href="/tours" className="hover:text-primary transition-colors">Mughal Monuments</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Station Road, Near Central Bus Stand, Chhatrapati Sambhajinagar, Maharashtra 431001</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91-9923322790</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@aurangabadexplorer.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Sambhajinagar Explorer. All rights reserved.</p>
          <p>Crafted with intention for premium travelers.</p>
        </div>
      </div>
    </footer>
  );
}
