import { 
  users, type User, type InsertUser,
  messages, type Message, type InsertMessage,
  contactForms, type ContactForm, type InsertContactForm
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Message operations
  createMessage(message: InsertMessage): Promise<Message>;
  getMessagesBySessionId(sessionId: string): Promise<Message[]>;
  
  // Contact form operations
  createContactForm(form: InsertContactForm): Promise<ContactForm>;
  getContactForms(): Promise<ContactForm[]>;
  markContactFormProcessed(id: number): Promise<ContactForm | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, Message>;
  private contactForms: Map<number, ContactForm>;
  private userCurrentId: number;
  private messageCurrentId: number;
  private contactFormCurrentId: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.contactForms = new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
    this.contactFormCurrentId = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Message operations
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageCurrentId++;
    const timestamp = new Date();
    const message: Message = { 
      ...insertMessage, 
      id, 
      timestamp 
    };
    this.messages.set(id, message);
    return message;
  }
  
  async getMessagesBySessionId(sessionId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter(message => message.sessionId === sessionId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }
  
  // Contact form operations
  async createContactForm(insertForm: InsertContactForm): Promise<ContactForm> {
    const id = this.contactFormCurrentId++;
    const timestamp = new Date();
    const form: ContactForm = { 
      ...insertForm, 
      id, 
      timestamp,
      processed: false 
    };
    this.contactForms.set(id, form);
    return form;
  }
  
  async getContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values())
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }
  
  async markContactFormProcessed(id: number): Promise<ContactForm | undefined> {
    const form = this.contactForms.get(id);
    if (form) {
      const updatedForm = { ...form, processed: true };
      this.contactForms.set(id, updatedForm);
      return updatedForm;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
