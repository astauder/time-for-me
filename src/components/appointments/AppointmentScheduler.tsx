
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { format, addDays } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight } from 'lucide-react';

const AppointmentScheduler = () => {
  const { practitionerId } = useParams<{ practitionerId: string }>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Find the practitioner (this would come from API/database in a real app)
  const practitioner = {
    id: practitionerId || '1',
    name: 'Dr. Farzad Vasei',
    title: 'General Practitioner, Male, FRACGP, MD',
    clinic: 'Sky Therapy',
    imageUrl: '/lovable-uploads/3b18ff63-26a6-4038-ba8b-c361e15ea4fb.png',
  };

  // Generate dates for next 7 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = addDays(today, i);
      dates.push(date);
    }
    
    return dates;
  };

  // Generate time slots
  const generateTimeSlots = () => {
    // This would come from an API based on practitioner availability
    return [
      { id: '1', time: '8:10 am', available: true },
      { id: '2', time: '8:50 am', available: true },
      { id: '3', time: '9:30 am', available: false },
      { id: '4', time: '10:10 am', available: true },
      { id: '5', time: '10:50 am', available: true },
      { id: '6', time: '11:30 am', available: true },
      { id: '7', time: '1:10 pm', available: false },
      { id: '8', time: '1:50 pm', available: true },
      { id: '9', time: '2:30 pm', available: true },
    ];
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotSelect = (slotId: string) => {
    setSelectedTimeSlot(slotId);
  };

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTimeSlot) return;
    
    const appointmentDetails = {
      practitionerId,
      date: format(selectedDate, 'yyyy-MM-dd'),
      time: generateTimeSlots().find(slot => slot.id === selectedTimeSlot)?.time,
    };
    
    console.log('Booking appointment:', appointmentDetails);
    
    toast({
      title: "Appointment Booked!",
      description: `Your appointment with ${practitioner.name} on ${format(selectedDate, 'MMMM d, yyyy')} at ${generateTimeSlots().find(slot => slot.id === selectedTimeSlot)?.time} has been confirmed.`,
    });
    
    navigate('/appointments');
  };

  const dates = generateDates();
  const timeSlots = generateTimeSlots();

  return (
    <div className="container mx-auto px-4 py-4 max-w-md">
      {/* Header with practitioner info */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <img 
            src={practitioner.imageUrl} 
            alt={practitioner.name} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">{practitioner.name}</h2>
            <p className="text-gray-600">for Standard appt.</p>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="progress-bar w-1/2 rounded-full"></div>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-6">Choose a time</h1>
      
      <div className="mb-4">
        <p className="text-gray-600 mb-2">Showing times in <span className="text-blue-600 font-medium">Brisbane time (AEST)</span></p>
      </div>
      
      {/* Practitioner details section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <img 
            src={practitioner.imageUrl} 
            alt={practitioner.name} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold">{practitioner.name}</h3>
            <p className="text-sm text-gray-600">{practitioner.title}</p>
            <button className="text-blue-600 mt-1 text-sm font-medium">Read more</button>
          </div>
        </div>
      </div>
      
      {/* Date selection tabs */}
      <div className="grid grid-cols-4 border-b mb-6">
        {dates.slice(0, 4).map((date, index) => (
          <button
            key={index}
            className={`date-tab ${selectedDate && date.toDateString() === selectedDate.toDateString() ? 'active' : ''}`}
            onClick={() => handleDateSelect(date)}
          >
            <span className="text-sm">{index === 0 ? 'Today' : format(date, 'E')}</span>
            <span className="font-medium">{format(date, 'd MMM')}</span>
          </button>
        ))}
      </div>
      
      {/* Time slots grid */}
      <div className="grid grid-cols-1 gap-3 mb-8">
        {timeSlots.map((slot) => (
          <button
            key={slot.id}
            className={`time-slot ${selectedTimeSlot === slot.id ? 'active' : ''}`}
            onClick={() => slot.available && handleTimeSlotSelect(slot.id)}
            disabled={!slot.available}
          >
            {slot.time}
          </button>
        ))}
      </div>
      
      {/* Next button */}
      {selectedTimeSlot && (
        <div className="flex justify-end">
          <Button 
            onClick={handleBookAppointment}
            className="next-button"
          >
            next <ChevronRight size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler;
