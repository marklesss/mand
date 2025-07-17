import { Agent } from '../types';

export const mockAgents: Agent[] = [
  // Only one agent - زوكا in hotels category
  {
    id: 'hotel-zoka',
    name: 'زوكا',
    title: 'مختص الحجوزات والضيافة المتميزة',
    rating: 4.9,
    reviewCount: 342,
    isOnline: true,
    responseTime: 'خلال دقيقة',
    languages: ['العربية', 'الإنجليزية', 'الفرنسية'],
    specialties: ['الحجوزات الفندقية', 'خدمات الضيافة', 'السياحة الفاخرة', 'التخطيط للرحلات'],
    categoryId: 'hotels',
    experience: '8 سنوات',
    location: 'الرياض'
  }
];

export const getAgentsByCategory = (categoryId: string): Agent[] => {
  return mockAgents.filter(agent => agent.categoryId === categoryId);
};