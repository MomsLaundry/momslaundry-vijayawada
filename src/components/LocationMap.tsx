
import React from 'react';

const LocationMap = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden border-4 border-[#33C3F0]/20">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.321326001704!2d80.6490141748637!3d16.510841083243895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fab1a009147f%3A0xbce089e9587d89cc!2sChinnawaltair%2C%20Ramavarappadu%2C%20Andhra%20Pradesh%20521108%2C%20India!5e0!3m2!1sen!2sus!4v1694783493101!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Mom's Laundry Location"
        className="w-full h-full"
      />
    </div>
  );
};

export default LocationMap;
