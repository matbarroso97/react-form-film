// components/MovieItem.jsx
// Diretiva para indicar que este componente roda no cliente
"use client";

// Importação do componente Link do Next.js para navegação
import Link from "next/link";

/**
 * Componente MovieItem - Item individual da lista de filmes
 * 
 * @param {Object} props - Propriedades do componente
 * @param {Object} props.movie - Objeto contendo os dados do filme
 * @param {Function} props.onRemove - Função callback para remover o filme
 */
export default function MovieItem({ movie, onRemove }) {
  // Destructuring: extrai propriedades do objeto movie
  // Desestruturação das propriedades do filme para facilitar o uso
  const { id, titulo, sinopse, ano, createdAt } = movie;

  // CONSTRUÇÃO DA URL: Cria URL para página de detalhes do filme
  // Usa query parameters para passar dados do filme
  const href =
    `/movies/${id}` + // Rota dinâmica com ID do filme
    `?titulo=${encodeURIComponent(titulo)}` + // Título codificado para URL
    `&sinopse=${encodeURIComponent(sinopse || "")}` + // Sinopse (com fallback para string vazia)
    `&ano=${encodeURIComponent(ano || "")}` + // Ano (com fallback para string vazia)
    `&createdAt=${encodeURIComponent(createdAt)}`; // Data de criação

  // FORMATAÇÃO DE DATA: Converte string ISO para objeto Date
  // Só cria objeto Date se createdAt existir
  const d = createdAt ? new Date(createdAt) : null;

  // JSX: Estrutura do item da lista
  return (
    <li className="bg-white shadow rounded p-4 flex items-start justify-between border-l-4 border-indigo-500">
      {/* CONTEÚDO PRINCIPAL: Informações do filme */}
      <div className="pr-4">
        {/* Título do filme com ano (se disponível) */}
        <h3 className="font-semibold text-gray-900">
          {titulo} 
          {/* Renderização condicional: mostra ano apenas se existir */}
          {ano && <span className="text-gray-500 font-normal">({ano})</span>}
        </h3>
        
        {/* Renderização condicional: mostra sinopse apenas se existir */}
        {sinopse && <p className="text-gray-700 mt-1 line-clamp-2">{sinopse}</p>}
        
        {/* Renderização condicional: mostra data de criação apenas se existir */}
        {d && (
          <p className="text-xs text-gray-500 mt-2">
            Filme Adicionado em em: {d.toLocaleDateString("pt-BR")},{" "}
            {d.toLocaleTimeString("pt-BR", { hour12: false })}
          </p>
        )}
      </div>

      {/* AÇÕES: Botões de ação lado a lado */}
      <div className="flex items-center gap-3 text-sm shrink-0">
        {/* Link para página de detalhes usando Next.js Link */}
        <Link href={href} className="text-indigo-600 hover:underline px-2 py-1">
          Ver detalhes
        </Link>
        
        {/* Botão para excluir filme */}
        <button
          onClick={() => onRemove(id)} // Manipulação de eventos: chama função de remoção
          className="text-red-600 hover:underline px-2 py-1"
        >
          Excluir
        </button>
      </div>
    </li>
  );
}
