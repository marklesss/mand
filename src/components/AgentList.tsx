import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Search, Filter, SortAsc } from 'lucide-react';
import { Category, Agent } from '../types';
import { AgentCard } from './AgentCard';
import { getAgentsByCategory } from '../data/mockAgents';

interface AgentListProps {
  category: Category;
  onBack: () => void;
  onStartChat: (agent: Agent) => void;
}

export const AgentList: React.FC<AgentListProps> = ({ category, onBack, onStartChat }) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOnline, setFilterOnline] = useState(false);
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'responseTime'>('rating');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      const categoryAgents = getAgentsByCategory(category.id);
      setAgents(categoryAgents);
      setFilteredAgents(categoryAgents);
      setIsLoading(false);
    }, 300);
  }, [category.id]);

  useEffect(() => {
    let filtered = agents;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(agent =>
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Apply online filter
    if (filterOnline) {
      filtered = filtered.filter(agent => agent.isOnline);
    }

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name, 'ar');
        case 'responseTime':
          return a.isOnline === b.isOnline ? 0 : a.isOnline ? -1 : 1;
        default:
          return 0;
      }
    });

    setFilteredAgents(filtered);
  }, [agents, searchQuery, filterOnline, sortBy]);

  const handleChat = (agent: Agent) => {
    onStartChat(agent);
  };

  const handleCall = (agent: Agent) => {
    console.log('Starting call with:', agent.name);
    // Implement call functionality
    alert(`بدء مكالمة مع ${agent.name}`);
  };

  const onlineAgentsCount = agents.filter(agent => agent.isOnline).length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden" dir="rtl">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-200/40 via-blue-200/30 to-purple-200/20 rounded-full blur-3xl opacity-60" />
        </div>
        
        <div className="relative pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-600">جاري تحميل الوكلاء...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden" dir="rtl">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-200/40 via-blue-200/30 to-purple-200/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-pink-300/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-300/30 to-purple-300/20 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 space-x-reverse text-orange-600 hover:text-orange-700 transition-colors duration-200 mb-6 group"
              aria-label="العودة إلى الفئات"
            >
              <ArrowRight className="h-5 w-5 group-hover:transform group-hover:translate-x-1 transition-transform duration-200" />
              <span className="font-medium">العودة إلى الفئات</span>
            </button>

            <div className="flex items-center space-x-4 space-x-reverse mb-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                <category.icon className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  وكلاء {category.name}
                </h1>
                <div className="flex items-center space-x-4 space-x-reverse text-gray-600">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Users className="h-5 w-5" />
                    <span>{agents.length} وكيل متاح</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>{onlineAgentsCount} متاح الآن</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and filters */}
          <div className="backdrop-blur-xl bg-white/40 rounded-3xl p-6 border border-white/30 shadow-2xl shadow-black/10 ring-1 ring-white/20 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6 lg:space-x-reverse">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pr-10 pl-3 py-3 border border-white/30 rounded-2xl backdrop-blur-md bg-white/60 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-300/50 focus:bg-white/80 transition-all duration-300"
                  placeholder="ابحث عن وكيل أو تخصص..."
                />
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-4 space-x-reverse">
                <button
                  onClick={() => setFilterOnline(!filterOnline)}
                  className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    filterOnline
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                      : 'bg-white/60 text-gray-700 hover:bg-white/80'
                  }`}
                >
                  <Filter className="h-4 w-4" />
                  <span>متاح الآن</span>
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'rating' | 'name' | 'responseTime')}
                  className="px-4 py-2 rounded-xl bg-white/60 text-gray-700 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white/80 transition-all duration-300"
                >
                  <option value="rating">ترتيب حسب التقييم</option>
                  <option value="name">ترتيب حسب الاسم</option>
                  <option value="responseTime">ترتيب حسب التوفر</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600">
              عرض {filteredAgents.length} من أصل {agents.length} وكيل
            </p>
          </div>

          {/* Agent cards */}
          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAgents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onChat={handleChat}
                  onCall={handleCall}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="backdrop-blur-xl bg-white/40 rounded-3xl p-12 border border-white/30 shadow-2xl shadow-black/10 ring-1 ring-white/20">
                <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  لا توجد نتائج
                </h3>
                <p className="text-gray-600 mb-6">
                  لم نجد أي وكلاء يطابقون معايير البحث الخاصة بك
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilterOnline(false);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-orange-500/25"
                >
                  إعادة تعيين البحث
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};