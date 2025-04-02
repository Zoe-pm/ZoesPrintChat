import { useState, useEffect, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Message } from "@/lib/types";

export default function useChatbot() {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! I'm Zoe, your printing assistant. How can I help you today?",
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get chat history when component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/chat");
        if (response.ok) {
          const data = await response.json();
          if (data.messages.length > 0) {
            setMessages(data.messages);
          }
        }
      } catch (error) {
        console.error("Failed to fetch chat history:", error);
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = useCallback(async (message: string = input) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: message,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await apiRequest("POST", "/api/chat", { message });
      const botMessage: Message = await response.json();
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Could not get a response. Please try again.",
        variant: "destructive"
      });
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  }, [input, toast]);

  return {
    messages,
    input,
    isLoading,
    setInput,
    sendMessage,
  };
}
