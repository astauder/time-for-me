
import React from 'react';
import PractitionerCard from './PractitionerCard';

// Mock data for practitioners
const practitioners = [
  {
    id: '1',
    name: 'Zane Soblusky',
    title: 'Mental Health Counselor',
    specialties: ['Anxiety', 'Depression', 'Trauma'],
    imageUrl: '', // Empty string for image URL as we'll use initials
    clinic: 'Sky Therapy',
    location: 'Brisbane, QLD',
    nextAvailable: 'Tomorrow, 10:00 AM',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    title: 'Clinical Psychologist',
    specialties: ['Relationship Issues', 'Stress Management', 'ADHD'],
    imageUrl: '', // Empty string for image URL
    clinic: 'Mindful Psychology',
    location: 'Brisbane, QLD',
    nextAvailable: 'Friday, 2:30 PM',
  },
  {
    id: '3',
    name: 'Michael Chen',
    title: 'Psychotherapist',
    specialties: ['Grief', 'Life Transitions', 'Self-Esteem'],
    imageUrl: '', // Empty string for image URL
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
