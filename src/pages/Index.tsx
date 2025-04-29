
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PractitionersList from '@/components/practitioners/PractitionersList';
import { Button } from '@/components/ui/button';

const Index = () => {
  // In a real app, this would come from auth context
  const [isLoggedIn] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isLoggedIn={isLoggedIn} />
      <Hero />
      
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Time for Me?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-sky-100 text-sky-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book appointments online 24/7 without the need to call during business hours.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-sky-100 text-sky-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
              <p className="text-gray-600">Your mental health journey is private. Our platform ensures your data is secure and confidential.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-sky-100 text-sky-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Appointment Reminders</h3>
              <p className="text-gray-600">Never miss a session with automated reminders via email or text message.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gradient-to-r from-sky-50 to-indigo-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sky Therapy Featured Practitioners</h2>
          <p className="text-xl text-gray-600 mb-10">
            Find the right mental health professional to help you on your journey to wellness.
          </p>
        </div>
        <PractitionersList />
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to prioritize your mental health?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental wellbeing by booking an appointment with one of our experienced practitioners.
          </p>
          <Button className="bg-sky-600 hover:bg-sky-700 text-lg px-8 py-6">Get Started Today</Button>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Time for Me</h3>
              <p className="text-gray-400">
                Making mental health care accessible and convenient.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Find a Practitioner</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Mental Health Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Time for Me. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
