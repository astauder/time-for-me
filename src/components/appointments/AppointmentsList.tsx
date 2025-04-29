
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface Appointment {
  id: string;
  practitionerId: string;
  practitionerName: string;
  practitionerTitle: string;
  practitionerImage: string;
  clinic: string;
  date: Date;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

// Mock appointments data
const appointments: Appointment[] = [
  {
    id: 'apt-1',
    practitionerId: '1',
    practitionerName: 'Dr. Farzad Vasei',
    practitionerTitle: 'General Practitioner, Male, FRACGP, MD',
    practitionerImage: '/lovable-uploads/3b18ff63-26a6-4038-ba8b-c361e15ea4fb.png',
    clinic: 'Sky Therapy',
    date: new Date(2025, 4, 5), // May 5, 2025
    time: '10:00 AM',
    status: 'upcoming',
  },
  {
    id: 'apt-2',
    practitionerId: '2',
    practitionerName: 'Dr. Sarah Johnson',
    practitionerTitle: 'Clinical Psychologist',
    practitionerImage: '/lovable-uploads/491cb860-4ba9-4d0e-be16-0c6e20b9dd2e.png',
    clinic: 'Mindful Psychology',
    date: new Date(2025, 3, 20), // April 20, 2025
    time: '2:30 PM',
    status: 'completed',
  }
];

const AppointmentsList = () => {
  const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');
  const pastAppointments = appointments.filter(apt => apt.status !== 'upcoming');
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
        <Link to="/practitioners">
          <Button className="bg-green-600 hover:bg-green-700">
            <Calendar className="mr-2 h-4 w-4" />
            Book New Appointment
          </Button>
        </Link>
      </div>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={appointment.practitionerImage} 
                          alt={appointment.practitionerName} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-900">{appointment.practitionerName}</h3>
                          <p className="text-sm text-gray-500">{appointment.practitionerTitle}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center text-gray-700 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{format(appointment.date, 'MMMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <Button variant="outline">Reschedule</Button>
                      <Button variant="outline" className="text-red-600 hover:bg-red-50">Cancel</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No upcoming appointments</p>
              <Link to="/practitioners">
                <Button variant="link" className="text-green-600">Book an appointment</Button>
              </Link>
            </div>
          )}
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Past Appointments</h2>
          {pastAppointments.length > 0 ? (
            <div className="space-y-4">
              {pastAppointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={appointment.practitionerImage} 
                          alt={appointment.practitionerName} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-900">{appointment.practitionerName}</h3>
                          <p className="text-sm text-gray-500">{appointment.practitionerTitle}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center text-gray-700 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{format(appointment.date, 'MMMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">Book Again</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No past appointments</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AppointmentsList;
