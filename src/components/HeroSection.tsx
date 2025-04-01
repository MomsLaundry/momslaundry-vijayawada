
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <span className="mr-1">⭐️</span> Premium Women-Owned Laundry Service
          </div>
          
          <div className="flex flex-col items-center md:items-start mb-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/e23a9a5c-dd36-4fc8-b974-4a40c055f7ce.png" 
                alt="Mom's Laundry Logo" 
                className="h-32 w-32 mb-4"
              />
              <img 
                src="/lovable-uploads/a8ae7c6c-1cf3-44db-b8f1-5000c1d06fa2.png" 
                alt="Mom's Laundry Logo" 
                className="h-24 w-24 mb-4 ml-2"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-center md:text-left">
              <span className="text-black">Mom's</span>
              <span className="text-[#33C3F0]"> Laundry</span>
            </h1>
            <p className="text-sm tracking-widest font-medium text-gray-600 mt-2">
              F R E S H&nbsp;&nbsp; C L O T H E S&nbsp;&nbsp;|&nbsp;&nbsp;F R E S H&nbsp;&nbsp;L I F E
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-md">
            Mom's Laundry brings a woman's touch to professional care for your wardrobe with our premium services in Vijayawada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="bg-laundry-500 hover:bg-laundry-600 text-white font-medium">
              Book a Pickup
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-laundry-300 text-laundry-700 hover:bg-laundry-50">
              <Link to="/services">View Services</Link>
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
                <span className="font-semibold text-foreground">400+</span> happy customers in Vijayawada
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-laundry-200 to-laundry-400 opacity-75 blur"></div>
            <div className="glass-panel p-8 relative animate-fade-in-up delay-100">
              <img 
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Woman with laundry clothes" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4 text-center">The Woman's Touch Guarantee</h3>
              <p className="text-center text-muted-foreground mb-6">
                We treat every piece of clothing with a mother's care and attention to detail that only women can provide.
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
