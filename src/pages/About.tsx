import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every treatment and interaction"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our guests and practitioners"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Approaching wellness with empathy, care, and understanding"
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
          <p className="text-xl text-muted-foreground animate-slide-up">
            A commitment to holistic wellness, rooted in nature and dedicated to transformation
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The Solstice Sanctuary was born from a simple yet profound belief: that true wellness 
              emerges when we honor the deep connection between mind, body, and spirit. Founded in 2015 
              by Dr. Elena Winters, our retreat has become a haven for those seeking respite from the 
              demands of modern life.
            </p>
            <p>
              What began as a small wellness practice has blossomed into a comprehensive sanctuary, 
              offering an extensive menu of treatments that blend time-honored traditions with 
              contemporary techniques. Every service we provide is grounded in evidence-based practices 
              and delivered with the highest level of care.
            </p>
            <p>
              We believe in sustainability, sourcing organic and locally-produced products whenever 
              possible. Our commitment extends beyond the treatment room—we're dedicated to creating 
              a positive impact on our community and the environment.
            </p>
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
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Our team of highly trained professionals brings expertise, passion, and genuine care to every session
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
            Join us and discover what makes The Solstice Sanctuary truly special
          </p>
          <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Book Your First Visit
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
