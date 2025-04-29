
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Here you would integrate with Supabase Auth
      console.log('Signing up with:', fullName, email, password);
      
      // For demo purposes, we'll just show a toast
      toast({
        title: "Success",
        description: "Signup functionality will be connected to Supabase Auth.",
      });

      // Reset form
      setFullName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Error",
        description: "Failed to sign up. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-sky-600 hover:text-sky-500">
            Sign in
          </Link>
        </p>
      </div>
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="full-name">Full Name</Label>
            <Input
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1"
              placeholder="••••••••"
            />
            <p className="mt-1 text-xs text-gray-500">
              Must be at least 8 characters long
            </p>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700"
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>
        
        <p className="text-xs text-center text-gray-500">
          By creating an account, you agree to our{' '}
          <Link to="/terms" className="text-sky-600 hover:text-sky-500">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-sky-600 hover:text-sky-500">
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
