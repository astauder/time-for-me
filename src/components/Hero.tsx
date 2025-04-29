
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-navy-900 sm:mt-5 sm:text-5xl lg:mt-6">
              <span className="block">Book your mental health</span>
              <span className="block text-teal-500">appointments online</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
              Find the right mental health professional, book appointments, and manage your mental wellness journey all in one place.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="/practitioners">
                  <Button className="w-full flex items-center justify-center px-8 py-6 text-base font-medium bg-navy-900 hover:bg-navy-800">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book an appointment
                  </Button>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link to="/about">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-6 text-base font-medium border-navy-900 text-navy-900">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-7">
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                src="/lovable-uploads/6f8b83c2-1adc-487b-a74c-a92f1cf8b93b.png"
                alt="Sky Therapy counselling session"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
