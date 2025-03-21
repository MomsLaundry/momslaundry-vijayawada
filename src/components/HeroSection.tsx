
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, WashingMachine } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-laundry-50 to-white z-0 opacity-70"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-laundry-100 rounded-full blur-3xl opacity-60 z-0"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-laundry-200 rounded-full blur-3xl opacity-40 z-0"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-laundry-100 text-laundry-800 text-sm font-medium mb-2 w-fit">
            <span className="mr-1">⭐️</span> Professional Laundry Service
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
            Pristine Clothes, <br />
            <span className="text-laundry-600">Effortless Living</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Mom's Laundry brings professional care to your wardrobe with our premium wash, dry, and fold services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="bg-laundry-500 hover:bg-laundry-600 text-white font-medium">
              Book a Pickup
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-laundry-300 text-laundry-700 hover:bg-laundry-50">
              View Services
            </Button>
          </div>
          
          <div className="flex items-center pt-6 space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-laundry-100 flex items-center justify-center text-laundry-500 font-medium">
                  {i}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">400+</span> happy customers trust us with their laundry
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-laundry-200 to-laundry-400 opacity-75 blur"></div>
            <div className="glass-panel p-8 relative animate-fade-in-up delay-100">
              <div className="flex justify-center items-center mb-6">
                <div className="w-16 h-16 bg-laundry-100 rounded-full flex items-center justify-center animate-float">
                  <WashingMachine className="h-8 w-8 text-laundry-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Fresh & Clean Guarantee</h3>
              <p className="text-center text-muted-foreground mb-6">
                We treat every piece of clothing with care, as if it were our own. Your satisfaction is our top priority.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
                  <div className="font-bold text-2xl text-laundry-700">24h</div>
                  <div className="text-sm text-muted-foreground">Turnaround</div>
                </div>
                <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
                  <div className="font-bold text-2xl text-laundry-700">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
