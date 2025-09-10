// Diretiva para indicar que este componente roda no cliente
"use client";

/**
 * Componente SearchBar - Barra de busca para filtrar filmes
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.value - Valor atual do campo de busca (controlado)
 * @param {Function} props.onChange - Função callback chamada quando o valor muda
 */
export default function SearchBar({ value, onChange }) {
  return (
    <input
      // VALOR CONTROLADO: O valor é controlado pelo estado do componente pai
      value={value}
      
      // MANIPULAÇÃO DE EVENTOS: Função chamada quando o usuário digita
      // Extrai apenas o valor do input e passa para a função onChange
      onChange={(e) => onChange(e.target.value)}
      
      // ESTILIZAÇÃO: Classes Tailwind CSS para aparência e layout
      className="w-full border border-gray-200 rounded px-3 py-2 bg-white shadow-sm"
      
      // PLACEHOLDER: Texto de exemplo mostrado quando o campo está vazio
      placeholder="Buscar filmes..."
      
      // ACESSIBILIDADE: Label para leitores de tela
      aria-label="Buscar filmes"
    />
  );
}