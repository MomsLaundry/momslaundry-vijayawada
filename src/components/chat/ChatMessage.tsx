
import React from 'react';
import { cn } from '@/lib/utils';

export interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex items-end mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-xs sm:max-w-md px-4 py-3 rounded-lg",
        isUser 
          ? "bg-laundry-500 text-white rounded-br-none" 
          : "bg-gray-100 text-gray-800 rounded-bl-none"
      )}>
        <p className="text-sm">{message}</p>
        <p className={cn(
          "text-xs mt-1",
          isUser ? "text-laundry-100" : "text-gray-500"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
