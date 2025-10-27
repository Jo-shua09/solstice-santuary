import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const images = Array(12).fill("/placeholder.svg");

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            The Retreat
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up">
            A visual journey through our sanctuary of serenity and natural beauty
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="aspect-[4/3] rounded-2xl overflow-hidden hover-lift"
              >
                <img 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-semibold mb-8 text-center">Our Design Philosophy</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Every element of The Solstice Sanctuary has been thoughtfully designed to create an 
              atmosphere of profound tranquility. Natural materials—warm woods, smooth stones, and 
              flowing water—form the foundation of our aesthetic.
            </p>
            <p>
              Large windows frame views of native gardens, allowing natural light to dance across 
              minimalist interiors. Each treatment room is a private oasis, carefully appointed with 
              organic textiles and gentle lighting that adapts to your comfort.
            </p>
            <p>
              Our architecture celebrates the beauty of simplicity, with clean lines and soft curves 
              that guide you into a state of relaxation the moment you arrive. This is more than a 
              spa—it's a sanctuary for the senses.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
