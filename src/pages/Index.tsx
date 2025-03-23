
import React from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';
import ChatBox from '@/components/chat/ChatBox';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
      <ChatBox />
    </div>
  );
};

export default Index;
