import React from "react";
import ChatWidget from "@/components/ChatWidget"; // ← Pfad je nach Projektstruktur ggf. anpassen

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-primary to-purple-500 text-white py-6 px-4 relative">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Printbox • KI mit Herz & Hirn.
        </p>
      </div>

      {/* 💬 ChatWidget schwebt unabhängig vom Footer-Inhalt */}
      <ChatWidget />
    </footer>
  );
}

