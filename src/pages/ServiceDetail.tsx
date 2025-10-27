import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Leaf, Sparkles } from "lucide-react";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import { services } from "@/data/services";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const service = services.find((s) => s.id === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">Service Not Found</h1>
            <p className="text-lg text-muted-foreground">The service you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-6 animate-fade-in">{service.title}</h1>
              <div className="flex items-center space-x-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5" />
                  <span>Organic ingredients</span>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{service.description}</p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setIsBookingOpen(true)}>
                Book This Treatment
              </Button>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
              <img src={service.image} alt={`${service.title} treatment`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold mb-8">What to Expect</h2>
          <div className="space-y-6 text-sm md:text-lg text-muted-foreground leading-relaxed">
            <p>{service.whatToExpect}</p>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-20 md:px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold mb-6 md:mb-8">Products & Ingredients</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
            We exclusively use certified organic, sustainably sourced, and cruelty-free ingredients of the highest quality:
          </p>
          <ul className="space-y-3 text-muted-foreground text-sm md:text-lg">
            {service.ingredients.map((ingredient, index) => (
              <li key={index}>• {ingredient}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-20 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">Ready to Book?</h2>
            <p className="text-xl text-muted-foreground mb-2">
              {service.duration} session: {service.price}
            </p>
            <p className="text-sm text-muted-foreground mb-8">Add a 30-minute botanical facial for only $60</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setIsBookingOpen(true)}>
              Reserve Your Appointment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default ServiceDetail;
