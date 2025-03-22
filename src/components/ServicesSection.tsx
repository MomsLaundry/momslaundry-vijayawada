
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Wash & Fold",
    description: "Your everyday laundry cleaned, folded, and ready to wear.",
    icon: Shirt,
    color: "bg-laundry-50 text-laundry-600",
    delay: "0",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  },
  {
    title: "Dry Cleaning",
    description: "Professional care for your delicate and special items.",
    icon: SquareDashedBottom,
    color: "bg-blue-50 text-blue-600",
    delay: "100",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  },
  {
    title: "Deep Stain Removal",
    description: "Advanced techniques to tackle the toughest stains.",
    icon: Droplets,
    color: "bg-amber-50 text-amber-600",
    delay: "200",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  },
  {
    title: "Garment Pressing",
    description: "Crisp, wrinkle-free clothes ready for any occasion.",
    icon: Sparkles,
    color: "bg-violet-50 text-violet-600",
    delay: "0",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  },
  {
    title: "Pickup & Delivery",
    description: "Convenient doorstep service at your preferred schedule.",
    icon: ShoppingBag,
    color: "bg-emerald-50 text-emerald-600",
    delay: "100",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  },
  {
    title: "Express Service",
    description: "Same-day processing when you need your items fast.",
    icon: Clock,
    color: "bg-rose-50 text-rose-600",
    delay: "200",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  },
  {
    title: "Shoe Cleaning",
    description: "Restore your footwear to like-new condition with our expert shoe cleaning service.",
    icon: Footprints,
    color: "bg-orange-50 text-orange-600",
    delay: "0",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  },
  {
    title: "Carpet Cleaning",
    description: "Deep cleaning solutions for carpets to remove stains, odors, and allergens.",
    icon: Eraser,
    color: "bg-teal-50 text-teal-600",
    delay: "100",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  },
  {
    title: "Sofa Cleaning",
    description: "Refresh your upholstery with our professional sofa cleaning services.",
    icon: Sofa,
    color: "bg-indigo-50 text-indigo-600",
    delay: "200",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  },
  {
    title: "Bag Cleaning",
    description: "Specialized care for handbags, backpacks, and luggage of all types and materials.",
    icon: Briefcase,
    color: "bg-pink-50 text-pink-600",
    delay: "0",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
    ]
  }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full">
              {isOpen ? "Hide Details" : "View Process & Features"}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Our Process</h4>
              <ol className="space-y-1 list-decimal pl-5">
                {service.process.map((step, i) => (
                  <li key={i} className="text-sm">{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-medium mb-2">Key Features</h4>
              <ul className="space-y-1 list-disc pl-5">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm">{bullet}</li>
                ))}
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>
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
    <section id="services" className="section relative">
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
