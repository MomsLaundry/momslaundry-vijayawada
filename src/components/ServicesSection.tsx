import React, { useState } from 'react';
import { Shirt, SquareDashedBottom, Droplets, Sparkles, ShoppingBag, Clock, Footprints, Eraser, Sofa, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const services = [
  {
    id: "wash-fold",
    title: "Wash & Fold",
    description: "Your everyday laundry cleaned, folded, and ready to wear.",
    icon: Shirt,
    color: "bg-laundry-50 text-laundry-600",
    delay: "0",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Drop off or schedule pickup of your laundry",
      "We sort by color and fabric type",
      "Gentle washing with premium detergents",
      "Thorough drying at appropriate temperatures",
      "Expert folding and packaging"
    ],
    bullets: [
      "Eco-friendly detergent options",
      "Special care for delicate items",
      "Wrinkle-reduction techniques",
      "Neatly folded and packaged"
    ],
    detailImage: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our premium Wash & Fold service takes the hassle out of everyday laundry. We meticulously sort your items by color and fabric type, then use high-quality, eco-friendly detergents to ensure your clothes come back fresh and clean. Our experienced staff ensures your garments are treated with care throughout the process, from washing to drying at appropriate temperatures to prevent shrinkage or damage. Finally, we expertly fold each item for easy storage and wrinkle prevention."
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    description: "Professional care for your delicate and special items.",
    icon: SquareDashedBottom,
    color: "bg-blue-50 text-blue-600",
    delay: "100",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Thorough inspection of garments",
      "Spot treatment for stains and marks",
      "Cleaning with specialized solvents",
      "Pressing and finishing",
      "Quality check and packaging"
    ],
    bullets: [
      "Safe for silk, wool, and delicate fabrics",
      "Preserves color and texture",
      "Handles structured garments",
      "Extended garment lifespan"
    ],
    detailImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our professional dry cleaning service is designed for your most precious garments. We begin with a careful inspection, noting any stains or special concerns. Our experts use specialized solvents that effectively clean without water, preserving the integrity of delicate fabrics like silk, wool, and structured garments. Each item receives individualized spot treatment as needed, followed by professional pressing and finishing that restores the original shape and appearance."
  },
  {
    id: "stain-removal",
    title: "Deep Stain Removal",
    description: "Advanced techniques to tackle the toughest stains.",
    icon: Droplets,
    color: "bg-amber-50 text-amber-600",
    delay: "200",
    image: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Stain analysis and identification",
      "Application of specialized pre-treatments",
      "Targeted stain removal techniques",
      "Color-safe processing",
      "Final inspection and treatment verification"
    ],
    bullets: [
      "Works on old and set-in stains",
      "Specialized solutions for different stain types",
      "Safe for colored and delicate fabrics",
      "Prevents fabric damage"
    ],
    detailImage: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our Deep Stain Removal service tackles even the most stubborn stains with precision and expertise. We begin by analyzing the stain type and fabric composition to determine the most effective treatment approach. Our technicians apply specialized pre-treatments and use targeted techniques specific to each stain type, whether it's wine, oil, ink, or other challenging substances. We work carefully to ensure the process is safe for the fabric's color and integrity."
  },
  {
    id: "garment-pressing",
    title: "Garment Pressing",
    description: "Crisp, wrinkle-free clothes ready for any occasion.",
    icon: Sparkles,
    color: "bg-violet-50 text-violet-600",
    delay: "0",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Light steaming to relax fabrics",
      "Professional pressing with industrial equipment",
      "Special attention to collars, cuffs, and pleats",
      "Final steaming for perfect finish",
      "Hanging or folding per preference"
    ],
    bullets: [
      "Temperature control for fabric safety",
      "Crisp edges and smooth surfaces",
      "Preserved garment structure",
      "Ready-to-wear convenience"
    ],
    detailImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our expert Garment Pressing service delivers immaculately finished clothing that makes a lasting impression. We begin with a gentle steaming process to relax fibers and prepare them for pressing. Our professional equipment and techniques ensure precise attention to details like collars, cuffs, pleats, and seams. We adjust temperatures based on fabric type to prevent damage while achieving optimal results."
  },
  {
    id: "pickup-delivery",
    title: "Pickup & Delivery",
    description: "Convenient doorstep service at your preferred schedule.",
    icon: ShoppingBag,
    color: "bg-emerald-50 text-emerald-600",
    delay: "100",
    image: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Schedule pickup through app, website, or phone",
      "Contactless collection from your door",
      "Processing at our facility",
      "Text notification when ready",
      "Scheduled delivery to your door"
    ],
    bullets: [
      "Flexible scheduling options",
      "Real-time tracking",
      "Secure handling procedures",
      "Contactless options available"
    ],
    detailImage: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our Pickup & Delivery service brings convenience to your laundry routine. Simply schedule your preferred time through our mobile app, website, or by phone, and our professional team will collect your items directly from your doorstep. We offer contactless options and secure handling throughout the process. You'll receive real-time notifications about your order status, and when your items are ready, we'll deliver them back to you at your scheduled time."
  },
  {
    id: "express-service",
    title: "Express Service",
    description: "Same-day processing when you need your items fast.",
    icon: Clock,
    color: "bg-rose-50 text-rose-600",
    delay: "200",
    image: "https://images.unsplash.com/photo-1613905780946-26b73b6f6e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Priority handling upon receipt",
      "Expedited cleaning process",
      "Rapid drying and finishing",
      "Quality check",
      "Same-day ready notification"
    ],
    bullets: [
      "Available 7 days a week",
      "3-6 hour turnaround",
      "No compromise on quality",
      "Priority scheduling"
    ],
    detailImage: "https://images.unsplash.com/photo-1613905780946-26b73b6f6e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our Express Service is designed for those urgent situations when you need clean clothes in a hurry. We prioritize your items immediately upon receipt and move them through an expedited cleaning process without compromising on quality. With a typical turnaround of just 3-6 hours, we ensure your garments receive proper care while meeting your tight deadline."
  },
  {
    id: "shoe-cleaning",
    title: "Shoe Cleaning",
    description: "Restore your footwear to like-new condition with our expert shoe cleaning service.",
    icon: Footprints,
    color: "bg-orange-50 text-orange-600",
    delay: "0",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Initial assessment of shoe condition and material",
      "Deep cleaning of outer surfaces",
      "Specialized treatment for insoles and linings",
      "Deodorizing treatment",
      "Careful drying and finishing"
    ],
    bullets: [
      "Works on leather, suede, canvas and athletic shoes",
      "Stain and salt removal",
      "Odor elimination",
      "Protective coating application"
    ],
    detailImage: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our Shoe Cleaning service brings new life to your footwear. We begin with a comprehensive assessment of each pair, identifying the material and condition to determine the appropriate cleaning approach. Our specialists use material-specific techniques for leather, suede, canvas, and athletic shoes to remove dirt, stains, and salt marks without damaging the shoe. We clean both exterior surfaces and interior linings, apply deodorizing treatments, and finish with protective coatings as appropriate."
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    description: "Deep cleaning solutions for carpets to remove stains, odors, and allergens.",
    icon: Eraser,
    color: "bg-teal-50 text-teal-600",
    delay: "100",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Pre-inspection and spot testing",
      "Vacuuming to remove loose dirt",
      "Application of specialized cleaning solution",
      "Hot water extraction",
      "Drying and final inspection"
    ],
    bullets: [
      "Safe for all carpet types",
      "Removes embedded dirt and allergens",
      "Eliminates pet odors",
      "Extends carpet life"
    ],
    detailImage: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our comprehensive Carpet Cleaning service refreshes and sanitizes your carpets, removing deep-seated dirt, allergens, and odors. We begin with a thorough inspection and spot testing to determine the best approach for your specific carpet type. After vacuuming to remove surface debris, we apply specialized cleaning solutions tailored to your carpet's material and stain conditions. Our hot water extraction process penetrates deep into fibers to lift embedded dirt while controlling moisture levels."
  },
  {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    description: "Refresh your upholstery with our professional sofa cleaning services.",
    icon: Sofa,
    color: "bg-indigo-50 text-indigo-600",
    delay: "200",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Fabric analysis and spot testing",
      "Vacuuming of loose particles",
      "Pre-treatment of stains and high-use areas",
      "Deep cleaning with appropriate method",
      "Drying and finishing"
    ],
    bullets: [
      "Safe for delicate fabrics",
      "Removes allergens and dust mites",
      "Revitalizes appearance",
      "Extends furniture lifespan"
    ],
    detailImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our Sofa Cleaning service renews your upholstered furniture, eliminating dirt, stains, and allergens while refreshing the fabric. We begin with a careful analysis of your sofa's material and construction to determine the safest, most effective cleaning method. After thorough vacuuming to remove surface particles, we pre-treat stains and heavily used areas with specialized solutions. Depending on the fabric type, we employ hot water extraction, dry cleaning, or foam cleaning methods."
  },
  {
    id: "bag-cleaning",
    title: "Bag Cleaning",
    description: "Specialized care for handbags, backpacks, and luggage of all types and materials.",
    icon: Briefcase,
    color: "bg-pink-50 text-pink-600",
    delay: "0",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    process: [
      "Material identification and assessment",
      "Removal of hardware when necessary",
      "Specialized cleaning based on material",
      "Conditioning of leather items",
      "Reassembly and final inspection"
    ],
    bullets: [
      "Works on leather, fabric, and synthetic materials",
      "Interior and exterior cleaning",
      "Shape restoration",
      "Leather conditioning"
    ],
    detailImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    detailContent: "Our Bag Cleaning service brings expert care to your handbags, backpacks, luggage, and other carry items. We begin with a comprehensive assessment of each bag's materials, construction, and condition. When necessary, we carefully remove hardware components to allow for thorough cleaning without damage. Our specialists use material-appropriate techniques for leather, fabric, canvas, and synthetic bags, addressing both exterior and interior surfaces."
  }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <Card className={cn(
      "relative group hover-lift rounded-xl overflow-hidden",
      "animate-fade-in-up h-full"
    )} style={{ animationDelay: `${service.delay}ms` }}>
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>
      <CardHeader className="relative">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-2", service.color)}>
          <service.icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <Link to={`/services/${service.id}`}>
          <Button variant="outline" className="w-full">
            View Process & Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const categoryTabs = [
    { id: "all", label: "All Services" },
    { id: "laundry", label: "Laundry Services" },
    { id: "home", label: "Home Cleaning" },
    { id: "specialty", label: "Specialty Items" }
  ];

  const categorizedServices = {
    laundry: [0, 1, 2, 3],
    home: [7, 8],
    specialty: [6, 9, 4, 5]
  };

  return (
    <section id="services" className="section relative py-20">
      <div className="absolute inset-0 bg-gradient-radial from-laundry-50 to-transparent opacity-50 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Services</h2>
          <p className="text-muted-foreground">
            From everyday essentials to special care items, we provide comprehensive solutions for all your laundry and cleaning needs.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              {categoryTabs.map(tab => (
                <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </TabsContent>
          
          {Object.entries(categorizedServices).map(([category, indices]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {indices.map(index => (
                  <ServiceCard key={index} service={services[index]} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
