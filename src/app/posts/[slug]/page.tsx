// src/app/posts/[slug]/page.tsx

import LikeButton from "@/components/LikeButton";
import NavigationButtons from "@/components/NavigationButtons"; // Importe o componente
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

// Pré-renderiza os posts em tempo de build
export async function generateStaticParams() {
  const postsFilePath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  const fileContents = fs.readFileSync(postsFilePath, 'utf8');
  const posts = JSON.parse(fileContents);
  
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const postsFilePath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  const fileContents = fs.readFileSync(postsFilePath, 'utf8');
  const posts = JSON.parse(fileContents);
  
  const post = posts.find((p: any) => p.slug === params.slug);

  if (!post) {
    return <div>Post não encontrado.</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{post.title}</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Image
          src={post.image}
          alt={post.title}
          width={800} // Ajuste a largura conforme sua preferência
          height={450} // Ajuste a altura conforme sua preferência
          style={{ borderRadius: '8px', objectFit: 'cover' }}
        />
      </div>
      <p>{post.content}</p>

      {/* Botões de navegação, abaixo do conteúdo do post */}
      <NavigationButtons /> 
      
      {/* Botão de curtir em seu próprio contêiner, abaixo dos botões de navegação */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <LikeButton />
      </div>
    </div>
  );
}