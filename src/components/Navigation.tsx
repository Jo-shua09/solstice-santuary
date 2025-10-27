import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-semibold text-foreground hover:text-primary transition-colors">
            <img src="/icon-logo.png" alt="logo image" className="object-contain w-[3rem]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-primary  font-semibold" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="block md:hidden">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setIsBookingOpen(true)}>
                Book Now
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setIsBookingOpen(true)}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path) ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                onClick={() => {
                  setIsBookingOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </nav>
  );
};

export default Navigation;
