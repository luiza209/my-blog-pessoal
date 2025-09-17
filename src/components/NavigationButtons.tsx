// src/components/NavigationButtons.tsx
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "./NavigationButtons.css"; // Vamos criar este arquivo de CSS a seguir

export default function NavigationButtons() {
  const router = useRouter();

  return (
    <div className="navigation-container">
      {/* Botão de Voltar (página anterior) */}
      <button 
        className="nav-button back-button" 
        onClick={() => router.back()}
      >
        &#8592; Voltar
      </button>

      {/* Botão de Voltar para a Página Inicial */}
      <Link href="/" className="nav-button home-button">
        &#8962; Início
      </Link>
    </div>
  );
}