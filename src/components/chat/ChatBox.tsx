import React, { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ChatMessage, { ChatMessageProps } from './ChatMessage';
import ChatButton from './ChatButton';
import { useToast } from "@/hooks/use-toast";

const INITIAL_MESSAGES: ChatMessageProps[] = [
  {
    message: "Hello! Welcome to Mom's Laundry. How can we help you today?",
    isUser: false,
    timestamp: new Date()
  }
];

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageProps[]>(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const autoResponses: Record<string, string> = {
    "price": "Our pricing starts at $1.50 per pound for wash & fold service. We also offer pickup and delivery for a small fee.",
    "hours": "We're open Monday through Saturday from 8AM to 8PM. We're closed on Sundays.",
    "delivery": "Yes, we offer pickup and delivery! The fee varies based on your location, typically between $5-10.",
    "time": "Turnaround time is usually 24-48 hours, but we also offer express service for an additional fee.",
    "location": "We're located at Back Side, 4, 179/2, Chinmaya Dhyana Mandir St, Ramavarappadu, Vijayawada, Andhra Pradesh 521108."
  };

  const getAutoResponse = (message: string): string | null => {
    const lowercaseMsg = message.toLowerCase();
    for (const [keyword, response] of Object.entries(autoResponses)) {
      if (lowercaseMsg.includes(keyword)) {
        return response;
      }
    }
    return null;
  };

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const userMessage: ChatMessageProps = {
      message: newMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    setTimeout(() => {
      const autoResponse = getAutoResponse(newMessage);
      
      if (autoResponse) {
        const responseMessage: ChatMessageProps = {
          message: autoResponse,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, responseMessage]);
      } else {
        const genericMessage: ChatMessageProps = {
          message: "Thank you for your message. Our team will get back to you soon. If you need immediate assistance, please call us at (630) 178-4568.",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, genericMessage]);
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      toast({
        title: "Chat support is now active",
        description: "Our response time is typically under 5 minutes during business hours.",
      });
    }
  }, [isOpen, toast]);

  return (
    <>
      <ChatButton onClick={() => setIsOpen(true)} isOpen={isOpen} />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md p-0 gap-0 border-none overflow-hidden">
          <div className="bg-laundry-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Mom's Laundry Support</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white hover:bg-laundry-600 rounded-full"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="flex flex-col h-[400px]">
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <ChatMessage 
                  key={index} 
                  message={msg.message} 
                  isUser={msg.isUser} 
                  timestamp={msg.timestamp} 
                />
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-4 flex gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1"
              />
              <Button 
                onClick={handleSend} 
                size="icon"
                className="bg-laundry-500 hover:bg-laundry-600 text-white"
                disabled={!newMessage.trim()}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBox;
