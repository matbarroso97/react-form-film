// app/movies/[id]/page.js
"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const MovieDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();



  // Recebe dados pela URL
  const movie = {
    id: parseInt(params.id),
    titulo: searchParams.get("titulo"),
    sinopse: searchParams.get("sinopse"),
    ano: searchParams.get("ano"),
    createdAt: searchParams.get("createdAt"),
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Detalhes do Filme</h1>
            <button
              onClick={() => router.back()}
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded"
            >
              ← Voltar
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
              <p className="text-gray-900">{movie.titulo}</p>
            </div>

            {movie.ano && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ano</label>
                <p className="text-gray-900">{movie.ano}</p>
              </div>
            )}

            {movie.sinopse && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sinopse</label>
                <p className="text-gray-900 whitespace-pre-wrap">{movie.sinopse}</p>
              </div>
            )}

            {movie.createdAt && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cadastrado em</label>
                <p className="text-gray-900">
                  {new Date(movie.createdAt).toLocaleDateString("pt-BR")},{" "}
                  {new Date(movie.createdAt).toLocaleTimeString("pt-BR", { hour12: false })}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;

