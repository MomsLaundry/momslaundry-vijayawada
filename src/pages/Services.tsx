
import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            At Mom's Laundry, we offer a comprehensive range of laundry and cleaning services to meet all your needs. Each service is delivered with our commitment to quality and attention to detail.
          </p>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
