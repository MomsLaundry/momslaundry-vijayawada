
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter text-laundry-700">
              Mom's<span className="text-laundry-500">Laundry</span>
            </h3>
            <p className="text-muted-foreground">
              Professional laundry services with a personal touch. Your clothes deserve the best care.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-laundry-100 text-laundry-500 flex items-center justify-center hover:bg-laundry-200 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-laundry-100 text-laundry-500 flex items-center justify-center hover:bg-laundry-200 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-laundry-100 text-laundry-500 flex items-center justify-center hover:bg-laundry-200 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Wash & Fold</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Dry Cleaning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Stain Removal</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Garment Pressing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Pickup & Delivery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-laundry-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-laundry-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-laundry-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mom's Laundry. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Designed with care, just like our laundry service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
