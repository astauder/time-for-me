
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Mock time slots
const generateTimeSlots = (date: Date | undefined) => {
  if (!date) return [];
  
  // Generate different availability patterns based on the day of week
  const day = date.getDay();
  const baseHours = day === 0 ? [] : day === 6 ? [9, 10, 11] : [9, 10, 11, 13, 14, 15, 16];
  
  return baseHours.map(hour => ({
    id: `${hour}`,
    time: `${hour}:00`,
    available: Math.random() > 0.3, // Randomly make some slots unavailable
  }));
};

const AppointmentScheduler = () => {
  const { practitionerId } = useParams<{ practitionerId: string }>();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<Array<{ id: string; time: string; available: boolean }>>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Find the practitioner (this would come from API/database in a real app)
  const practitioner = {
    id: practitionerId,
    name: 'Zane Soblusky',
    title: 'Mental Health Counselor',
    clinic: 'Sky Therapy',
    imageUrl: '/lovable-uploads/3b18ff63-26a6-4038-ba8b-c361e15ea4fb.png',
  };

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    setSelectedTimeSlot(null);
    setTimeSlots(generateTimeSlots(newDate));
  };

  const handleTimeSlotSelect = (slotId: string) => {
    setSelectedTimeSlot(slotId);
  };

  const handleBookAppointment = () => {
    if (!date || !selectedTimeSlot) return;
    
    // Here you would integrate with Supabase to store the appointment
    const appointmentDetails = {
      practitionerId,
      date: format(date, 'yyyy-MM-dd'),
      time: timeSlots.find(slot => slot.id === selectedTimeSlot)?.time,
    };
    
    console.log('Booking appointment:', appointmentDetails);
    
    toast({
      title: "Appointment Booked!",
      description: `Your appointment with ${practitioner.name} on ${format(date, 'MMMM d, yyyy')} at ${timeSlots.find(slot => slot.id === selectedTimeSlot)?.time} has been confirmed.`,
    });
    
    navigate('/appointments');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Book an Appointment</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Practitioner info */}
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle>Practitioner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <img 
                src={practitioner.imageUrl}
                alt={practitioner.name}
                className="w-16 h-16 rounded-full object-cover mr-4" 
              />
              <div>
                <h3 className="font-medium">{practitioner.name}</h3>
                <p className="text-sm text-gray-500">{practitioner.title}</p>
                <p className="text-sm text-gray-500">{practitioner.clinic}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Calendar */}
        <Card className="md:w-2/3">
          <CardHeader>
            <CardTitle>Select Date & Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  className="rounded-md border"
                  disabled={{ before: new Date() }}
                />
              </div>
              
              <div className="md:w-1/2">
                <h3 className="font-medium mb-4">
                  {date ? `Available times for ${format(date, 'MMMM d, yyyy')}` : 'Select a date to see available times'}
                </h3>
                
                {timeSlots.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.id}
                        variant={selectedTimeSlot === slot.id ? "default" : "outline"}
                        className={!slot.available ? "opacity-50 cursor-not-allowed" : ""}
                        onClick={() => slot.available && handleTimeSlotSelect(slot.id)}
                        disabled={!slot.available}
                      >
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                ) : (
                  date && <p className="text-gray-500">No available times for this date.</p>
                )}
                
                {date && selectedTimeSlot && (
                  <Button 
                    onClick={handleBookAppointment}
                    className="mt-6 w-full bg-sky-600 hover:bg-sky-700"
                  >
                    Confirm Appointment
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
