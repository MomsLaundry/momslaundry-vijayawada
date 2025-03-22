
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-laundry-50 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-laundry-100 text-laundry-800 text-sm font-medium mb-2">
              Our Story
            </div>
            <h2 className="section-title">Family-Owned <br className="hidden md:block" /> With Professional Care</h2>
            <p className="text-muted-foreground">
              Mom's Laundry began as a small family business with a simple philosophy: treat every customer's clothing with the same care and attention to detail that a loving mother provides.
            </p>
            <p className="text-muted-foreground">
              Over the years, we've grown into a trusted laundry service that combines modern efficiency with old-fashioned care. Our team of dedicated professionals ensures your garments receive personalized attention at every step.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Eco-friendly products",
                "Expert stain treatment",
                "Color-safe procedures",
                "Fabric-specific care",
                "Meticulous folding",
                "Satisfaction guarantee"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-laundry-500" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-laundry-500 hover:bg-laundry-600 text-white mt-2">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-laundry-300/40 to-laundry-600/40 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Clean folded laundry" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg max-w-xs animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-laundry-100 flex items-center justify-center">
                  <span className="text-laundry-600 text-xl font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Years Experience</h4>
                  <p className="text-sm text-muted-foreground">Trusted service since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
