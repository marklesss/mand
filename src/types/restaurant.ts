export interface RestaurantAIAgent {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  isOnline: boolean;
  languages: string[];
  specialties: string[];
  location: string;
  restaurantType: string;
  aiCapabilities: string[];
  processingSpeed: string;
  categoryId: string;
}

export interface RestaurantCategory {
  id: string;
  name: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverBg: string;
  agents: number;
  description: string;
  restaurantTypes: string[];
}