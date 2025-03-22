
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Award, Clock, Map, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleViewServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section - Redesigned with professional imagery */}
      <div className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-laundry-50 to-white z-0 opacity-70"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-laundry-100 rounded-full blur-3xl opacity-60 z-0"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-laundry-200 rounded-full blur-3xl opacity-40 z-0"></div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-laundry-100 text-laundry-800 text-sm font-medium mb-2 w-fit">
              <span className="mr-1">⭐️</span> Premium Laundry Service in Vijayawada
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Pristine Clothes, <br />
              <span className="text-laundry-600">Happy Customers</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Mom's Laundry brings professional care to your wardrobe with our premium wash, dry, and fold services in Vijayawada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-laundry-500 hover:bg-laundry-600 text-white font-medium">
                Book a Pickup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-laundry-300 text-laundry-700 hover:bg-laundry-50" onClick={handleViewServices}>
                View Services
              </Button>
            </div>
            
            <div className="flex items-center pt-6 space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-laundry-100 flex items-center justify-center text-laundry-500 font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">400+</span> happy customers in Vijayawada
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-laundry-200 to-laundry-400 opacity-75 blur"></div>
              <div className="glass-panel p-8 relative animate-fade-in-up delay-100">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Woman with freshly laundered clothes" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-4 text-center">Fresh & Clean Guarantee</h3>
                <p className="text-center text-muted-foreground mb-6">
                  We treat every piece of clothing with care, as if it were our own. Your satisfaction is our top priority.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
                    <div className="font-bold text-2xl text-laundry-700">24h</div>
                    <div className="text-sm text-muted-foreground">Turnaround</div>
                  </div>
                  <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
                    <div className="font-bold text-2xl text-laundry-700">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features section with imagery */}
      <div className="bg-white py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Mom's Laundry?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine professional expertise with personalized care to deliver the best laundry experience in Vijayawada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Get your clean clothes back within 24 hours, perfect for busy professionals and families.",
                image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "We use high-quality products and professional-grade machines for superior results.",
                image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                icon: Map,
                title: "Convenient Pickup",
                description: "Free pickup and delivery throughout Vijayawada, saving you time and hassle.",
                image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm hover-lift overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-laundry-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-laundry-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonial section */}
      <div className="bg-laundry-50 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-laundry-100 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-laundry-200 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl opacity-40"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what the people of Vijayawada have to say about Mom's Laundry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Reddy",
                role: "Working Professional",
                quote: "Mom's Laundry has been a lifesaver. Their pickup service and same-day turnaround means I always have clean clothes for work without spending my weekend doing laundry.",
                rating: 5
              },
              {
                name: "Ajay Kumar",
                role: "Restaurant Owner",
                quote: "We trust Mom's Laundry with all our restaurant linens. Their attention to stain removal and crisp folding keeps our restaurant looking professional.",
                rating: 5
              },
              {
                name: "Sneha Patel",
                role: "Mother of Three",
                quote: "With three kids, laundry was taking over my life. Mom's Laundry handles everything from school uniforms to delicates with care. Highly recommend!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-laundry-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-laundry-700 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section before going to other sections */}
      <div className="bg-white py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-laundry-500 to-laundry-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Freshly Cleaned Clothes?</h2>
                <p className="text-laundry-50 mb-8 text-lg">
                  Experience the Mom's Laundry difference today. First-time customers receive 20% off their first order.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-laundry-600 hover:bg-laundry-50">
                    Book a Pickup
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-laundry-600">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Neatly folded laundry" 
                  className="rounded-xl w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This is where the ServicesSection will render as imported in Index.tsx */}
      <div id="services">
        {/* ServicesSection will be here */}
      </div>

      {/* This is where the AboutSection will render as imported in Index.tsx */}
      <div id="about">
        {/* AboutSection will be here */}
      </div>

      {/* This is where the ContactSection will render as imported in Index.tsx */}
      <div id="contact">
        {/* ContactSection will be here */}
      </div>
    </>
  );
};

export default HomePage;
