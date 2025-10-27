import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Leaf, Sparkles } from "lucide-react";

const ServiceDetail = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-6 animate-fade-in">
                Signature Tranquility Massage
              </h1>
              <div className="flex items-center space-x-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>90 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5" />
                  <span>Organic oils</span>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our most celebrated treatment, this therapeutic massage combines the best of Swedish, 
                deep tissue, and aromatherapy techniques to create a truly transformative experience.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Book This Treatment
              </Button>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
              <img 
                src="/placeholder.svg"
                alt="Signature massage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Deep muscle relaxation and tension release",
              "Improved circulation and lymphatic drainage",
              "Reduced stress and anxiety levels",
              "Enhanced flexibility and range of motion",
              "Better sleep quality",
              "Strengthened immune system response"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold mb-8">What to Expect</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Your journey begins in our tranquil reception area, where you'll be greeted with herbal tea 
              and a warm welcome. After a brief consultation to understand your needs and preferences, 
              you'll be escorted to your private treatment room.
            </p>
            <p>
              The 90-minute session begins with gentle effleurage strokes to warm the muscles, followed by 
              deeper techniques targeting areas of tension. Your therapist will incorporate smooth heated 
              stones and a custom blend of organic essential oils chosen specifically for your needs.
            </p>
            <p>
              The treatment concludes with a scalp massage and a few moments of stillness, allowing your 
              body to fully integrate the benefits. Afterward, enjoy our relaxation lounge with refreshments 
              before returning to your day renewed and restored.
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold mb-8">Products & Ingredients</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We exclusively use certified organic and sustainably sourced ingredients:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Cold-pressed jojoba and sweet almond carrier oils</li>
            <li>• Pure essential oils of lavender, eucalyptus, and frankincense</li>
            <li>• Vitamin E-rich argan oil for skin nourishment</li>
            <li>• Himalayan salt stones for gentle heat therapy</li>
          </ul>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">Ready to Book?</h2>
            <p className="text-xl text-muted-foreground mb-2">90-minute session: $185</p>
            <p className="text-sm text-muted-foreground mb-8">Add a 30-minute facial for $60</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Reserve Your Appointment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
