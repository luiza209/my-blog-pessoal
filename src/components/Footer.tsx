// src/components/Footer.tsx
import "./Footer.css"; // Crie este arquivo de CSS a seguir

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Recife em Foco. Criado com Next.js.</p>
    </footer>
  );
}