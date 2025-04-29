
import React from 'react';
import Navbar from '@/components/Navbar';
import AppointmentScheduler from '@/components/appointments/AppointmentScheduler';

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-teal-50">
      <Navbar isLoggedIn={false} />
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-900">Book an Appointment</h1>
        <div className="glass-card p-6">
          <AppointmentScheduler />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
