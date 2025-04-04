
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-primary to-purple-500 text-white py-6 px-4 relative">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Printbox • KI mit Herz & Hirn.
        </p>
      </div>
    </footer>
  );
}
