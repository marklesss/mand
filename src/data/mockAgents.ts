import { Agent } from '../types';

export const mockAgents: Agent[] = [
  // Government agents
  {
    id: 'gov-1',
    name: 'أحمد محمد العلي',
    title: 'مختص الخدمات الحكومية',
    rating: 4.9,
    reviewCount: 127,
    isOnline: true,
    responseTime: 'خلال دقيقتين',
    languages: ['العربية', 'الإنجليزية'],
    specialties: ['الوثائق الرسمية', 'التراخيص', 'الشهادات'],
    categoryId: 'government',
    experience: '5 سنوات',
    location: 'الرياض'
  },
  {
    id: 'gov-2',
    name: 'فاطمة أحمد السالم',
    title: 'مستشارة الإجراءات الإدارية',
    rating: 4.8,
    reviewCount: 89,
    isOnline: true,
    responseTime: 'خلال 5 دقائق',
    languages: ['العربية'],
    specialties: ['الإجراءات الإدارية', 'المعاملات الحكومية'],
    categoryId: 'government',
    experience: '7 سنوات',
    location: 'جدة'
  },
  {
    id: 'gov-3',
    name: 'محمد عبدالله الخالد',
    title: 'خبير الخدمات الرقمية',
    rating: 4.7,
    reviewCount: 156,
    isOnline: false,
    responseTime: 'خلال 15 دقيقة',
    languages: ['العربية', 'الإنجليزية'],
    specialties: ['الخدمات الرقمية', 'التوقيع الإلكتروني'],
    categoryId: 'government',
    experience: '4 سنوات',
    location: 'الدمام'
  },
  // NGO agents
  {
    id: 'ngo-1',
    name: 'سارة محمد الأحمد',
    title: 'منسقة المنظمات الخيرية',
    rating: 4.9,
    reviewCount: 203,
    isOnline: true,
    responseTime: 'خلال دقيقة',
    languages: ['العربية', 'الإنجليزية', 'الفرنسية'],
    specialties: ['العمل الخيري', 'التطوع', 'المساعدات'],
    categoryId: 'ngos',
    experience: '6 سنوات',
    location: 'الرياض'
  },
  {
    id: 'ngo-2',
    name: 'عبدالرحمن سالم القحطاني',
    title: 'مختص البرامج التطوعية',
    rating: 4.6,
    reviewCount: 78,
    isOnline: true,
    responseTime: 'خلال 3 دقائق',
    languages: ['العربية'],
    specialties: ['البرامج التطوعية', 'التدريب'],
    categoryId: 'ngos',
    experience: '3 سنوات',
    location: 'مكة'
  },
  // Hospital agents
  {
    id: 'hospital-1',
    name: 'د. نورا عبدالله الزهراني',
    title: 'منسقة الخدمات الطبية',
    rating: 4.8,
    reviewCount: 312,
    isOnline: true,
    responseTime: 'خلال دقيقتين',
    languages: ['العربية', 'الإنجليزية'],
    specialties: ['المواعيد الطبية', 'التأمين الصحي', 'الطوارئ'],
    categoryId: 'hospitals',
    experience: '8 سنوات',
    location: 'الرياض'
  },
  {
    id: 'hospital-2',
    name: 'أحمد محمد الشهري',
    title: 'مختص خدمات المرضى',
    rating: 4.7,
    reviewCount: 189,
    isOnline: false,
    responseTime: 'خلال 10 دقائق',
    languages: ['العربية'],
    specialties: ['خدمات المرضى', 'الاستعلامات الطبية'],
    categoryId: 'hospitals',
    experience: '5 سنوات',
    location: 'جدة'
  },
  // Hotel agents
  {
    id: 'hotel-1',
    name: 'ليلى أحمد المطيري',
    title: 'مختصة الحجوزات والضيافة',
    rating: 4.9,
    reviewCount: 267,
    isOnline: true,
    responseTime: 'خلال دقيقة',
    languages: ['العربية', 'الإنجليزية', 'التركية'],
    specialties: ['الحجوزات', 'خدمات الضيافة', 'السياحة'],
    categoryId: 'hotels',
    experience: '7 سنوات',
    location: 'الرياض'
  },
  {
    id: 'hotel-2',
    name: 'خالد عبدالعزيز النعيمي',
    title: 'مستشار السفر والإقامة',
    rating: 4.6,
    reviewCount: 134,
    isOnline: true,
    responseTime: 'خلال 4 دقائق',
    languages: ['العربية', 'الإنجليزية'],
    specialties: ['السفر', 'الإقامة الفندقية', 'الجولات السياحية'],
    categoryId: 'hotels',
    experience: '4 سنوات',
    location: 'جدة'
  }
];

export const getAgentsByCategory = (categoryId: string): Agent[] => {
  return mockAgents.filter(agent => agent.categoryId === categoryId);
};