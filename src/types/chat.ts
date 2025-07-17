export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  type: 'text' | 'voice';
  status?: 'sending' | 'sent' | 'delivered' | 'read';
}

export interface ChatSession {
  id: string;
  agentId: string;
  agentName: string;
  agentTitle: string;
  agentAvatar?: string;
  messages: Message[];
  isActive: boolean;
  lastActivity: Date;
}

export interface ChatState {
  currentSession: ChatSession | null;
  isTyping: boolean;
  isConnected: boolean;
  isRecording: boolean;
  error: string | null;
}

export interface VoiceRecording {
  isRecording: boolean;
  duration: number;
  audioBlob?: Blob;
}