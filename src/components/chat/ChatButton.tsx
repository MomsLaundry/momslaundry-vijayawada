
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-laundry-500 text-white shadow-lg hover:bg-laundry-600 transition-all duration-300",
        isOpen && "scale-0 opacity-0"
      )}
      aria-label="Open chat"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default ChatButton;
