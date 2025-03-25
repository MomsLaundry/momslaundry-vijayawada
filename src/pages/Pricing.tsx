
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, ArrowRight, Shield, Clock, Star, Award, BadgeDollarSign, BadgePercent, ShieldCheck, Tag } from 'lucide-react';

const ProfessionalServiceCard = ({ 
  title, 
  description, 
  features, 
  imageUrl, 
  isPremium 
}: { 
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  isPremium?: boolean;
}) => (
  <Card className={`overflow-hidden h-full ${isPremium ? 'border-laundry-500' : 'border-gray-200'} transition-all duration-300 hover:shadow-lg relative`}>
    {isPremium && (
      <div className="absolute top-0 right-0 bg-laundry-500 text-white py-1 px-3 text-xs font-medium z-10 rounded-bl-lg">
        Premium Service
      </div>
    )}
    <div className="h-48 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
      />
    </div>
    <CardHeader className="pb-2">
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-laundry-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${isPremium ? 'bg-laundry-500 hover:bg-laundry-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
        Inquire for Pricing <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
);

const ServiceComparisonSection = () => (
  <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-sm">
    <h2 className="text-2xl font-bold mb-4 text-center">Service Comparison</h2>
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-laundry-50">
            <TableHead className="w-[250px] text-laundry-700">Service Features</TableHead>
            <TableHead className="text-laundry-700">Basic</TableHead>
            <TableHead className="text-laundry-700">Premium</TableHead>
            <TableHead className="text-laundry-700">Executive</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Turnaround Time</TableCell>
            <TableCell>Standard</TableCell>
            <TableCell className="bg-laundry-50">Express</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Stain Treatment</TableCell>
            <TableCell>Basic</TableCell>
            <TableCell className="bg-laundry-50">Advanced</TableCell>
            <TableCell>Professional</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Fabric Care</TableCell>
            <TableCell>Standard</TableCell>
            <TableCell className="bg-laundry-50">Premium</TableCell>
            <TableCell>Executive</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Pickup & Delivery</TableCell>
            <TableCell>Included</TableCell>
            <TableCell className="bg-laundry-50">Included</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Garment Pressing</TableCell>
            <TableCell>Basic</TableCell>
            <TableCell className="bg-laundry-50">Included</TableCell>
            <TableCell>Premium</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Garment Repairs</TableCell>
            <TableCell>Not Included</TableCell>
            <TableCell className="bg-laundry-50">Additional Fee</TableCell>
            <TableCell>Included</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Special Detergents</TableCell>
            <TableCell>Eco-friendly</TableCell>
            <TableCell className="bg-laundry-50">Premium</TableCell>
            <TableCell>Premium+</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
);

const WhyChooseUsSection = () => (
  <div className="mt-16 grid md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
      <div className="bg-laundry-50 p-3 rounded-full mb-4">
        <ShieldCheck className="h-6 w-6 text-laundry-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
      <p className="text-gray-600">We use top-tier equipment and products to ensure your garments receive the best care possible.</p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
      <div className="bg-laundry-50 p-3 rounded-full mb-4">
        <Clock className="h-6 w-6 text-laundry-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Timely Service</h3>
      <p className="text-gray-600">We value your time and ensure your laundry is processed and delivered according to schedule.</p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
      <div className="bg-laundry-50 p-3 rounded-full mb-4">
        <Award className="h-6 w-6 text-laundry-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Expert Care</h3>
      <p className="text-gray-600">Our professionals are trained to handle all types of fabrics with the specific care they require.</p>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 flex-1">
        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Professional Laundry Services</h1>
              <p className="text-lg text-muted-foreground">
                Experience the difference with our premium laundry care. Custom solutions tailored to your specific needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ProfessionalServiceCard 
                title="Basic Care Service" 
                description="Essential laundry care for everyday items"
                features={[
                  "Professional Wash & Fold",
                  "Free Pickup & Delivery",
                  "Eco-friendly Detergents",
                  "Basic Stain Treatment",
                  "Satisfaction Guaranteed"
                ]}
                imageUrl="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
              
              <ProfessionalServiceCard 
                title="Premium Care Service" 
                description="Enhanced care for your valuable garments"
                features={[
                  "Premium Wash & Fold",
                  "Free Pickup & Delivery",
                  "Advanced Stain Treatment",
                  "Premium Detergents",
                  "Garment Pressing Included",
                  "Extended Fabric Protection"
                ]}
                imageUrl="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                isPremium
              />
              
              <ProfessionalServiceCard 
                title="Executive Service" 
                description="Luxury treatment for premium garments"
                features={[
                  "Executive Wash & Fold",
                  "Priority Pickup & Delivery",
                  "Professional Stain Removal",
                  "Premium Products & Pressing",
                  "Garment Repairs Included",
                  "Personalized Care Instructions",
                  "VIP Customer Support"
                ]}
                imageUrl="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
            </div>
            
            <ServiceComparisonSection />
            
            <WhyChooseUsSection />
            
            <div className="mt-16 bg-laundry-50 p-8 rounded-xl text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <BadgeDollarSign className="h-8 w-8 text-laundry-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Corporate & Bulk Service Solutions</h3>
              <p className="mb-6 max-w-3xl mx-auto">
                We offer tailored solutions for businesses, hotels, and corporate clients. Our team will create a custom service plan to meet your organization's specific requirements and volume needs.
              </p>
              <Button className="bg-laundry-500 hover:bg-laundry-600">
                Request a Custom Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
