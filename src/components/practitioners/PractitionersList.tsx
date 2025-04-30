
import React from 'react';
import PractitionerCard from './PractitionerCard';

// Mock data for practitioners
const practitioners = [
  {
    id: '1',
    name: 'Zane Soblusky',
    title: 'Mental Health Counselor',
    specialties: ['Anxiety', 'Depression', 'Trauma'],
    imageUrl: '/lovable-uploads/8fee77b4-5316-4d89-b8fc-8b4a58af3ef7.png',
    clinic: 'Sky Therapy',
    location: 'Brisbane, QLD',
    nextAvailable: 'Tomorrow, 10:00 AM',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    title: 'Clinical Psychologist',
    specialties: ['Relationship Issues', 'Stress Management', 'ADHD'],
    imageUrl: '/lovable-uploads/491cb860-4ba9-4d0e-be16-0c6e20b9dd2e.png',
    clinic: 'Mindful Psychology',
    location: 'Brisbane, QLD',
    nextAvailable: 'Friday, 2:30 PM',
  },
  {
    id: '3',
    name: 'Michael Chen',
    title: 'Psychotherapist',
    specialties: ['Grief', 'Life Transitions', 'Self-Esteem'],
    imageUrl: '/lovable-uploads/de7c756e-4d57-43cd-9e32-d38bcdd14302.png',
    clinic: 'Harmony Mental Health',
    location: 'Gold Coast, QLD',
    nextAvailable: 'Monday, 11:15 AM',
  },
];

const PractitionersList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Mental Health Practitioners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practitioners.map((practitioner) => (
          <PractitionerCard key={practitioner.id} {...practitioner} />
        ))}
      </div>
    </div>
  );
};

export default PractitionersList;
