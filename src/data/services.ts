import massageImage from "@/assets/massage-therapy.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import hydrotherapyImage from "@/assets/hydrotherapy.jpg";
import bodyTreatmentImage from "@/assets/body-treatment.jpg";
import aboutPhilosophyImage from "@/assets/about-philosophy.jpg";
import heroSpaImage from "@/assets/hero-spa.jpg";

export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  category: string;
  benefits: string[];
  whatToExpect: string;
  ingredients: string[];
  price: string;
}

export const services: Service[] = [
  // Massage Therapy
  {
    id: "signature-massage",
    title: "Signature Tranquility Massage",
    description:
      "A harmonious blend of Swedish, deep tissue, hot stone, and aromatherapy techniques with warm volcanic stones and organic essential oils",
    duration: "90 minutes",
    image: massageImage,
    category: "Massage Therapy",
    benefits: [
      "Deep muscle relaxation and tension release",
      "Improved circulation and lymphatic drainage",
      "Reduced stress and anxiety levels",
      "Enhanced flexibility and range of motion",
      "Better sleep quality",
      "Strengthened immune system response",
    ],
    whatToExpect:
      "Your transformative journey begins in our tranquil reception area, where you'll be warmly greeted with complimentary herbal tea and a sincere welcome. After a thorough consultation to understand your specific needs, wellness goals, and any areas of concern, you'll be escorted to your private, beautifully appointed treatment room. The comprehensive 90-minute session begins with gentle Swedish effleurage strokes to warm and prepare the muscles, followed by progressively deeper techniques targeting areas of chronic tension. Your expertly trained therapist will skillfully incorporate smooth heated volcanic stones and a custom-blended selection of certified organic essential oils chosen specifically for your individual needs and preferences. The treatment concludes with a deeply relaxing scalp and neck massage, followed by a few peaceful moments of stillness, allowing your body to fully integrate the profound benefits of the session. Afterward, you're invited to enjoy our luxurious relaxation lounge with complimentary refreshments before returning to your day feeling renewed, restored, and deeply rejuvenated.",
    ingredients: [
      "Cold-pressed organic jojoba and sweet almond carrier oils for deep nourishment",
      "Pure therapeutic-grade essential oils of lavender, eucalyptus, and frankincense",
      "Vitamin E-rich argan oil for superior skin nourishment and anti-aging benefits",
      "Hand-selected Himalayan salt stones for gentle, sustained heat therapy",
      "Organic shea butter and coconut oil blend for ultimate skin hydration",
    ],
    price: "$185",
  },
  {
    id: "hot-stone",
    title: "Hot Stone Therapy",
    description:
      "Smooth heated basalt stones melt away deep-seated tension, restore energy flow, and promote profound relaxation throughout the body",
    duration: "75 minutes",
    image: massageImage,
    category: "Massage Therapy",
    benefits: [
      "Melts away deep-seated muscle tension",
      "Restores natural energy flow",
      "Promotes profound relaxation",
      "Improves circulation",
      "Reduces stress and anxiety",
      "Enhances overall well-being",
    ],
    whatToExpect:
      "Begin your hot stone therapy experience in our serene consultation room, where your therapist will discuss your wellness goals and any specific areas of concern. You'll then be guided to a private treatment room warmed to the perfect temperature. The session starts with gentle placement of smooth, heated basalt stones along your spine and key energy points, allowing the warmth to penetrate deeply and prepare your muscles. Your therapist will then perform a customized massage incorporating the stones, alternating between direct stone placement and traditional massage techniques. The heat from the stones helps to dilate blood vessels, improving circulation and allowing deeper work on muscle tissues. The treatment concludes with a calming scalp massage and a few moments of peaceful stillness. You'll leave feeling deeply relaxed, with improved energy flow and a sense of profound well-being.",
    ingredients: [
      "Smooth basalt stones heated to therapeutic temperatures",
      "Organic carrier oils for stone gliding",
      "Essential oils of lavender and chamomile for calming effects",
      "Himalayan salt stones for mineral-rich heat therapy",
      "Vitamin E-rich argan oil for skin nourishment",
    ],
    price: "$165",
  },
  {
    id: "deep-tissue",
    title: "Deep Tissue Release",
    description: "Targeted therapeutic pressure techniques to alleviate chronic muscle tension, improve mobility, and address specific pain points",
    duration: "60 minutes",
    image: massageImage,
    category: "Massage Therapy",
    benefits: [
      "Alleviates chronic muscle tension",
      "Improves mobility and flexibility",
      "Addresses specific pain points",
      "Reduces inflammation",
      "Enhances posture",
      "Promotes faster recovery from injuries",
    ],
    whatToExpect:
      "Your deep tissue session begins with a comprehensive consultation to identify your specific areas of tension and pain. You'll be positioned comfortably on our specialized massage table, and your therapist will start with gentle warming techniques to prepare your muscles. Using targeted pressure and slow, deliberate strokes, your therapist will work deeply into the muscle layers to release chronic tension and break up adhesions. You may experience some discomfort as tight areas are addressed, but this is normal and indicates the release of tension. The therapist will adjust pressure based on your feedback to ensure comfort while achieving therapeutic results. The session concludes with gentle stretching and relaxation techniques. Post-treatment, you may feel some soreness, but this typically resolves within 24-48 hours, leaving you with improved mobility and reduced pain.",
    ingredients: [
      "Deep tissue massage oils with arnica for inflammation reduction",
      "Essential oils of peppermint and eucalyptus for pain relief",
      "Organic shea butter for skin protection",
      "Vitamin E oil for tissue repair",
      "Himalayan salt for mineral absorption",
    ],
    price: "$140",
  },
  // Facial Treatments
  {
    id: "botanical-facial",
    title: "Botanical Glow Facial",
    description: "Organic plant-based ingredients and botanical extracts for luminous, radiant, and deeply nourished skin",
    duration: "60 minutes",
    image: facialImage,
    category: "Facial Treatments",
    benefits: [
      "Luminous and radiant skin",
      "Deep nourishment from organic ingredients",
      "Improved skin texture and tone",
      "Reduced appearance of fine lines",
      "Enhanced hydration",
      "Balanced skin pH",
    ],
    whatToExpect:
      "Your botanical facial journey begins with a gentle cleanse and skin analysis to determine your skin's current needs. A customized mask of fresh, organic botanicals will be applied, followed by a relaxing facial massage using plant-based serums. The treatment includes extractions if needed, and concludes with a hydrating mask and SPF application. You'll leave with glowing, nourished skin that feels soft and rejuvenated.",
    ingredients: [
      "Organic aloe vera for soothing and hydration",
      "Green tea extract for antioxidant protection",
      "Rosehip oil for skin regeneration",
      "Calendula extract for calming sensitive skin",
      "Hyaluronic acid for deep moisture retention",
    ],
    price: "$120",
  },
  {
    id: "age-defying",
    title: "Age-Defying Treatment",
    description: "Advanced anti-aging techniques with peptides and antioxidants to reduce fine lines, firm skin, and restore youthful radiance",
    duration: "75 minutes",
    image: facialImage,
    category: "Facial Treatments",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Firms and tightens skin",
      "Restores youthful radiance",
      "Improves skin elasticity",
      "Boosts collagen production",
      "Protects against environmental damage",
    ],
    whatToExpect:
      "This comprehensive anti-aging facial starts with a deep cleanse and exfoliation to remove dead skin cells. Advanced peptides and antioxidants are applied through specialized techniques, followed by a collagen-boosting mask. Micro-current therapy may be used to lift and firm facial muscles. The treatment ends with a nourishing serum and moisturizer application, leaving your skin looking younger and more radiant.",
    ingredients: [
      "Peptides for collagen stimulation",
      "Vitamin C for brightening and protection",
      "Retinol for cell turnover",
      "Hyaluronic acid for plumping",
      "Antioxidant-rich green tea extract",
    ],
    price: "$150",
  },
  // Hydrotherapy
  {
    id: "mineral-soak",
    title: "Mineral Soak Experience",
    description: "Therapeutic mineral-rich waters infused with essential oils to detoxify, ease muscle tension, and promote deep relaxation",
    duration: "45 minutes",
    image: hydrotherapyImage,
    category: "Hydrotherapy",
    benefits: [
      "Detoxifies the body",
      "Eases muscle tension",
      "Promotes deep relaxation",
      "Improves circulation",
      "Reduces inflammation",
      "Enhances overall well-being",
    ],
    whatToExpect:
      "Immerse yourself in our mineral-rich therapeutic bath infused with Epsom salts, essential oils, and healing minerals. The warm water soothes sore muscles while the minerals penetrate your skin for deep detoxification. Relax with complimentary herbal tea and enjoy the calming atmosphere of our hydrotherapy suite.",
    ingredients: [
      "Epsom salts for muscle relaxation",
      "Dead Sea minerals for detoxification",
      "Lavender essential oil for calming",
      "Eucalyptus oil for respiratory benefits",
      "Organic herbs for aromatherapy",
    ],
    price: "$85",
  },
  {
    id: "vichy-shower",
    title: "Vichy Shower Ritual",
    description: "Cascading warm water therapy combined with full-body exfoliation, promoting circulation and silky-smooth skin",
    duration: "60 minutes",
    image: hydrotherapyImage,
    category: "Hydrotherapy",
    benefits: [
      "Promotes circulation",
      "Exfoliates for silky-smooth skin",
      "Relieves muscle tension",
      "Improves lymphatic drainage",
      "Enhances skin radiance",
      "Reduces cellulite appearance",
    ],
    whatToExpect:
      "Experience the rejuvenating power of our Vichy shower system. Warm water cascades from multiple showerheads while our therapist performs a full-body exfoliation with natural scrubs. The combination of water pressure and exfoliation promotes circulation and leaves your skin glowing and smooth.",
    ingredients: [
      "Natural sugar and salt scrubs",
      "Organic essential oils",
      "Aloe vera for skin soothing",
      "Green tea extract for antioxidant benefits",
      "Himalayan salt for mineral infusion",
    ],
    price: "$110",
  },
  // Day Packages
  {
    id: "serenity-package",
    title: "Complete Serenity Package",
    description:
      "Full day of holistic pampering including signature massage, facial treatment, body scrub, gourmet lunch, and unlimited relaxation lounge access",
    duration: "6 hours",
    image: bodyTreatmentImage,
    category: "Day Packages",
    benefits: [
      "Complete holistic pampering",
      "Stress reduction and relaxation",
      "Improved skin health",
      "Enhanced well-being",
      "Nutritious gourmet meal",
      "Unlimited relaxation time",
    ],
    whatToExpect:
      "Your full day of serenity begins with a welcome consultation and herbal tea. Enjoy a signature massage, followed by a rejuvenating facial and body scrub. Take a break for a gourmet lunch in our private dining area, then relax in our lounge with unlimited access to refreshments and quiet spaces. End your day feeling completely renewed.",
    ingredients: [
      "Custom-blended essential oils",
      "Organic botanical extracts",
      "Natural exfoliants",
      "Nutrient-rich gourmet foods",
      "Herbal teas and infusions",
    ],
    price: "$450",
  },
  {
    id: "couples-retreat",
    title: "Couples Retreat",
    description: "Shared sanctuary experience with side-by-side treatments, private hydrotherapy, champagne, and chocolate-dipped strawberries",
    duration: "4 hours",
    image: bodyTreatmentImage,
    category: "Day Packages",
    benefits: [
      "Shared intimate experience",
      "Deep relaxation together",
      "Strengthened relationship bonds",
      "Private hydrotherapy",
      "Romantic touches",
      "Memorable celebration",
    ],
    whatToExpect:
      "Create lasting memories with your loved one in our couples retreat. Enjoy side-by-side massages in a private suite, followed by champagne and chocolate-dipped strawberries. Relax together in our private hydrotherapy area with mineral soaks and gentle music. This intimate experience strengthens your bond while providing ultimate relaxation.",
    ingredients: ["Premium champagne", "Belgian chocolate", "Fresh seasonal strawberries", "Aromatherapy oils", "Mineral-rich bath salts"],
    price: "$650",
  },
];
