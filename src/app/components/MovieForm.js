// Diretiva para indicar que este componente roda no cliente
"use client";

// Importação dos hooks do React
import { useEffect, useState } from "react";

/**
 * Componente MovieForm - Formulário para adicionar novos filmes
 * 
 * @param {Object} props - Propriedades do componente
 * @param {Function} props.onAdd - Função callback chamada quando um filme é adicionado
 */
export default function MovieForm({ onAdd }) {
  // useState: Estado para armazenar os dados do formulário
  // form: objeto com os campos do formulário (titulo, sinopse, ano)
  const [form, setForm] = useState({ titulo: "", sinopse: "", ano: "" });
  
  // useState: Estado para armazenar mensagens de erro de validação
  // errors: objeto com mensagens de erro para cada campo
  const [errors, setErrors] = useState({ titulo: "", ano: "" });

  // useEffect: Hook para validação automática dos campos
  // Executa sempre que form.titulo ou form.ano mudam
  useEffect(() => {
    // Inicializa objeto de erros vazio
    const next = { titulo: "", ano: "" };

    // VALIDAÇÃO DO TÍTULO
    // Verifica se o título está vazio (após remover espaços)
    if (!form.titulo.trim()) {
      next.titulo = "Título é obrigatório.";
    }

    // VALIDAÇÃO DO ANO (apenas se preenchido)
    const raw = form.ano.trim();
    if (raw) {
      // Verifica se tem exatamente 4 dígitos usando regex
      const fourDigits = /^\d{4}$/.test(raw);
      // Converte para número para verificar faixa válida
      const n = Number(raw);
      // Valida: 4 dígitos E ano entre 1888 (primeiro filme) e 2100
      if (!fourDigits || n < 1888 || n > 2100) {
        next.ano = "Ano deve ter 4 dígitos entre 1888 e 2100.";
      }
    }

    // Atualiza o estado de erros
    setErrors(next);
  }, [form.titulo, form.ano]); // Dependências: executa quando estes campos mudam

  // Manipulação de eventos: Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    // Destructuring: extrai name e value do evento
    const { name, value } = e.target;
    // Atualiza o estado do formulário usando spread operator
    // Preserva outros campos e atualiza apenas o campo alterado
    setForm((p) => ({ ...p, [name]: value }));
  };

  // Manipulação de eventos: Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    // Previne o comportamento padrão do formulário (recarregar página)
    e.preventDefault();

    // VALIDAÇÃO FINAL: impede envio se houver erros
    if (errors.titulo || errors.ano) return;

    // Redundância de segurança: verifica título novamente
    if (!form.titulo.trim()) return;

    // Chama a função callback passada via props
    // Adiciona ID único (timestamp) e data de criação
    onAdd({
      ...form, // Spread: inclui todos os campos do formulário
      id: Date.now(), // ID único baseado em timestamp
      createdAt: new Date().toISOString(), // Data/hora atual em ISO string
    });

    // Limpa o formulário após adicionar
    setForm({ titulo: "", sinopse: "", ano: "" });
  };

  // HELPERS DE CLASSE CSS: Aplicam borda vermelha quando há erro
  const baseInput = "w-full border rounded px-3 py-2";
  const inputTitleClass =
    baseInput + (errors.titulo ? " border-red-500" : " border-gray-300");
  const inputYearClass =
    baseInput + (errors.ano ? " border-red-500" : " border-gray-300");

  // JSX: Estrutura do formulário
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 space-y-4">
      {/* Título da seção */}
      <h2 className="text-lg font-semibold">Novo Filme</h2>

      {/* CAMPO TÍTULO */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="titulo">
          Título
        </label>
        <input
          id="titulo"
          name="titulo"
          value={form.titulo} // Valor controlado pelo estado
          onChange={handleChange} // Manipulador de mudança
          className={inputTitleClass} // Classe dinâmica baseada em erro
          aria-invalid={!!errors.titulo} // Acessibilidade: indica campo inválido
          aria-describedby={errors.titulo ? "erro-titulo" : undefined} // Acessibilidade: associa erro
          placeholder="Ex.: A Origem"
          required // Atributo HTML5 para validação nativa
        />
        {/* Renderização condicional: mostra erro apenas se existir */}
        {errors.titulo && (
          <p id="erro-titulo" className="mt-1 text-xs text-red-600">{errors.titulo}</p>
        )}
      </div>

      {/* CAMPO ANO */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="ano">
          Ano (opcional)
        </label>
        <input
          id="ano"
          name="ano"
          value={form.ano} // Valor controlado pelo estado
          onChange={handleChange} // Manipulador de mudança
          className={inputYearClass} // Classe dinâmica baseada em erro
          aria-invalid={!!errors.ano} // Acessibilidade: indica campo inválido
          aria-describedby={errors.ano ? "erro-ano" : undefined} // Acessibilidade: associa erro
          placeholder="Ex.: 2014"
          inputMode="numeric" // Teclado numérico em dispositivos móveis
        />
        {/* Renderização condicional: mostra erro apenas se existir */}
        {errors.ano && (
          <p id="erro-ano" className="mt-1 text-xs text-red-600">{errors.ano}</p>
        )}
      </div>

      {/* CAMPO SINOPSE */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="sinopse">
          Sinopse
        </label>
        <textarea
          id="sinopse"
          name="sinopse"
          value={form.sinopse} // Valor controlado pelo estado
          onChange={handleChange} // Manipulador de mudança
          className="w-full border border-gray-300 rounded px-3 py-2 min-h-28"
          placeholder="Digite a sinopse..."
        />
      </div>

      {/* BOTÃO DE ENVIO */}
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
        Adicionar Filme
      </button>
    </form>
  );
}