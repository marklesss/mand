import { RestaurantAIAgent } from '../types/restaurant';

export const mockRestaurantAgents: RestaurantAIAgent[] = [
  {
    id: 'restaurant-ai-chef-omar',
    name: 'الشيف عمر الذكي',
    title: 'مساعد ذكي للمأكولات العربية',
    rating: 4.8,
    reviewCount: 1247,
    isOnline: true,
    languages: ['العربية', 'الإنجليزية'],
    specialties: ['المأكولات العربية', 'الحلويات الشرقية', 'المشاوي', 'الأطباق النباتية'],
    location: 'الرياض',
    restaurantType: 'مطعم عربي تقليدي',
    aiCapabilities: ['توصيات ذكية', 'تحليل التفضيلات', 'إدارة الطلبات', 'دعم متعدد اللغات'],
    processingSpeed: 'فوري (< 1 ثانية)',
    categoryId: 'restaurants'
  },
  {
    id: 'restaurant-ai-pasta-maria',
    name: 'ماريا الإيطالية الذكية',
    title: 'خبيرة المأكولات الإيطالية',
    rating: 4.9,
    reviewCount: 892,
    isOnline: true,
    languages: ['العربية', 'الإنجليزية', 'الإيطالية'],
    specialties: ['الباستا', 'البيتزا', 'الريزوتو', 'الحلويات الإيطالية'],
    location: 'جدة',
    restaurantType: 'مطعم إيطالي أصيل',
    aiCapabilities: ['وصفات تفاعلية', 'اقتراحات النبيذ', 'تخصيص الطلبات', 'معلومات غذائية'],
    processingSpeed: 'فوري (< 1 ثانية)',
    categoryId: 'restaurants'
  },
  {
    id: 'restaurant-ai-sushi-master',
    name: 'أستاذ السوشي الذكي',
    title: 'متخصص المأكولات اليابانية',
    rating: 4.7,
    reviewCount: 634,
    isOnline: false,
    languages: ['العربية', 'الإنجليزية', 'اليابانية'],
    specialties: ['السوشي', 'الساشيمي', 'الرامن', 'التيمبورا'],
    location: 'الدمام',
    restaurantType: 'مطعم ياباني متخصص',
    aiCapabilities: ['تعليم تحضير السوشي', 'اختيار الأسماك', 'الثقافة اليابانية', 'التقديم التقليدي'],
    processingSpeed: 'فوري (< 1 ثانية)',
    categoryId: 'restaurants'
  }
];

export const getRestaurantAgentsByCategory = (categoryId: string): RestaurantAIAgent[] => {
  return mockRestaurantAgents.filter(agent => agent.categoryId === categoryId);
};