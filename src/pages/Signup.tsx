
import React from 'react';
import SignupForm from '@/components/auth/SignupForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-md w-full glass-card p-8">
        <div className="text-center mb-10">
          <Link to="/" className="text-4xl font-bold text-green-600">
            Time for Me
          </Link>
          <p className="mt-2 text-gray-600">Create an account to get started.</p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
