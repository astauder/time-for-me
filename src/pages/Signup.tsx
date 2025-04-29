
import React from 'react';
import SignupForm from '@/components/auth/SignupForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-teal-50">
      <div className="max-w-md w-full glass-card p-8">
        <div className="text-center mb-10">
          <Link to="/" className="inline-block">
            <img
              src="/lovable-uploads/bab09f2b-2d9c-4edd-a7da-69957efd3cc5.png"
              alt="Time for Me Logo"
              className="h-16 w-auto mx-auto"
            />
          </Link>
          <p className="mt-4 text-gray-600">Create an account to get started.</p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
