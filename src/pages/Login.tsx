
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <p className="mt-4 text-gray-600">Welcome back! Please sign in to continue.</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
