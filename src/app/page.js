// Diretiva para indicar que este componente roda no cliente (não no servidor)
"use client";

import { useState } from "react";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";


export default function HomePage() {
  // useState: Hook para gerenciar estado local
  const [movies, setMovies] = useState([]);
  
  // query: string que armazena o texto de busca
  // setQuery: função para atualizar o texto de busca
  const [query, setQuery] = useState("");

  // Manipulação de eventos: Função para adicionar novo filme
  // Recebe um novo filme e o adiciona no início do array (usando spread operator)
  const handleAdd = (newMovie) => setMovies((prev) => [newMovie, ...prev]);
  
  // Manipulação de eventos: Função para remover filme
  // Filtra o array removendo o filme com o ID especificado
  const handleRemove = (id) => setMovies((prev) => prev.filter((m) => m.id !== id));

  // LÓGICA DE FILTRO POR TEXTO
  // Remove espaços em branco e converte para minúsculas para busca case-insensitive
  const q = query.trim().toLowerCase();
  
  // Renderização condicional: Aplica filtro apenas se há texto de busca
  // Se não há query, mostra todos os filmes; caso contrário, filtra por:
  // - Título do filme
  // - Sinopse (usando || "" para evitar erro se sinopse for null/undefined)
  // - Ano (usando || "" para evitar erro se ano for null/undefined)
  const filtered = q
    ? movies.filter(
        (m) =>
          m.titulo.toLowerCase().includes(q) ||
          (m.sinopse || "").toLowerCase().includes(q) ||
          (m.ano || "").toLowerCase().includes(q)
      )
    : movies;

  // JSX: Estrutura da página
  return (
    <>
      {/* Componente de cabeçalho */}
      <Header />
      
      {/* Conteúdo principal com classes Tailwind para layout responsivo */}
      <main className="min-h-screen bg-indigo-50 p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Formulário para adicionar filmes - recebe função de callback via props */}
          <MovieForm onAdd={handleAdd} />
          
          {/* Barra de busca - recebe valor e função de mudança via props */}
          <SearchBar value={query} onChange={setQuery} />
          
          {/* Lista de filmes - recebe filmes filtrados e função de remoção via props */}
          <MovieList items={filtered} onRemove={handleRemove} />
        </div>
      </main>
    </>
  );
}