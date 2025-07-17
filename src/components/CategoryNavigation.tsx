import React from 'react';
import { Search, User, LogOut, MapPin, Phone, Users, Building, Heart, Hotel, Shield } from 'lucide-react';
import { Category } from '../types';

interface CategoryNavigationProps {
  isLoggedIn: boolean;
  onToggleLogin: () => void;
  onCategorySelect: (category: Category) => void;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  isLoggedIn,
  onToggleLogin,
  onCategorySelect
}) => {
  const categories: Category[] = [
    {
      id: 'government',
      name: 'الحكومة',
      icon: Shield,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50/30',
      borderColor: 'border-emerald-100/50',
      hoverBg: 'hover:bg-emerald-50/50',
      agents: 0,
      description: 'الخدمات الحكومية والإدارية'
    },
    {
      id: 'ngos',
      name: 'المنظمات غير الحكومية',
      icon: Heart,
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50/30',
      borderColor: 'border-rose-100/50',
      hoverBg: 'hover:bg-rose-50/50',
      agents: 0,
      description: 'المنظمات الخيرية والتطوعية'
    },
    {
      id: 'hospitals',
      name: 'المستشفيات',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50/30',
      borderColor: 'border-blue-100/50',
      hoverBg: 'hover:bg-blue-50/50',
      agents: 0,
      description: 'الخدمات الطبية والصحية'
    },
    {
      id: 'hotels',
      name: 'الفنادق',
      icon: Hotel,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50/30',
      borderColor: 'border-purple-100/50',
      hoverBg: 'hover:bg-purple-50/50',
      agents: 1,
      description: 'خدمات الضيافة والإقامة'
    }
  ];

  const handleCategoryClick = (category: Category) => {
    onCategorySelect(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden" dir="rtl">
      {/* Enhanced Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-200/40 via-blue-200/30 to-purple-200/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-pink-300/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-300/30 to-purple-300/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-gradient-to-r from-emerald-200/25 to-teal-200/20 rounded-full blur-2xl opacity-30" />
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-gradient-to-l from-rose-200/25 to-orange-200/20 rounded-full blur-2xl opacity-35" />
      </div>

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  مندلين
                </h1>
              </div>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pr-10 pl-3 py-2.5 border border-white/30 rounded-2xl backdrop-blur-md bg-white/60 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-300/50 focus:bg-white/80 transition-all duration-300 shadow-lg shadow-black/5"
                  placeholder="ابحث عن الخدمات..."
                />
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={onToggleLogin}
                className="flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200 shadow-lg shadow-orange-500/25"
              >
                {isLoggedIn ? (
                  <>
                    <LogOut className="h-4 w-4" />
                    <span>تسجيل الخروج</span>
                  </>
                ) : (
                  <>
                    <User className="h-4 w-4" />
                    <span>تسجيل الدخول</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
                مرحباً بكم في{' '}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  مندلين
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                منصة شاملة للوصول إلى جميع الخدمات في مكان واحد
              </p>
              
              <div className="max-w-2xl mx-auto mb-16">
                <div className="relative">
                  <div className="backdrop-blur-2xl bg-white/40 rounded-3xl p-6 border border-white/30 shadow-2xl shadow-black/10 ring-1 ring-white/20">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Search className="h-6 w-6 text-orange-500 flex-shrink-0" />
                      <input
                        type="text"
                        className="flex-1 bg-transparent text-lg placeholder-gray-500 text-gray-900 focus:outline-none"
                        placeholder="ابحث عن الخدمة التي تحتاجها..."
                      />
                      <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-orange-500/30">
                        بحث
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                فئات الخدمات
              </h2>
              <p className="text-xl text-gray-600">
                اختر الفئة المناسبة للوصول إلى الخدمات المطلوبة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="group relative overflow-hidden rounded-3xl transition-all duration-300 cursor-pointer backdrop-blur-xl bg-white/30 hover:bg-white/40 border-2 border-white/50 hover:border-white/70 hover:shadow-2xl hover:shadow-black/10 ring-1 ring-white/30 hover:ring-white/40"
                    role="button"
                    tabIndex={0}
                    aria-label={`عرض وكلاء ${category.name}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCategoryClick(category);
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    <div className="relative p-8 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg shadow-black/20`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="text-left">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Users className="h-5 w-5 text-gray-500" />
                            <span className="text-2xl font-bold text-gray-900">
                              {category.agents}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">وكيل متاح</p>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 flex-grow">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <MapPin className="h-4 w-4" />
                            <span>متوفر في جميع المدن</span>
                          </div>
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Phone className="h-4 w-4" />
                            <span>دعم 24/7</span>
                          </div>
                        </div>
                        
                        <div className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 border-t border-white/20 backdrop-blur-sm bg-white/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
                مندلين
              </h3>
              <p className="text-gray-600">
                منصة شاملة لجميع الخدمات في مكان واحد
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};