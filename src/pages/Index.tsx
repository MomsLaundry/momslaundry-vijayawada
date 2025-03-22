
import React from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatBox from '@/components/chat/ChatBox';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HomePage />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBox />
    </div>
  );
};

export default Index;
