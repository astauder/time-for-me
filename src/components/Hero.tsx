
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28 text-center">
        <div>
          <img alt="Time for Me Logo" className="mx-auto h-[110px] mb-6" src="/lovable-uploads/7e950228-2a60-42b4-928c-a6e6df1fbdcf.png" />
          <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-blue-700 sm:mt-5 sm:text-5xl lg:mt-6">
            <span className="block">Nook your Health and Support</span>
            <span className="block text-blue-500">appointments online</span>
          </h1>
          <p className="mt-3 mx-auto max-w-2xl text-base text-gray-500 sm:mt-5 sm:text-lg">
            Find the right mental health professional, book appointments, and manage your mental wellness journey all in one place.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <Link to="/practitioners">
                <Button className="w-full flex items-center justify-center px-8 py-6 text-base font-medium bg-blue-400 hover:bg-blue-500">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an appointment
                </Button>
              </Link>
            </div>
            <div className="mt-0 ml-3">
              <Link to="/about">
                <Button variant="outline" className="w-full flex items-center justify-center px-8 py-6 text-base font-medium border-blue-400 text-blue-500 hover:bg-blue-400 hover:text-white">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Hero;
