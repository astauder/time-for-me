
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface PractitionerCardProps {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  imageUrl: string;
  clinic: string;
  location: string;
  nextAvailable: string;
}

const PractitionerCard: React.FC<PractitionerCardProps> = ({
  id,
  name,
  title,
  specialties,
  imageUrl,
  clinic,
  location,
  nextAvailable,
}) => {
  // Extract initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center">
          <Avatar className="w-20 h-20 rounded-full border-2 border-blue-400 mr-4">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold text-navy-900">{name}</h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-700 font-medium">{clinic}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-700 font-medium">Specializes in:</p>
          <div className="mt-1 flex flex-wrap gap-1">
            {specialties.map((specialty, index) => (
              <span 
                key={index}
                className="inline-flex text-xs bg-blue-100 text-blue-800 rounded px-2 py-1"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Next available</p>
            <p className="text-sm font-medium text-gray-900">{nextAvailable}</p>
          </div>
          
          <Link to={`/book/${id}`}>
            <Button className="bg-secondary hover:bg-secondary/80 text-navy-900">
              <Calendar className="mr-2 h-4 w-4" />
              Book
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PractitionerCard;
