
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12',
        isScrolled 
          ? 'py-3 bg-white bg-opacity-80 backdrop-blur-md shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/e23a9a5c-dd36-4fc8-b974-4a40c055f7ce.png" 
            alt="Mom's Laundry Logo" 
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold tracking-tighter">
            <span className="text-black">Mom's</span>
            <span className="text-[#33C3F0]">Laundry</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-laundry-600 transition-colors">Home</Link>
          <Link to="/services" className="text-foreground hover:text-laundry-600 transition-colors">Services</Link>
          <Link to="/about" className="text-foreground hover:text-laundry-600 transition-colors">About</Link>
          <Link to="/pricing" className="text-foreground hover:text-laundry-600 transition-colors">Pricing</Link>
          <Link to="/contact" className="text-foreground hover:text-laundry-600 transition-colors">Contact</Link>
          <Button className="bg-[#33C3F0] hover:bg-[#29a7d0] text-white">Book Now</Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          'fixed top-0 right-0 h-screen w-3/4 bg-white shadow-xl pt-24 px-8 transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6">
          <Link
            to="/"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button 
            className="bg-[#33C3F0] hover:bg-[#29a7d0] text-white mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Button>
        </div>
      </div>
      
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
