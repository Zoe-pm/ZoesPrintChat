export interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
