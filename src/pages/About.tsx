import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";
import aboutImage from "@/assets/about-philosophy.jpg";

const About = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest professional standards in every treatment, interaction, and detail of our sanctuary experience"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building meaningful, lasting relationships with our guests, practitioners, and the wider wellness community we serve"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Approaching wellness with deep empathy, genuine care, and a profound understanding of each individual's unique journey"
    }
  ];

  const team = [
    {
      name: "Dr. Elena Winters",
      role: "Founder & Wellness Director",
      bio: "20+ years in holistic medicine and spa therapy",
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Chen",
      role: "Lead Massage Therapist",
      bio: "Certified in 8 therapeutic modalities",
      image: "/placeholder.svg"
    },
    {
      name: "Sophia Ramirez",
      role: "Esthetician & Skincare Specialist",
      bio: "Expert in botanical and organic skincare",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up max-w-3xl mx-auto">
            A decade-long commitment to holistic wellness, deeply rooted in nature and passionately 
            dedicated to transformation and lasting well-being
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium order-2 md:order-1">
              <img 
                src={aboutImage}
                alt="Professional spa therapist performing therapeutic massage with natural oils"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed order-1 md:order-2">
              <p>
                The Solstice Sanctuary was born from a simple yet profound belief: that true wellness 
                emerges when we honor the deep, intrinsic connection between mind, body, and spirit. 
                Founded in 2015 by Dr. Elena Winters, a renowned holistic medicine practitioner, our 
                retreat has evolved into a haven for those seeking genuine respite from the relentless 
                demands of modern life.
              </p>
              <p>
                What began as a small, intimate wellness practice has blossomed into a comprehensive 
                sanctuary, offering an extensive menu of treatments that thoughtfully blend time-honored 
                healing traditions with cutting-edge contemporary techniques. Every service we provide 
                is firmly grounded in evidence-based practices and delivered with the highest level of 
                professional care and personal attention.
              </p>
              <p>
                We believe deeply in sustainability and environmental stewardship, sourcing certified 
                organic and locally-produced products whenever possible. Our commitment extends far 
                beyond the treatment room—we're passionately dedicated to creating a lasting positive 
                impact on our local community and the environment we all share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-semibold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-card rounded-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-semibold text-center mb-4">Meet Our Practitioners</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Our team of highly trained, internationally certified professionals brings expertise, passion, 
            and genuine care to every session, creating transformative wellness experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-6 mx-auto max-w-xs shadow-medium">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-semibold mb-6">
            Experience Our Care
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us and discover what makes The Solstice Sanctuary a truly transformative wellness destination
          </p>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Your First Visit
          </Button>
        </div>
      </section>

      <Footer />
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default About;
