src/app/assine/page.tsx

export default function AssinePage() {
  return (
    <div>
      <h1>Assine o Blog</h1>
      <p>Fique por dentro de todas as novidades! Assine nossa newsletter e receba as últimas notícias sobre Recife diretamente no seu email.</p>
      
      {/* Exemplo de formulário de inscrição simples */}
      <form>
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />
        <button type="submit">Assinar</button>
      </form>
      
      <p>Prometemos não enviar spam.</p>
    </div>
  );
}