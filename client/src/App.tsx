import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ChatbotPage from "@/pages/ChatbotPage";
import ChatbotDemo1 from "@/pages/ChatbotDemo1";
import ChatbotDemo2 from "@/pages/ChatbotDemo2";
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chatbot" component={ChatbotPage} />
      <Route path="/chatbot-demo-1" component={ChatbotDemo1} />
      <Route path="/chatbot-demo-2" component={ChatbotDemo2} />
      <Route component={NotFound} />
    </Switch>
  );
}

const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://zoebahati.app.n8n.cloud/webhook/fd03b457-76f0-409a-ae7d-e9974b6e807c/chat'
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;