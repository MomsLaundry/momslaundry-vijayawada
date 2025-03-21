
import React from 'react';
import { Shirt, SquareDashedBottom, Droplets, Sparkles, ShoppingBag, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Wash & Fold",
    description: "Your everyday laundry cleaned, folded, and ready to wear.",
    icon: Shirt,
    color: "bg-laundry-50 text-laundry-600",
    delay: "0"
  },
  {
    title: "Dry Cleaning",
    description: "Professional care for your delicate and special items.",
    icon: SquareDashedBottom,
    color: "bg-blue-50 text-blue-600",
    delay: "100"
  },
  {
    title: "Deep Stain Removal",
    description: "Advanced techniques to tackle the toughest stains.",
    icon: Droplets,
    color: "bg-amber-50 text-amber-600",
    delay: "200"
  },
  {
    title: "Garment Pressing",
    description: "Crisp, wrinkle-free clothes ready for any occasion.",
    icon: Sparkles,
    color: "bg-violet-50 text-violet-600",
    delay: "0"
  },
  {
    title: "Pickup & Delivery",
    description: "Convenient doorstep service at your preferred schedule.",
    icon: ShoppingBag,
    color: "bg-emerald-50 text-emerald-600",
    delay: "100"
  },
  {
    title: "Express Service",
    description: "Same-day processing when you need your items fast.",
    icon: Clock,
    color: "bg-rose-50 text-rose-600",
    delay: "200"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section relative">
      <div className="absolute inset-0 bg-gradient-radial from-laundry-50 to-transparent opacity-50 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Services</h2>
          <p className="text-muted-foreground">
            From everyday essentials to special care items, we provide comprehensive solutions for all your laundry needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative group hover-lift rounded-xl overflow-hidden",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>
              <div className="relative p-8 border border-gray-100 rounded-xl h-full">
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-5", service.color)}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
