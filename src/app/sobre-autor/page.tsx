// src/app/sobre-autor/page.tsx

import Image from 'next/image';

export default function SobreAutorPage() {
  return (
    <div>
      <h1>Sobre o(a) Autor(a)</h1>
      <Image
        src="/images/autor-perfil.jpg" // Corrija esta linha
        alt="Foto do(a) autor(a)"
        width={200}
        height={200}
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <p>Olá! Meu nome é Anna Luiza e sou o(a) criador(a) do blog "Recife em Foco". Minha paixão por esta cidade me inspirou a compartilhar as suas belezas, diversificação cultural, seu papel como importante polo gastronômico. A cidade oferece um cenário vibrante com atrações históricas, um clima agradável e um ambiente acolhedor.</p>
      <p>Aqui, você encontrará informações detalhadas sobre o clima, a rica cultura e os pontos turísticos imperdíveis de Recife.</p>
    </div>
  );
}