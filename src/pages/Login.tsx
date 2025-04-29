
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-md w-full glass-card p-8">
        <div className="text-center mb-10">
          <Link to="/" className="text-4xl font-bold text-green-600">
            Time for Me
          </Link>
          <p className="mt-2 text-gray-600">Welcome back! Please sign in to continue.</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
