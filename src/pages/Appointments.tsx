
import React from 'react';
import Navbar from '@/components/Navbar';
import AppointmentsList from '@/components/appointments/AppointmentsList';

const Appointments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Your Appointments</h1>
        <div className="glass-card p-6">
          <AppointmentsList />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
