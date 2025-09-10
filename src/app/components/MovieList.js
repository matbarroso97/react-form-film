// Diretiva para indicar que este componente roda no cliente
"use client";

// Importação do componente MovieItem para renderizar cada filme
import MovieItem from "./MovieItem";

/**
 * Componente MovieList - Lista de filmes
 * 
 * @param {Object} props - Propriedades do componente
 * @param {Array} props.items - Array de filmes para exibir
 * @param {Function} props.onRemove - Função callback para remover um filme
 */
export default function MovieList({ items, onRemove }) {
  return (
    <section className="bg-white shadow rounded">
      {/* CABEÇALHO DA LISTA: Mostra título e contador de filmes */}
      <div className="px-4 py-3 border-b">
        <h2 className="font-medium text-gray-900">
          Filmes ({items.length}) {/* Interpolação: mostra quantidade de filmes */}
        </h2>
      </div>
      
      {/* LISTA DE FILMES */}
      <ul className="divide-y">
        {/* RENDERIZAÇÃO CONDICIONAL: Lista vazia vs lista com filmes */}
        {items.length === 0
          ? // Se não há filmes, mostra mensagem de lista vazia
            <li className="p-4 text-gray-500">Nenhum filme encontrado</li>
          : // Se há filmes, mapeia cada filme para um componente MovieItem
            items.map((m) => (
              <MovieItem 
                key={m.id} // Prop key obrigatória para otimização do React
                movie={m} // Passa dados do filme como prop
                onRemove={onRemove} // Passa função de remoção como prop
              />
            ))
        }
      </ul>
    </section>
  );
}