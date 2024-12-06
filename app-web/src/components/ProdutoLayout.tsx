// /components/ProdutoLayout.tsx

import { ReactNode } from "react";

interface ProdutoLayoutProps {
  children: ReactNode;
}

export default function ProdutoLayout({ children }: ProdutoLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Cabeçalho */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 text-center shadow-lg">
        <h1 className="text-3xl font-extrabold">Explore Detalhes do Produto</h1>
      </header>

      {/* Corpo da página */}
      <main className="flex flex-1 justify-center p-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full">
          {children}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 text-center shadow-lg">
        <p className="font-semibold">
          © 2024 - Loja de Produtos | Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
