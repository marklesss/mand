import React from 'react';
import { Check, CheckCheck, Clock } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatBubbleProps {
  message: Message;
  isLast: boolean;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isLast }) => {
  const isUser = message.sender === 'user';
  
  const getStatusIcon = () => {
    switch (message.status) {
      case 'sending':
        return <Clock className="h-3 w-3 text-gray-400 animate-pulse" />;
      case 'sent':
        return <Check className="h-3 w-3 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="h-3 w-3 text-gray-400" />;
      case 'read':
        return <CheckCheck className="h-3 w-3 text-orange-500" />;
      default:
        return null;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-SA', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div
      className={`flex ${isUser ? 'justify-start' : 'justify-end'} mb-4 animate-slideIn`}
      style={{
        animationDelay: isLast ? '0ms' : '100ms'
      }}
    >
      <div
        className={`max-w-[70%] sm:max-w-[60%] ${
          isUser
            ? 'order-2 mr-3'
            : 'order-1 ml-3'
        }`}
      >
        {/* Message bubble */}
        <div
          className={`relative px-4 py-3 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
            isUser
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-br-md'
              : 'backdrop-blur-xl bg-white/80 text-gray-900 border border-white/40 rounded-bl-md'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
            {message.content}
          </p>
          
          {/* Message tail */}
          <div
            className={`absolute top-4 w-3 h-3 transform rotate-45 ${
              isUser
                ? 'right-[-6px] bg-gradient-to-r from-orange-500 to-orange-600'
                : 'left-[-6px] backdrop-blur-xl bg-white/80 border-l border-b border-white/40'
            }`}
          />
        </div>

        {/* Message info */}
        <div
          className={`flex items-center mt-1 space-x-2 space-x-reverse text-xs text-gray-500 ${
            isUser ? 'justify-start' : 'justify-end'
          }`}
        >
          <span>{formatTime(message.timestamp)}</span>
          {isUser && getStatusIcon()}
        </div>
      </div>

      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-medium shadow-sm ${
          isUser
            ? 'order-1 bg-gradient-to-br from-orange-400 to-orange-600 text-white'
            : 'order-2 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700'
        }`}
      >
        {isUser ? 'أ' : message.sender === 'agent' ? 'و' : '؟'}
      </div>
    </div>
  );
};