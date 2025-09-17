// src/components/FloatingButtons.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import "./FloatingButtons.css"; // Certifique-se de que este arquivo existe e está com os estilos

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-container">
      <button 
        className={`main-button ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>+</span>
      </button>

      {isOpen && (
        <div className="button-group">
          <Link href="/contato" className="sub-button" onClick={() => setIsOpen(false)}>
            Entre em Contato
          </Link>
          <Link href="/sobre-autor" className="sub-button" onClick={() => setIsOpen(false)}>
            Sobre o Autor(a)
          </Link>
          <Link href="/assine" className="sub-button" onClick={() => setIsOpen(false)}>
            Assine o Blog
          </Link>
        </div>
      )}
    </div>
  );
}