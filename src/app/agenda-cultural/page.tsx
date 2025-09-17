// src/app/agenda-cultural/page.tsx

import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function AgendaCulturalPage() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'cultural-agenda.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const news = JSON.parse(fileContents);

  return (
    <div>
      <h1>Agenda Cultural de Recife</h1>
      <p>Confira a programação cultural para os próximos dias na capital pernambucana!</p>
      <ul>
        {news.map((item: any) => (
          <li key={item.slug}>
            <Link href={`/agenda-cultural/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}