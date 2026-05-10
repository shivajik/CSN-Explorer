import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">Contact & Booking</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ready to explore the wonders of Chhatrapati Sambhajinagar? Send us your requirements, and our team will craft the perfect itinerary for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91-9923322790</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@aurangabadexplorer.com</p>
                    <p className="text-muted-foreground">bookings@aurangabadexplorer.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office</h4>
                    <p className="text-muted-foreground">Station Road, Near Central Bus Stand, Chhatrapati Sambhajinagar, Maharashtra 431001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Business Hours</h4>
              <p className="text-muted-foreground mb-1">Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-foreground">Send an Inquiry</h2>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
