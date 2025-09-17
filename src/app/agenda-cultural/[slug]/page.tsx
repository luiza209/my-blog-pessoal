// src/app/agenda-cultural/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import Image from 'next/image';

// Esta função pré-renderiza as páginas em tempo de build
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'cultural-agenda.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const news = JSON.parse(fileContents);
  
  return news.map((item: any) => ({
    slug: item.slug,
  }));
}

export default function CulturalNewsPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'cultural-agenda.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const news = JSON.parse(fileContents);
  
  const newsItem = news.find((item: any) => item.slug === params.slug);

  if (!newsItem) {
    return <div>Notícia não encontrada.</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{newsItem.title}</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          width={800}
          height={450}
          style={{ borderRadius: '8px' }}
        />
      </div>
      <p>{newsItem.content}</p>
    </div>
  );
}