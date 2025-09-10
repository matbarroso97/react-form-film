// Diretiva para indicar que este componente roda no cliente
"use client";

/**
 * Componente Header - Cabeçalho da aplicação
 * Componente funcional simples que renderiza o título da aplicação
 * 
 * Características:
 * - Não recebe props (componente puramente visual)
 * - Não possui estado interno
 * - Renderiza apenas JSX estático
 */
function Header() {
  return (
    // Elemento header com classes Tailwind CSS para estilização
    <header className="flex justify-center bg-indigo-700 p-3">
      {/* 
        Título principal da aplicação
        Classes: text-white (cor branca), font-bold (negrito), text-xl (tamanho grande)
      */}
      <h1 className="text-white font-bold text-xl">Registrador de Filmes</h1>
    </header>
  );
}

// Exportação padrão do componente
export default Header;