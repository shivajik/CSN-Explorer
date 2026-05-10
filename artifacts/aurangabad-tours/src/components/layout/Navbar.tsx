import { Link, useLocation } from "wouter";
import { Compass, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages the navbar always appears solid (no dark hero beneath it)
  const solidNav = !isHome || isScrolled;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tours", label: "Tours & Places" },
    { href: "/transport", label: "Transport" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        solidNav
          ? "bg-background/95 backdrop-blur-sm border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" data-testid="nav-logo">
            <Compass className={cn("w-8 h-8 transition-colors", solidNav ? "text-primary" : "text-primary md:text-white")} />
            <span className={cn("font-serif font-bold text-xl tracking-tight transition-colors", solidNav ? "text-foreground" : "text-foreground md:text-white")}>
              Sambhajinagar Explorer
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                  location === link.href
                    ? "text-primary after:scale-x-100"
                    : solidNav ? "text-foreground/80" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2", solidNav ? "text-foreground" : "text-primary")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-3 text-base font-medium transition-colors hover:bg-accent/50 hover:text-primary",
                  location === link.href ? "text-primary bg-accent/20" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
