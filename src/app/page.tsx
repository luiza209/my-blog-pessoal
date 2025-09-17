// src/app/page.tsx

import fs from 'fs';
import path from 'path';
import ImageCarousel from "@/components/carousels/ImageCarousel"; // Immporta carrossel
import FloatingButtons from "@/components/FloatingButtons";

export default function HomePage() {
  const postsFilePath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  const fileContents = fs.readFileSync(postsFilePath, 'utf8');
  const posts = JSON.parse(fileContents);

  return (
    // div flex para o layout de duas colunas
    <div className="main-content">
      {/* Lado esquerdo: Carrossel */}
      <ImageCarousel />

      {/* Lado direito: Conteúdo do blog */}
    <div className="blog-content content-box">
      <h1>Bem-vindo ao Recife em Foco</h1>
      <p>Seu guia pessoal sobre o clima, cultura e pontos turísticos da Veneza Brasileira!</p>

      {/* Botões de navegação*/}
      <div className="button-container">
        <a href="/posts/clima-em-recife-nesta-semana" className="button-link">Clima</a>
        
        <a href="/posts/programacao-cultural-do-fim-de-semana" className="button-link">Agenda Cultural</a>
        <a href="/posts/roteiro-turistico-para-o-marco-zero" className="button-link">Pontos Turísticos</a>
      </div>

      {/* Posts dentro de uma borda transparente */}
      <div className="posts-container">
        <h2>Últimos Posts</h2>
        <ul>
          {posts.map((post: any) => (
            <li key={post.slug}>
              <a href={`/posts/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}