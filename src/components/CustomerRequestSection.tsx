
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CheckCircle, MapPin, Phone, User, Home } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CustomerRequestSection = () => {
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
    <div id="request-pickup" className="bg-gradient-to-b from-white to-laundry-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Pickup</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill in your details below and we'll schedule a pickup from your location at your convenience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">How It Works</h3>
              
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Submit Request",
                    description: "Fill in your details in the form and submit your pickup request."
                  },
                  {
                    step: 2,
                    title: "Schedule Confirmation",
                    description: "Our team will call you to confirm your pickup time."
                  },
                  {
                    step: 3,
                    title: "Doorstep Pickup",
                    description: "We'll arrive at your location and collect your items."
                  },
                  {
                    step: 4,
                    title: "Expert Cleaning",
                    description: "Your clothes receive premium care with our expert service."
                  },
                  {
                    step: 5,
                    title: "Delivery",
                    description: "Clean, fresh clothes delivered back to your doorstep."
                  }
                ].map((item) => (
                  <div key={item.step} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-laundry-100 flex items-center justify-center text-laundry-700 font-semibold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Card className="md:col-span-3 shadow-xl border-laundry-100 order-1 md:order-2">
            <CardHeader className="bg-laundry-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Customer Information</CardTitle>
              <CardDescription className="text-laundry-50">
                Enter your details for laundry pickup service
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input placeholder="Your full name" className="pl-10" {...field} />
                            </div>
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
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input placeholder="Your contact number" className="pl-10" {...field} />
                            </div>
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
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Your area in Vijayawada" className="pl-10" {...field} />
                          </div>
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
                          <div className="relative">
                            <Home className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Your complete address for pickup" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-4 bg-laundry-500 hover:bg-laundry-600 text-white font-medium h-12"
                  >
                    Schedule Pickup
                  </Button>
                  
                  {formSubmitted && (
                    <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md flex items-center border border-green-200">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      <span>Thank you! We'll contact you shortly to confirm your pickup.</span>
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
            
            <CardFooter className="bg-laundry-50 text-sm text-muted-foreground rounded-b-lg border-t border-laundry-100 p-4">
              <div className="flex items-center w-full justify-between">
                <p>Your data is secure and will only be used for pickup scheduling.</p>
                <div className="flex gap-2">
                  <img src="/visa.svg" alt="Visa" className="h-5" />
                  <img src="/mastercard.svg" alt="Mastercard" className="h-5" />
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-4">Our Service Locations in Vijayawada</p>
          <div className="inline-flex flex-wrap justify-center gap-2">
            <span className="px-4 py-2 bg-white shadow-sm text-laundry-700 rounded-full border border-laundry-100">Main Branch</span>
            <span className="px-4 py-2 bg-white shadow-sm text-laundry-700 rounded-full border border-laundry-100">Gurunanak Colony</span>
            <span className="px-4 py-2 bg-white shadow-sm text-laundry-700 rounded-full border border-laundry-100">Kamayyathopu</span>
            <span className="px-4 py-2 bg-white shadow-sm text-laundry-700 rounded-full border border-laundry-100">City Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRequestSection;
