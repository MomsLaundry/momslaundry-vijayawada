
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const PricingCard = ({ title, price, features, isPopular, buttonText = "Choose Plan" }: { 
  title: string, 
  price: string, 
  features: string[], 
  isPopular?: boolean,
  buttonText?: string
}) => (
  <div className={`bg-white rounded-xl overflow-hidden border ${isPopular ? 'border-laundry-500 shadow-lg' : 'border-gray-200'} relative`}>
    {isPopular && (
      <div className="absolute top-0 inset-x-0 bg-laundry-500 text-white text-center py-1 text-sm font-medium">
        Most Popular
      </div>
    )}
    <div className={`p-8 ${isPopular ? 'pt-12' : ''}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">₹{price}</span>
        <span className="text-muted-foreground">/kg</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-laundry-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${isPopular ? 'bg-laundry-500 hover:bg-laundry-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
        {buttonText}
      </Button>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 flex-1">
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
              <p className="text-lg text-muted-foreground">
                Choose the right laundry plan for your needs. All plans include free pickup and delivery within Vijayawada.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard 
                title="Basic Wash & Fold" 
                price="60" 
                features={[
                  "Wash & Fold Service",
                  "Free Pickup & Delivery",
                  "72-hour Turnaround",
                  "Basic Stain Treatment",
                  "Eco-friendly Detergents"
                ]}
              />
              
              <PricingCard 
                title="Premium Care" 
                price="80" 
                features={[
                  "Premium Wash & Fold",
                  "Free Pickup & Delivery",
                  "48-hour Turnaround",
                  "Advanced Stain Treatment",
                  "Premium Detergents & Softeners",
                  "Garment Pressing Included"
                ]}
                isPopular
              />
              
              <PricingCard 
                title="Executive Service" 
                price="100" 
                features={[
                  "Executive Wash & Fold",
                  "Priority Pickup & Delivery",
                  "24-hour Express Turnaround",
                  "Professional Stain Removal",
                  "Premium Products & Pressing",
                  "Garment Repairs Included",
                  "Shoe Cleaning Discount"
                ]}
              />
            </div>
            
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8 text-center">Additional Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { service: "Dry Cleaning", price: "Starting at ₹200/item" },
                  { service: "Garment Pressing Only", price: "₹40/item" },
                  { service: "Shoe Cleaning", price: "₹150/pair" },
                  { service: "Express 4-hour Service", price: "+₹100 surcharge" },
                  { service: "Bedding & Linens", price: "₹80/kg" },
                  { service: "Curtains & Drapes", price: "₹90/kg" },
                  { service: "Minor Repairs", price: "Starting at ₹50" },
                  { service: "Stain Removal", price: "Starting at ₹70" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium mb-2">{item.service}</h3>
                    <p className="text-laundry-600 font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 bg-laundry-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Corporate Packages</h3>
              <p className="mb-4">
                We offer special pricing for businesses, hotels, and corporate clients. Contact us for customized quotes and service plans tailored to your specific needs.
              </p>
              <Button className="bg-laundry-500 hover:bg-laundry-600">Contact for Corporate Rates</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
