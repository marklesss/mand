import React from 'react';
import { MessageCircle, Phone, Star, Clock, MapPin, Globe, Award } from 'lucide-react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
  onChat: (agent: Agent) => void;
  onCall: (agent: Agent) => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onChat, onCall }) => {
  const handleChatClick = () => {
    onChat(agent);
  };

  const handleCallClick = () => {
    onCall(agent);
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl transition-all duration-300 backdrop-blur-xl bg-white/30 border-2 border-white/50 hover:border-white/70 hover:shadow-2xl hover:shadow-black/10 ring-1 ring-white/30 hover:ring-white/40">
      {/* Enhanced inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative p-6">
        {/* Header with avatar and status */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Avatar placeholder with gradient */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {agent.name.split(' ')[0][0]}{agent.name.split(' ')[1]?.[0] || ''}
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                {agent.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{agent.title}</p>
              
              {/* Rating and reviews */}
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{agent.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({agent.reviewCount} تقييم)</span>
              </div>
            </div>
          </div>
          
          {/* Online status */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className={`w-3 h-3 rounded-full ${agent.isOnline ? 'bg-green-500' : 'bg-gray-400'} shadow-lg`} />
            <span className={`text-xs font-medium ${agent.isOnline ? 'text-green-600' : 'text-gray-500'}`}>
              {agent.isOnline ? 'متاح الآن' : 'غير متاح'}
            </span>
          </div>
        </div>

        {/* Agent details */}
        <div className="space-y-3 mb-6">
          {/* Response time */}
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Clock className="h-4 w-4 text-orange-500" />
            <span>وقت الاستجابة: {agent.responseTime}</span>
          </div>
          
          {/* Location */}
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span>{agent.location}</span>
          </div>
          
          {/* Experience */}
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Award className="h-4 w-4 text-orange-500" />
            <span>الخبرة: {agent.experience}</span>
          </div>
          
          {/* Languages */}
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Globe className="h-4 w-4 text-orange-500" />
            <span>اللغات: {agent.languages.join('، ')}</span>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">التخصصات:</h4>
          <div className="flex flex-wrap gap-2">
            {agent.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full border border-orange-100"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-3 space-x-reverse">
          <button
            onClick={handleChatClick}
            disabled={!agent.isOnline}
            className={`flex-1 flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 rounded-2xl font-medium transition-all duration-200 ${
              agent.isOnline
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            aria-label={`بدء محادثة مع ${agent.name}`}
          >
            <MessageCircle className="h-4 w-4" />
            <span>محادثة</span>
          </button>
          
          <button
            onClick={handleCallClick}
            disabled={!agent.isOnline}
            className={`flex-1 flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 rounded-2xl font-medium transition-all duration-200 ${
              agent.isOnline
                ? 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50 hover:border-orange-600'
                : 'bg-gray-50 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
            }`}
            aria-label={`اتصال هاتفي مع ${agent.name}`}
          >
            <Phone className="h-4 w-4" />
            <span>مكالمة</span>
          </button>
        </div>
      </div>
    </div>
  );
};