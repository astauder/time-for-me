
import React from 'react';
import Navbar from '@/components/Navbar';
import AppointmentsList from '@/components/appointments/AppointmentsList';

const Appointments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isLoggedIn={true} />
      <AppointmentsList />
    </div>
  );
};

export default Appointments;
