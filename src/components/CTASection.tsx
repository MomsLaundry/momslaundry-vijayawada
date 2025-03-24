
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="bg-laundry-50 py-24 px-6">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-laundry-500 to-laundry-600 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Freshly Cleaned Clothes?</h2>
              <p className="text-laundry-50 mb-8 text-lg">
                Experience the Mom's Laundry difference today. First-time customers receive 20% off their first order.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-laundry-600 hover:bg-laundry-50 h-12">
                  <a href="#request-pickup">Book a Pickup</a>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-laundry-600/50 h-12">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1578353022142-09264fd64295?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Professional laundry service" 
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
