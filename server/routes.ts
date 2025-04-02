import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema, insertMessageSchema } from "@shared/schema";
import crypto from "crypto";

// Chatbot response generator
function generateBotResponse(message: string): string {
  const lowercaseMessage = message.toLowerCase();
  
  // Simple response logic based on keywords
  if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi")) {
    return "Hello! How can I help you with your printing needs today?";
  } else if (lowercaseMessage.includes("price") || lowercaseMessage.includes("cost") || lowercaseMessage.includes("quote")) {
    return "I'd be happy to provide pricing information. Could you please specify what type of printing service you're interested in? We offer photo printing, business cards, brochures, flyers, and more.";
  } else if (lowercaseMessage.includes("photo") || lowercaseMessage.includes("picture")) {
    return "For photo printing, we offer various sizes starting from wallet size to large posters. Standard 4x6 photos start at $0.25 each with discounts for bulk orders. Would you like more specific information about photo printing options?";
  } else if (lowercaseMessage.includes("business card")) {
    return "Our business cards start at $25 for 100 standard cards. We offer premium options with special finishes like spot UV, foil stamping, or rounded corners at additional cost. How many business cards do you need?";
  } else if (lowercaseMessage.includes("brochure") || lowercaseMessage.includes("flyer")) {
    return "Brochures and flyers start at $150 for 100 copies on premium paper. The price depends on size, paper type, and whether you need single or double-sided printing. Do you have a specific project in mind?";
  } else if (lowercaseMessage.includes("time") || lowercaseMessage.includes("how long") || lowercaseMessage.includes("turnaround")) {
    return "Our standard turnaround time is 3-5 business days, but we offer express services for an additional fee. Rush orders can be completed in 24-48 hours depending on the project complexity and current workload.";
  } else if (lowercaseMessage.includes("paper") || lowercaseMessage.includes("material")) {
    return "We offer a variety of paper options including glossy, matte, textured, recycled, and premium cardstock. The best choice depends on your specific project. Would you like recommendations for a particular type of printing?";
  } else if (lowercaseMessage.includes("contact") || lowercaseMessage.includes("speak to someone")) {
    return "You can reach our customer service team at (555) 123-4567 during business hours, or email us at hello@zoesprintbox.com. Would you like me to have someone call you back?";
  } else if (lowercaseMessage.includes("hours") || lowercaseMessage.includes("open")) {
    return "Our physical store is open Monday to Friday from 9am to 6pm, and Saturday from 10am to 4pm. We're closed on Sundays. However, you can place orders online 24/7, and I'm here to assist you anytime!";
  } else if (lowercaseMessage.includes("thank")) {
    return "You're welcome! Is there anything else I can help you with today?";
  } else if (lowercaseMessage.includes("bye") || lowercaseMessage.includes("goodbye")) {
    return "Thank you for chatting with Zoe's Printbox! Feel free to reach out anytime you need assistance with your printing projects. Have a great day!";
  }
  
  // Default responses
  const defaultResponses = [
    "Thanks for your message. Could you provide more details about your printing needs?",
    "I'd be happy to help with that. What specific information are you looking for?",
    "We offer a wide range of printing services. Could you tell me more about your project?",
    "I can assist you with that request. Do you have any specific requirements or preferences?",
    "That's something we can definitely help with. Would you like me to provide more information about our options?"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  // Chat endpoints
  app.get("/api/chat", async (req: Request, res: Response) => {
    try {
      // Generate a simple sessionId if none exists
      const sessionId = req.headers["x-session-id"] as string || crypto.randomUUID();
      
      // Get messages for this session
      const messages = await storage.getMessagesBySessionId(sessionId);
      
      // If no messages exist, create a welcome message
      if (messages.length === 0) {
        const welcomeMessage = {
          sessionId,
          sender: "bot",
          text: "Hi there! I'm Zoe, your printing assistant. How can I help you today?"
        };
        await storage.createMessage(welcomeMessage);
        
        // Fetch messages again to include welcome message
        const updatedMessages = await storage.getMessagesBySessionId(sessionId);
        
        return res.json({ 
          sessionId,
          messages: updatedMessages.map(msg => ({
            id: msg.id.toString(),
            sender: msg.sender,
            text: msg.text,
            timestamp: msg.timestamp.toISOString()
          }))
        });
      }
      
      // Return existing messages
      res.json({ 
        sessionId,
        messages: messages.map(msg => ({
          id: msg.id.toString(),
          sender: msg.sender,
          text: msg.text,
          timestamp: msg.timestamp.toISOString()
        }))
      });
    } catch (error) {
      console.error("Error fetching chat messages:", error);
      res.status(500).json({ message: "Failed to fetch chat messages" });
    }
  });

  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const { message, sessionId: clientSessionId } = req.body;
      
      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }
      
      // Use sessionId from request body or header, or generate a new one
      const sessionId = clientSessionId || 
                        (req.headers["x-session-id"] as string) || 
                        crypto.randomUUID();
      
      // Save user message
      const userMessageData = {
        sessionId,
        sender: "user",
        text: message
      };
      
      try {
        insertMessageSchema.parse(userMessageData);
      } catch (error) {
        return res.status(400).json({ message: "Invalid message format" });
      }
      
      await storage.createMessage(userMessageData);
      
      // Generate bot response
      const botResponse = generateBotResponse(message);
      
      // Save bot message
      const botMessageData = {
        sessionId,
        sender: "bot",
        text: botResponse
      };
      
      const botMessage = await storage.createMessage(botMessageData);
      
      // Return bot response
      res.json({
        id: botMessage.id.toString(),
        sender: botMessage.sender,
        text: botMessage.text,
        timestamp: botMessage.timestamp.toISOString(),
        sessionId
      });
    } catch (error) {
      console.error("Error handling chat message:", error);
      res.status(500).json({ message: "Failed to process message" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const formData = req.body;
      
      try {
        insertContactFormSchema.parse(formData);
      } catch (error) {
        return res.status(400).json({ message: "Invalid form data" });
      }
      
      await storage.createContactForm(formData);
      
      res.json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to submit form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
