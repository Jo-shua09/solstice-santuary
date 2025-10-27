import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import massageImage from "@/assets/massage-therapy.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import hydrotherapyImage from "@/assets/hydrotherapy.jpg";
import bodyTreatmentImage from "@/assets/body-treatment.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Luxury spa relaxation lounge with natural wood and calming decor" },
    { src: gallery2, alt: "Elegant treatment room with massage table and sage green accents" },
    { src: gallery3, alt: "Modern spa exterior with zen garden and water features" },
    { src: gallery4, alt: "Tranquil meditation room with natural wood and peaceful lighting" },
    { src: massageImage, alt: "Massage therapy room with warm stones and natural elements" },
    { src: facialImage, alt: "Facial treatment room with organic skincare and soft lighting" },
    { src: hydrotherapyImage, alt: "Hydrotherapy pool with natural stone and zen elements" },
    { src: bodyTreatmentImage, alt: "Body treatment room with massage table and natural decor" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">The Retreat</h1>
          <p className="text-lg md:text-xl text-muted-foreground animate-slide-up max-w-3xl mx-auto">
            A visual journey through our sanctuary of serenity, where natural beauty and modern luxury create an atmosphere of profound tranquility
            and rejuvenation
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden hover-lift">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 md:px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-semibold mb-8 text-center">Our Design Philosophy</h2>
          <div className="space-y-6 text-sm md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Every element of The Solstice Sanctuary has been thoughtfully designed to create an atmosphere of profound tranquility and timeless
              elegance. Natural materials—warm sustainably sourced woods, smooth river stones, and flowing water features—form the foundation of our
              carefully considered aesthetic philosophy.
            </p>
            <p>
              Floor-to-ceiling windows frame breathtaking views of native botanical gardens, allowing natural light to dance gracefully across
              minimalist interiors throughout the day. Each treatment room is a private oasis, carefully appointed with organic textiles,
              hand-selected artwork, and intelligent lighting systems that adapt seamlessly to your personal comfort preferences.
            </p>
            <p>
              Our award-winning architecture celebrates the inherent beauty of simplicity, with clean architectural lines and soft, flowing curves
              that guide you effortlessly into a state of deep relaxation from the moment you cross our threshold. This is more than a spa—it's a
              thoughtfully crafted sanctuary for all the senses, a refuge from the modern world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
