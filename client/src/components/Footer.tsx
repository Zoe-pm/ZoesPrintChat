
import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const chatContainer = document.createElement("div");
    chatContainer.id = "custom-chat";
    chatContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      background: #706d73;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      font-family: system-ui, -apple-system, sans-serif;
      z-index: 1000;
      border: 1px solid #E5A9B5;
    `;

    const chatHeader = document.createElement("div");
    chatHeader.style.cssText = `
      background: linear-gradient(to right, #635759, #c6b8d1);
      color: white;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;
    
    chatHeader.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <div style="width: 32px; height: 32px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">KI</div>
        <div>
          <div style="font-weight: bold;">Deine Printbox Assistenz</div>
          <div style="font-size: 12px;">24/7 erreichbar</div>
        </div>
      </div>
    `;

    const chatBody = document.createElement("div");
    chatBody.style.cssText = `
      height: 300px;
      overflow-y: auto;
      padding: 15px;
      background: #f8f9fa;
    `;

    const chatInput = document.createElement("div");
    chatInput.style.cssText = `
      padding: 15px;
      border-top: 1px solid #E5A9B5;
      background: white;
    `;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Erzähl mir...";
    input.style.cssText = `
      width: 100%;
      padding: 10px;
      border: 1px solid #E5A9B5;
      border-radius: 20px;
      outline: none;
    `;

    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && input.value.trim() !== "") {
        const userMessage = document.createElement("div");
        userMessage.style.cssText = `
          background: #EC4899;
          color: white;
          padding: 10px 15px;
          border-radius: 15px;
          margin-bottom: 10px;
          max-width: 80%;
          align-self: flex-end;
          margin-left: auto;
        `;
        userMessage.textContent = input.value;
        chatBody.appendChild(userMessage);

        fetch("https://zoebahati.app.n8n.cloud/webhook/df8f156c-bbaa-4bdd-b797-1820544069e7/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chatInput: input.value })
        })
          .then(res => res.text()).then(text => {
        .then(data => {
          const botReply = data.text || data.answer || data.message || JSON.stringify(data);
          const botMessage = document.createElement("div");
          botMessage.style.cssText = `
            background: #9B8B93;
            color: white;
            padding: 10px 15px;
            border-radius: 15px;
            margin-bottom: 10px;
            max-width: 80%;
          `;
            botMessage.textContent = text;
          chatBody.appendChild(botMessage);
          chatBody.scrollTop = chatBody.scrollHeight;
        });

        input.value = "";
      }
    });

    chatInput.appendChild(input);
    chatContainer.appendChild(chatHeader);
    chatContainer.appendChild(chatBody);
    chatContainer.appendChild(chatInput);
    document.body.appendChild(chatContainer);

    // Welcome messages
    const messages = [
      "Schön dass Du da bist!",
      "Wie kann ich helfen?"
    ];

    messages.forEach(msg => {
      const msgElement = document.createElement("div");
      msgElement.style.cssText = `
        background: #9B8B93;
        color: white;
        padding: 10px 15px;
        border-radius: 15px;
        margin-bottom: 10px;
        max-width: 80%;
      `;
      msgElement.textContent = msg;
      chatBody.appendChild(msgElement);
    });

    return () => {
      document.body.removeChild(chatContainer);
    };
  }, []);

  return (
    <footer className="py-12 px-6 bg-gradient-to-r from-primary to-purple-500 text-white">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Zoë Bahati Hagen • KI mit Herz & Hirn.</p>
      </div>
    </footer>
  );
}
