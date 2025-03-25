
import React from 'react';
import { Phone, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ContactInfo = ({ icon: Icon, title, content, className, contentClass }: { icon: any, title: string, content: React.ReactNode, className?: string, contentClass?: string }) => (
  <div className="flex items-start space-x-3">
    <div className={cn("flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center", className)}>
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <div className={cn("text-muted-foreground", contentClass)}>{content}</div>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="section relative">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-laundry-100 text-laundry-800 text-sm font-medium mb-2">
              Get In Touch
            </div>
            <h2 className="section-title">Contact Us</h2>
            <p className="text-muted-foreground">
              Have questions about our services or want to schedule a pickup? Reach out to us and we'll be happy to help.
            </p>
            
            {/* Receptionist Photo */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Our friendly receptionist ready to assist you" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">Our friendly staff is ready to assist you</p>
                  <p className="text-sm opacity-80">Quick responses to all your inquiries</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 pt-4">
              <ContactInfo 
                icon={Phone} 
                title="Phone" 
                content={
                  <div className="space-y-1">
                    <p>(630) 178-4568</p>
                    <p>9059986023</p>
                    <p>08663581183</p>
                  </div>
                } 
                className="bg-laundry-500"
              />
              <ContactInfo 
                icon={Mail} 
                title="Email" 
                content="cs.momslaundry@gmail.com" 
                className="bg-blue-500"
              />
              <ContactInfo 
                icon={MapPin} 
                title="Main Branch" 
                content="Back Side, 4, 179/2, Chinmaya Dhyana Mandir St, Ramavarappadu, Vijayawada, Andhra Pradesh 521108" 
                className="bg-emerald-500"
              />
              <ContactInfo 
                icon={MapPin} 
                title="Sub Branch" 
                content="Rajasree Towers, Shop No.11, Kamayyathopu, Vijayawada-7" 
                className="bg-purple-500"
              />
              <ContactInfo 
                icon={Clock} 
                title="Business Hours" 
                content="MON-SAT: 8AM-8PM, Sunday: Closed" 
                className="bg-amber-500"
              />
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-laundry-100 to-laundry-200 rounded-2xl blur-md opacity-70"></div>
            <div className="glass-panel p-8 relative">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full bg-laundry-500 hover:bg-laundry-600 text-white">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
