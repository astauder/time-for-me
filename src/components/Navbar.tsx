
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Calendar, Search } from 'lucide-react';

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-sky-600">Time for Me</span>
            </Link>
          </div>
          
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sky-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/practitioners" className="text-gray-700 hover:text-sky-600 px-3 py-2 text-sm font-medium">
              Practitioners
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-sky-600 px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-sky-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/appointments" className="text-gray-700 hover:text-sky-600">
                  <Calendar className="h-5 w-5" />
                </Link>
                <Link to="/search" className="text-gray-700 hover:text-sky-600">
                  <Search className="h-5 w-5" />
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-sky-600">
                  <User className="h-5 w-5" />
                </Link>
              </>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button variant="outline" className="text-sm">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-sky-600 hover:bg-sky-700 text-sm">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
