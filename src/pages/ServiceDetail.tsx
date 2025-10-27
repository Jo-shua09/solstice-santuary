import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Leaf, Sparkles } from "lucide-react";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import massageImage from "@/assets/massage-therapy.jpg";

const ServiceDetail = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
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
                deep tissue, hot stone therapy, and aromatherapy techniques to create a truly transformative 
                and deeply restorative 90-minute wellness experience.
              </p>
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setIsBookingOpen(true)}
              >
                Book This Treatment
              </Button>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={massageImage}
                alt="Luxury spa massage therapy room with warm volcanic stones"
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
              Your transformative journey begins in our tranquil reception area, where you'll be warmly 
              greeted with complimentary herbal tea and a sincere welcome. After a thorough consultation 
              to understand your specific needs, wellness goals, and any areas of concern, you'll be 
              escorted to your private, beautifully appointed treatment room.
            </p>
            <p>
              The comprehensive 90-minute session begins with gentle Swedish effleurage strokes to warm 
              and prepare the muscles, followed by progressively deeper techniques targeting areas of 
              chronic tension. Your expertly trained therapist will skillfully incorporate smooth heated 
              volcanic stones and a custom-blended selection of certified organic essential oils chosen 
              specifically for your individual needs and preferences.
            </p>
            <p>
              The treatment concludes with a deeply relaxing scalp and neck massage, followed by a few 
              peaceful moments of stillness, allowing your body to fully integrate the profound benefits 
              of the session. Afterward, you're invited to enjoy our luxurious relaxation lounge with 
              complimentary refreshments before returning to your day feeling renewed, restored, and 
              deeply rejuvenated.
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold mb-8">Products & Ingredients</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We exclusively use certified organic, sustainably sourced, and cruelty-free ingredients of the 
            highest quality:
          </p>
          <ul className="space-y-3 text-muted-foreground text-lg">
            <li>• Cold-pressed organic jojoba and sweet almond carrier oils for deep nourishment</li>
            <li>• Pure therapeutic-grade essential oils of lavender, eucalyptus, and frankincense</li>
            <li>• Vitamin E-rich argan oil for superior skin nourishment and anti-aging benefits</li>
            <li>• Hand-selected Himalayan salt stones for gentle, sustained heat therapy</li>
            <li>• Organic shea butter and coconut oil blend for ultimate skin hydration</li>
          </ul>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">Ready to Book?</h2>
            <p className="text-xl text-muted-foreground mb-2">90-minute session: $185</p>
            <p className="text-sm text-muted-foreground mb-8">Add a 30-minute botanical facial for only $60</p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsBookingOpen(true)}
            >
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
