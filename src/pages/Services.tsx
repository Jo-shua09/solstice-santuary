import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";
import { services } from "@/data/services";

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const categories = Object.keys(servicesByCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground animate-slide-up max-w-3xl mx-auto">
            Discover our curated collection of restorative treatments and transformative wellness experiences, each designed to nurture your mind,
            body, and spirit in our tranquil sanctuary
          </p>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((categoryName, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 md:px-6 ${categoryIndex % 2 === 1 ? "bg-secondary" : ""}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-center">{categoryName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesByCategory[categoryName].map((service, serviceIndex) => (
                <ServiceCard
                  key={serviceIndex}
                  title={service.title}
                  description={service.description}
                  duration={service.duration}
                  image={service.image}
                  link={`/services/${service.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-semibold mb-6">Ready to Experience Tranquility?</h2>
          <p className="text-xl mb-8 opacity-90">Book your personalized wellness journey today and experience the difference expert care makes</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setIsBookingOpen(true)}>
            Schedule Your Visit
          </Button>
        </div>
      </section>

      <Footer />
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Services;
