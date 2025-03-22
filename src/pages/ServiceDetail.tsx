
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '@/components/ServicesSection';
import { ArrowLeft, Check } from 'lucide-react';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<typeof services[0] | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the service based on the ID from URL params
    const foundService = services.find(s => s.id === serviceId);
    if (foundService) {
      setService(foundService);
    } else {
      // Redirect to services section if service is not found
      navigate('/#services');
    }
  }, [serviceId, navigate]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Loading service details...</h2>
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{service.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Button 
            variant="outline" 
            className="mb-6"
            onClick={() => navigate('/#services')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">
                {service.description}
              </p>

              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Detailed Description</h2>
                <p className="text-muted-foreground">{service.detailContent}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Our Process</h3>
                  <ol className="space-y-3">
                    {service.process.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-3 shrink-0">
                          <Check className="h-5 w-5" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <Button className="bg-laundry-500 hover:bg-laundry-600 text-white">
                  Book This Service
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={service.detailImage} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
