import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";
import massageImage from "@/assets/massage-therapy.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import hydrotherapyImage from "@/assets/hydrotherapy.jpg";
import bodyTreatmentImage from "@/assets/body-treatment.jpg";

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const services = [
    {
      category: "Massage Therapy",
      items: [
        {
          title: "Signature Tranquility Massage",
          description: "A harmonious blend of Swedish, deep tissue, hot stone, and aromatherapy techniques with warm volcanic stones and organic essential oils",
          duration: "90 minutes",
          image: massageImage,
          link: "/services/signature-massage"
        },
        {
          title: "Hot Stone Therapy",
          description: "Smooth heated basalt stones melt away deep-seated tension, restore energy flow, and promote profound relaxation throughout the body",
          duration: "75 minutes",
          image: massageImage,
          link: "/services/hot-stone"
        },
        {
          title: "Deep Tissue Release",
          description: "Targeted therapeutic pressure techniques to alleviate chronic muscle tension, improve mobility, and address specific pain points",
          duration: "60 minutes",
          image: massageImage,
          link: "/services/deep-tissue"
        }
      ]
    },
    {
      category: "Facial Treatments",
      items: [
        {
          title: "Botanical Glow Facial",
          description: "Organic plant-based ingredients and botanical extracts for luminous, radiant, and deeply nourished skin",
          duration: "60 minutes",
          image: facialImage,
          link: "/services/botanical-facial"
        },
        {
          title: "Age-Defying Treatment",
          description: "Advanced anti-aging techniques with peptides and antioxidants to reduce fine lines, firm skin, and restore youthful radiance",
          duration: "75 minutes",
          image: facialImage,
          link: "/services/age-defying"
        }
      ]
    },
    {
      category: "Hydrotherapy",
      items: [
        {
          title: "Mineral Soak Experience",
          description: "Therapeutic mineral-rich waters infused with essential oils to detoxify, ease muscle tension, and promote deep relaxation",
          duration: "45 minutes",
          image: hydrotherapyImage,
          link: "/services/mineral-soak"
        },
        {
          title: "Vichy Shower Ritual",
          description: "Cascading warm water therapy combined with full-body exfoliation, promoting circulation and silky-smooth skin",
          duration: "60 minutes",
          image: hydrotherapyImage,
          link: "/services/vichy-shower"
        }
      ]
    },
    {
      category: "Day Packages",
      items: [
        {
          title: "Complete Serenity Package",
          description: "Full day of holistic pampering including signature massage, facial treatment, body scrub, gourmet lunch, and unlimited relaxation lounge access",
          duration: "6 hours",
          image: bodyTreatmentImage,
          link: "/services/serenity-package"
        },
        {
          title: "Couples Retreat",
          description: "Shared sanctuary experience with side-by-side treatments, private hydrotherapy, champagne, and chocolate-dipped strawberries",
          duration: "4 hours",
          image: bodyTreatmentImage,
          link: "/services/couples-retreat"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up max-w-3xl mx-auto">
            Discover our curated collection of restorative treatments and transformative wellness experiences, 
            each designed to nurture your mind, body, and spirit in our tranquil sanctuary
          </p>
        </div>
      </section>

      {/* Services by Category */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 px-6 ${categoryIndex % 2 === 1 ? 'bg-secondary' : ''}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-center">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service, serviceIndex) => (
                <ServiceCard
                  key={serviceIndex}
                  title={service.title}
                  description={service.description}
                  duration={service.duration}
                  image={service.image}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-semibold mb-6">
            Ready to Experience Tranquility?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your personalized wellness journey today and experience the difference expert care makes
          </p>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => setIsBookingOpen(true)}
          >
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
