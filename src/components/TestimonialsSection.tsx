
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Reddy",
              role: "Working Professional",
              quote: "Mom's Laundry has been a lifesaver. Their pickup service and same-day turnaround means I always have clean clothes for work without spending my weekend doing laundry.",
              rating: 5,
              image: "https://randomuser.me/api/portraits/women/42.jpg"
            },
            {
              name: "Ajay Kumar",
              role: "Restaurant Owner",
              quote: "We trust Mom's Laundry with all our restaurant linens. Their attention to stain removal and crisp folding keeps our restaurant looking professional.",
              rating: 5,
              image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              name: "Sneha Patel",
              role: "Mother of Three",
              quote: "With three kids, laundry was taking over my life. Mom's Laundry handles everything from school uniforms to delicates with care. Highly recommend!",
              rating: 5,
              image: "https://randomuser.me/api/portraits/women/68.jpg"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
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
  );
};

export default TestimonialsSection;
