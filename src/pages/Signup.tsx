
import React from 'react';
import SignupForm from '@/components/auth/SignupForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-sky-600">
            Time for Me
          </Link>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
