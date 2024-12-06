"use client"
import { notFound } from "next/navigation";
import produtos from "@/data/constants/produtos";
import Link from "next/link";
import { IconShoppingCart } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react"; // Ícone para o botão flutuante
import Capa from "../../../components/template/FunçãoCabecalho";

interface ProdutoPageProps {
  params: {
    produtoNome: string;
  };
}

export default function ProdutoPage({ params }: ProdutoPageProps) {

  const produto = produtos.find(
    (prod) => prod.alias.toLowerCase() === params.produtoNome.toLowerCase()
  );

  if (!produto) {
    return notFound();
  }

  // Verificando se 'imagens' existe e possui pelo menos uma imagem
  const imagemProduto =
    produto.imagens && produto.imagens.length > 0
      ? produto.imagens[0]
      : "/default-image.png"; // URL da imagem padrão

  // Quantidade de itens no carrinho (valor fixo para exemplo)
  const qtdeDeItens = 2;

  return (
    <div>
      {/* Imagem de fundo do produto */}
      <div className="absolute inset-0">
        <img
          src={produto.imagem}
          alt={`Imagem do produto ${produto.nome}`}
          className="w-full h-full object-cover " // Tornando a imagem um pouco transparente para melhor contraste
        />
      </div>

      <div>
        {/* Cabeçalho com logo e carrinho */}
        <div>
          <Capa />
        </div>


      {/* Conteúdo do Produto */}
      <div className="relative z-10 flex flex-col items-center mt-16">
        {/* Nome do produto */}
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          {produto.nome}
        </h1>

        {/* Detalhes do produto */}
        <div className="relative  w-full max-w-md h-auto bg-blue-900 bg-opacity-80 p-7 rounded-lg shadow-lg">
          <p className="text-lg text-gray-800 mb-4">{produto.descricao}</p>
          <p className="text-2xl font-bold text-blue-950 mb-4">
            R$ {produto.preco.toFixed(2)}
          </p>

          {/* Botão de compra */}
          <button className="mt-6 bg-blue-950 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-200 w-full">
            Comprar Agora
          </button>

          {/* Botão Flutuante do WhatsApp */}
          <a
            href="https://wa.me/555584380147"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-blue-950 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Chat no WhatsApp"
          >
            Fale Conosco!ㅤ
            <IconBrandWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  </div>

  );
}
