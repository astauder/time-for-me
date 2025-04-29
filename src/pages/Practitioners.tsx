
import React from 'react';
import Navbar from '@/components/Navbar';
import PractitionersList from '@/components/practitioners/PractitionersList';

const Practitioners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <Navbar isLoggedIn={false} />
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Mental Health Practitioners</h1>
          <p className="text-xl text-gray-600">
            Connect with experienced mental health professionals who can help you on your journey to wellness.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <PractitionersList />
        </div>
      </div>
    </div>
  );
};

export default Practitioners;
