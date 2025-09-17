// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import "@/components/FloatingButtons.css"; // Importe o CSS aqui
import FloatingButtons from "@/components/FloatingButtons";// Importe o componente

export const metadata: Metadata = {
  title: "Recife em Foco - Blog Pessoal",
  description: "Um blog sobre pontos turísticos, clima e cultura de Recife, criado com Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header className="header">
          <nav>
            <a href="/">Recife em Foco</a>
            <a href="/sobre">Sobre a Cidade</a>
          </nav>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <p>© 2025 Recife em Foco. Criado com Next.js.</p>
        </footer>
        {/* Inclua os botões flutuantes aqui */}
        <FloatingButtons />
      </body>
    </html>
  );
}