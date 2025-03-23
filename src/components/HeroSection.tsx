
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from 'lucide-react';
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
            Laundry Care <br />
            <span className="text-laundry-600">By Women, For Everyone</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Mom's Laundry brings a woman's touch to professional care for your wardrobe with our premium services in Vijayawada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="bg-laundry-500 hover:bg-laundry-600 text-white font-medium">
              <a href="#request-pickup">Book a Pickup</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-laundry-300 text-laundry-700 hover:bg-laundry-50">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
          
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold">Why Choose Mom's Laundry?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Premium Cleaning Methods", 
                "24-Hour Turnaround", 
                "Free Pickup & Delivery",
                "Professional Staff"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-laundry-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
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
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
              />
              <h3 className="text-xl font-semibold mb-4 text-center">The Woman's Touch Guarantee</h3>
              <p className="text-center text-muted-foreground mb-6">
                We treat every piece of clothing with a mother's care and attention to detail that only women can provide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-80 p-4 rounded-lg text-center shadow-sm">
                  <div className="font-bold text-2xl text-laundry-700">24h</div>
                  <div className="text-sm text-muted-foreground">Turnaround</div>
                </div>
                <div className="bg-white bg-opacity-80 p-4 rounded-lg text-center shadow-sm">
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
