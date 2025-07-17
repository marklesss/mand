import { ChatSession } from '../types/chat';

export const mockConversations: ChatSession[] = [
  {
    id: 'conv-1',
    agentId: 'gov-1',
    agentName: 'أحمد محمد العلي',
    agentTitle: 'مختص الخدمات الحكومية',
    messages: [
      {
        id: 'msg-1',
        content: 'مرحباً! كيف يمكنني مساعدتك في استخراج الوثائق الرسمية؟',
        sender: 'agent',
        timestamp: new Date('2024-01-15T10:30:00'),
        type: 'text',
        status: 'read'
      },
      {
        id: 'msg-2',
        content: 'أحتاج إلى استخراج شهادة ميلاد جديدة',
        sender: 'user',
        timestamp: new Date('2024-01-15T10:31:00'),
        type: 'text',
        status: 'read'
      }
    ],
    isActive: false,
    lastActivity: new Date('2024-01-15T10:45:00')
  },
  {
    id: 'conv-2',
    agentId: 'hospital-1',
    agentName: 'د. نورا عبدالله الزهراني',
    agentTitle: 'منسقة الخدمات الطبية',
    messages: [
      {
        id: 'msg-3',
        content: 'أهلاً وسهلاً! كيف يمكنني مساعدتك في الخدمات الطبية؟',
        sender: 'agent',
        timestamp: new Date('2024-01-14T14:20:00'),
        type: 'text',
        status: 'read'
      },
      {
        id: 'msg-4',
        content: 'أريد حجز موعد مع طبيب القلب',
        sender: 'user',
        timestamp: new Date('2024-01-14T14:21:00'),
        type: 'text',
        status: 'read'
      }
    ],
    isActive: false,
    lastActivity: new Date('2024-01-14T15:10:00')
  },
  {
    id: 'conv-3',
    agentId: 'hotel-1',
    agentName: 'ليلى أحمد المطيري',
    agentTitle: 'مختصة الحجوزات والضيافة',
    messages: [
      {
        id: 'msg-5',
        content: 'مرحباً بك! كيف يمكنني مساعدتك في حجوزات الفنادق؟',
        sender: 'agent',
        timestamp: new Date('2024-01-13T16:45:00'),
        type: 'text',
        status: 'read'
      },
      {
        id: 'msg-6',
        content: 'أبحث عن فندق في الرياض لمدة 3 ليالي',
        sender: 'user',
        timestamp: new Date('2024-01-13T16:46:00'),
        type: 'text',
        status: 'read'
      }
    ],
    isActive: false,
    lastActivity: new Date('2024-01-13T17:30:00')
  },
  {
    id: 'conv-4',
    agentId: 'ngo-1',
    agentName: 'سارة محمد الأحمد',
    agentTitle: 'منسقة المنظمات الخيرية',
    messages: [
      {
        id: 'msg-7',
        content: 'السلام عليكم! كيف يمكنني مساعدتك في الأعمال الخيرية؟',
        sender: 'agent',
        timestamp: new Date('2024-01-12T09:15:00'),
        type: 'text',
        status: 'read'
      },
      {
        id: 'msg-8',
        content: 'أريد التطوع في برامج مساعدة الأيتام',
        sender: 'user',
        timestamp: new Date('2024-01-12T09:16:00'),
        type: 'text',
        status: 'read'
      }
    ],
    isActive: false,
    lastActivity: new Date('2024-01-12T10:00:00')
  },
  {
    id: 'conv-5',
    agentId: 'gov-2',
    agentName: 'فاطمة أحمد السالم',
    agentTitle: 'مستشارة الإجراءات الإدارية',
    messages: [
      {
        id: 'msg-9',
        content: 'مرحباً! كيف يمكنني مساعدتك في الإجراءات الإدارية؟',
        sender: 'agent',
        timestamp: new Date('2024-01-11T13:30:00'),
        type: 'text',
        status: 'read'
      },
      {
        id: 'msg-10',
        content: 'أحتاج إلى تجديد رخصة القيادة',
        sender: 'user',
        timestamp: new Date('2024-01-11T13:31:00'),
        type: 'text',
        status: 'read'
      }
    ],
    isActive: false,
    lastActivity: new Date('2024-01-11T14:15:00')
  },
  {
    id: 'conv-6',
    agentId: 'hospital-2',
    agentName: 'أحمد محمد الشهري',
    agentTitle: 'مختص خدمات المرضى',
    messages: [
      {
        id: 'msg-11',
        content: 'أهلاً بك! كيف يمكنني مساعدتك اليوم؟',
        sender: 'agent',
        timestamp: new Date('2024-01-10T11:20:00'),
        type: 'text',
        status: 'read'
      },
      {
        id: 'msg-12',
        content: 'أريد الاستعلام عن نتائج التحاليل',
        sender: 'user',
        timestamp: new Date('2024-01-10T11:21:00'),
        type: 'text',
        status: 'read'
      }
    ],
    isActive: false,
    lastActivity: new Date('2024-01-10T12:00:00')
  },
  {
    id: 'conv-7',
    agentId: 'hotel-2',
    agentName: 'خالد عبدالعزيز النعيمي',
    agentTitle: 'مستشار السفر والإقامة',
    messages: [
      {
        id: 'msg-13',
        content: 'مرحباً! كيف يمكنني مساعدتك في ترتيبات السفر؟',
        sender: 'agent',
        timestamp: new Date('2024-01-09T15:45:00'),
        type: 'text',
        status: 'read'
      },
      {
        id: 'msg-14',
        content: 'أخطط لرحلة عائلية إلى جدة',
        sender: 'user',
        timestamp: new Date('2024-01-09T15:46:00'),
        type: 'text',
        status: 'read'
      }
    ],
    isActive: false,
    lastActivity: new Date('2024-01-09T16:30:00')
  }
];

export const getConversationHistory = (): ChatSession[] => {
  return mockConversations.sort((a, b) => 
    new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
  );
};

export const getConversationById = (id: string): ChatSession | undefined => {
  return mockConversations.find(conv => conv.id === id);
};