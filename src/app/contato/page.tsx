// src/app/contato/page.tsx
export default function ContatoPage() {
  return (
    <div>
      <h1>Entre em Contato</h1>
      <p>Obrigado por visitar o blog! Deixe sua sugestão, feedback ou entre em contato para mais informações.</p>
      
      {/* Você pode adicionar um formulário de contato aqui mais tarde */}
      <form>
        <label htmlFor="nome">Nome:</label><br />
        <input type="text" id="nome" name="nome" /><br /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" /><br /><br />
        <label htmlFor="mensagem">Mensagem:</label><br />
        <textarea id="mensagem" name="mensagem" rows={4} cols={50} /><br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}