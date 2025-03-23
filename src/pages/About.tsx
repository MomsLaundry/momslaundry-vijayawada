
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            Learn about Mom's Laundry, our journey, our values, and the women-driven team that makes our exceptional service possible.
          </p>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
