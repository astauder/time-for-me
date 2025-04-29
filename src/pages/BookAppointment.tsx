
import React from 'react';
import Navbar from '@/components/Navbar';
import AppointmentScheduler from '@/components/appointments/AppointmentScheduler';

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar isLoggedIn={false} />
      <div className="container mx-auto px-4 py-6">
        <AppointmentScheduler />
      </div>
    </div>
  );
};

export default BookAppointment;
