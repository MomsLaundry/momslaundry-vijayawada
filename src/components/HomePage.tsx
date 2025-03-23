import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Award, Clock, Map, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const HomePage = () => {
  // Customer pickup form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Define the form schema
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    mobile: z.string().min(10, { message: "Please enter a valid mobile number." }),
    location: z.string().min(2, { message: "Location is required." }),
    address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  });
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      location: "",
      address: "",
    },
  });
  
  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000); // Reset after 3 seconds
    form.reset();
  };

  return (
    <>
      {/* Hero Section - Women-focused laundry theme */}
      <div className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-laundry-50 to-white z-0 opacity-70"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-laundry-100 rounded-full blur-3xl opacity-60 z-0"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-laundry-200 rounded-full blur-3xl opacity-40 z-0"></div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-laundry-100 text-laundry-800 text-sm font-medium mb-2 w-fit">
              <span className="mr-1">⭐️</span> Premium Women-Owned Laundry Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Laundry Care <br />
              <span className="text-laundry-600">By Women, For Everyone</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Mom's Laundry brings a woman's touch to professional care for your wardrobe with our premium services in Vijayawada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-laundry-500 hover:bg-laundry-600 text-white font-medium">
                Book a Pickup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-laundry-300 text-laundry-700 hover:bg-laundry-50">
                <Link to="/services">View Services</Link>
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
                  src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Woman with laundry clothes" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-4 text-center">The Woman's Touch Guarantee</h3>
                <p className="text-center text-muted-foreground mb-6">
                  We treat every piece of clothing with a mother's care and attention to detail that only women can provide.
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
      
      {/* Customer Pickup Request Section */}
      <div className="bg-white py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Pickup</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill in your details below and we'll schedule a pickup from your location at your convenience.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto shadow-md">
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>
                Enter your details for laundry pickup service
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your contact number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Your area in Vijayawada" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Your complete address for pickup" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-laundry-500 hover:bg-laundry-600 text-white font-medium"
                  >
                    Schedule Pickup
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                  
                  {formSubmitted && (
                    <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      <span>Thank you! We'll contact you shortly to confirm your pickup.</span>
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
            
            <CardFooter className="flex justify-between text-sm text-muted-foreground">
              <p>Your data is secure and will only be used for pickup scheduling.</p>
            </CardFooter>
          </Card>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-4">Our Service Locations in Vijayawada</p>
            <div className="inline-flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-laundry-50 text-laundry-700 rounded-full">Main Branch</span>
              <span className="px-3 py-1 bg-laundry-50 text-laundry-700 rounded-full">Gurunanak Colony</span>
              <span className="px-3 py-1 bg-laundry-50 text-laundry-700 rounded-full">Kamayyathopu</span>
              <span className="px-3 py-1 bg-laundry-50 text-laundry-700 rounded-full">City Center</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features section with services imagery */}
      <div className="bg-laundry-50 py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience our specialized laundry services with a woman's attention to detail and care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Garment Pressing",
                description: "Professional pressing for all your garments to give them that crisp, wrinkle-free finish.",
                image: "https://images.unsplash.com/photo-1514163061636-02db31852e84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Pickup & Delivery",
                description: "Free doorstep pickup and delivery throughout Vijayawada for your convenience.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Express Service",
                description: "Same-day turnaround when you need your clothes cleaned in a hurry.",
                image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Shoe Cleaning",
                description: "Professional shoe cleaning and restoration to keep your footwear looking brand new.",
                image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm hover-lift overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-laundry-600 font-medium hover:text-laundry-700 flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonial section */}
      <div className="bg-white py-24 px-6 relative overflow-hidden">
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

      {/* CTA Section */}
      <div className="bg-laundry-50 py-24 px-6">
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
                  src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Woman with laundry" 
                  className="rounded-xl w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
