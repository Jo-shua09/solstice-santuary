import { Button } from "@/components/ui/button";
import { Sparkles, Leaf, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/hero-spa.jpg";
import massageImage from "@/assets/massage-therapy.jpg";

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const amenities = [
    {
      icon: Sparkles,
      title: "Signature Treatments",
      description: "Exclusive therapies designed to restore balance and vitality"
    },
    {
      icon: Leaf,
      title: "Natural Elements",
      description: "Organic products and sustainable practices in harmony with nature"
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "A comprehensive approach to mind, body, and spirit rejuvenation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Serene spa environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            The Solstice Sanctuary
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-light">
            Where tranquility meets transformation
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Your Escape
          </Button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-foreground animate-slide-up">
            Welcome to Serenity
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-slide-up">
            At The Solstice Sanctuary, we believe in the transformative power of holistic wellness. Nestled in a 
            serene natural setting, our exclusive retreat offers a peaceful escape from the demands of modern life. 
            Every treatment is thoughtfully designed and tailored to nurture your complete well-being—mind, body, 
            and spirit.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up">
            Experience the art of relaxation in our carefully curated sanctuary, where natural beauty harmonizes 
            with modern luxury. Our expert practitioners blend ancient healing traditions with cutting-edge wellness 
            techniques, using only the finest organic and sustainably sourced products. Each visit is a journey 
            toward balance, rejuvenation, and inner peace.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-semibold text-center mb-16">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-card rounded-2xl hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <amenity.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">{amenity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-semibold mb-6">Signature Tranquility Massage</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our most sought-after treatment is a transformative 90-minute journey that combines ancient 
                healing techniques with modern therapeutic approaches. This luxurious experience begins with 
                warm volcanic stones placed along your spine to release deep-seated tension and promote energy flow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our master therapists use a carefully curated blend of aromatic essential oils—including 
                lavender, bergamot, and ylang-ylang—while applying gentle acupressure to key meridian points. 
                The treatment incorporates Swedish massage techniques, myofascial release, and energy balancing 
                to address both physical tension and energetic blockages.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Each session concludes with a calming scalp massage and warm herbal tea, leaving you in a state 
                of profound relaxation and inner peace. Many guests report improved sleep, reduced stress, and a 
                renewed sense of vitality that lasts for weeks.
              </p>
              <Link to="/services/signature-massage">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mr-4">
                  Discover More
                </Button>
              </Link>
              <Button 
                variant="outline"
                onClick={() => setIsBookingOpen(true)}
              >
                Book Now
              </Button>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={massageImage}
                alt="Luxury spa massage therapy room with warm stones and natural elements"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Begin Your Wellness Journey
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reserve your sanctuary experience today and discover the art of complete relaxation.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Now
          </Button>
        </div>
      </section>

      <Footer />
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Home;
