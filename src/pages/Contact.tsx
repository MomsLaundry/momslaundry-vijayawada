
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-black">Contact</span> 
            <span className="text-[#33C3F0]">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            Have questions or need to schedule a pickup? Our customer service team is here to help you with all your laundry needs.
          </p>
        </div>
        <ContactSection />
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-black">Our</span> 
            <span className="text-[#33C3F0]">Location</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
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
