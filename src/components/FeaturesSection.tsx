
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
  return (
    <div className="bg-laundry-50 py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our specialized laundry services with a woman's attention to detail and care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Garment Pressing",
              description: "Professional pressing for all your garments to give them that crisp, wrinkle-free finish.",
              image: "https://images.unsplash.com/photo-1606483956061-46a898dce538?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Pickup & Delivery",
              description: "Free doorstep pickup and delivery throughout Vijayawada for your convenience.",
              image: "https://images.unsplash.com/photo-1624627297072-3be3159a8f37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Express Service",
              description: "Same-day turnaround when you need your clothes cleaned in a hurry.",
              image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Shoe Cleaning",
              description: "Professional shoe cleaning and restoration to keep your footwear looking brand new.",
              image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group hover-lift">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-laundry-600 font-medium hover:text-laundry-700 flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
