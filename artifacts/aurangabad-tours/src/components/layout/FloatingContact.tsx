import { MessageSquare } from "lucide-react";
import { Link } from "wouter";

export function FloatingContact() {
  return (
    <Link 
      href="/contact"
      data-testid="floating-contact-btn"
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium ml-0 group-hover:ml-2">
        Book Now
      </span>
    </Link>
  );
}
