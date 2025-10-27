import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      category: "Massage Therapy",
      items: [
        {
          title: "Signature Tranquility Massage",
          description: "A harmonious blend of Swedish, deep tissue, and aromatherapy techniques",
          duration: "90 minutes",
          image: "/placeholder.svg",
          link: "/services/signature-massage"
        },
        {
          title: "Hot Stone Therapy",
          description: "Smooth heated stones melt away tension and restore energy flow",
          duration: "75 minutes",
          image: "/placeholder.svg",
          link: "/services/hot-stone"
        },
        {
          title: "Deep Tissue Release",
          description: "Targeted pressure to alleviate chronic muscle tension and pain",
          duration: "60 minutes",
          image: "/placeholder.svg",
          link: "/services/deep-tissue"
        }
      ]
    },
    {
      category: "Facial Treatments",
      items: [
        {
          title: "Botanical Glow Facial",
          description: "Organic plant-based ingredients for radiant, rejuvenated skin",
          duration: "60 minutes",
          image: "/placeholder.svg",
          link: "/services/botanical-facial"
        },
        {
          title: "Age-Defying Treatment",
          description: "Advanced techniques to reduce fine lines and restore youthful vitality",
          duration: "75 minutes",
          image: "/placeholder.svg",
          link: "/services/age-defying"
        }
      ]
    },
    {
      category: "Hydrotherapy",
      items: [
        {
          title: "Mineral Soak Experience",
          description: "Therapeutic mineral waters to detoxify and deeply relax",
          duration: "45 minutes",
          image: "/placeholder.svg",
          link: "/services/mineral-soak"
        },
        {
          title: "Vichy Shower Ritual",
          description: "Cascading water therapy combined with body exfoliation",
          duration: "60 minutes",
          image: "/placeholder.svg",
          link: "/services/vichy-shower"
        }
      ]
    },
    {
      category: "Day Packages",
      items: [
        {
          title: "Complete Serenity Package",
          description: "Full day of pampering including massage, facial, and lunch",
          duration: "6 hours",
          image: "/placeholder.svg",
          link: "/services/serenity-package"
        },
        {
          title: "Couples Retreat",
          description: "Shared sanctuary experience with side-by-side treatments",
          duration: "4 hours",
          image: "/placeholder.svg",
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
          <p className="text-xl text-muted-foreground animate-slide-up">
            Discover our curated collection of restorative treatments and wellness experiences
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
            Book your personalized wellness journey today
          </p>
          <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Schedule Your Visit
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
