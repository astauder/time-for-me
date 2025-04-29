
import React from 'react';
import Navbar from '@/components/Navbar';
import AppointmentScheduler from '@/components/appointments/AppointmentScheduler';

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isLoggedIn={false} />
      <AppointmentScheduler />
    </div>
  );
};

export default BookAppointment;
