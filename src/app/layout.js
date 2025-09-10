// Importação de fontes do Google Fonts através do Next.js
// Geist: fonte principal para texto
// Geist_Mono: fonte monoespaçada para código
import { Geist, Geist_Mono } from "next/font/google";

// Importação dos estilos globais da aplicação
import "./globals.css";

/**
 * Componente RootLayout - Layout raiz da aplicação Next.js
 * Este componente envolve todas as páginas da aplicação
 * 
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Conteúdo das páginas filhas
 */
export default function RootLayout({ children }) {
  return (
    // Estrutura HTML básica
    <html lang="en">
      <body>
        {/* 
          children: Renderiza o conteúdo da página atual
          No Next.js, este será o componente da página ativa
        */}
        {children}
      </body>
    </html>
  );
}
