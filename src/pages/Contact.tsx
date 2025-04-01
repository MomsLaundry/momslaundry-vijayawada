
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LocationMap from '@/components/LocationMap';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/lovable-uploads/204c7a6b-0da1-48a8-83c0-920e6aaf9cc5.png" 
              alt="Mom's Laundry Logo" 
              className="h-40 w-40 mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              <span className="text-black">Contact</span> 
              <span className="text-[#33C3F0]">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-6 text-center mt-4">
              Our customer service team is here to help you with all your laundry needs.
            </p>
          </div>
        </div>
        <ContactSection />
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="text-black">Our</span> 
            <span className="text-[#33C3F0]">Location</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6 mx-auto text-center">
            Visit us at our main branch or contact us for pickup and delivery services in Vijayawada.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md h-[400px] mb-12">
            <LocationMap />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
