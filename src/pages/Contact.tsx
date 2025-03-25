
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { BadgeCheck, Award, Clock, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            Have questions or need to schedule a pickup? Our customer service team is here to help you with all your laundry needs.
          </p>
          
          {/* Why We're the Best Section */}
          <div className="mb-16 bg-gradient-to-r from-laundry-50 to-laundry-100 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Why We're the Best Choice</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg">
                  With over 10 years of experience in the laundry industry, Mom's Laundry Service has become the trusted name for families and businesses across Vijayawada. Our commitment to excellence, attention to detail, and personalized service sets us apart from the competition.
                </p>
                <p className="text-lg">
                  We use eco-friendly detergents and state-of-the-art equipment to ensure your clothes are treated with the utmost care while minimizing our environmental impact. Our team of trained professionals handles each garment with precision, ensuring it comes back to you in pristine condition.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BadgeCheck className="h-6 w-6 text-laundry-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-xl">Premium Quality</h3>
                    <p className="text-muted-foreground">Superior cleaning with attention to every detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-laundry-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-xl">Experienced Team</h3>
                    <p className="text-muted-foreground">Skilled professionals with years of expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-laundry-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-xl">Quick Turnaround</h3>
                    <p className="text-muted-foreground">Express service available when you need it fast</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-6 w-6 text-laundry-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-xl">Safe Handling</h3>
                    <p className="text-muted-foreground">Your garments are treated with utmost care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
