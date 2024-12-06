import Link from "next/link";
import { IconShoppingCart } from "@tabler/icons-react";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Capa() {
  const { qtdeDeItens } = useCarrinho(); // Obtendo a quantidade de itens do carrinho

  return (
    <div
      className="flex items-center justify-between w-full px-7"
      style={{
        position: "relative", // Garante que o z-index funcione
        zIndex: 10, // Garante que a logo fique na frente da imagem de fundo
      }}
    >
      {/* Contêiner para a logo e os botões à esquerda */}
      <div className="flex items-center space-x-5">
        {/* Logo */}
        <Link href="/">
          <div
            className="text-xl leading-4"
            style={{
              backgroundImage: `url("https://static.wixstatic.com/shapes/ae1269_f0cba43aea484d9b91bf9235a6f6f7ae.svg")`,
              backgroundSize: "cover", // Ajusta a imagem para cobrir o contêiner
              backgroundPosition: "center", // Centraliza a imagem
              width: "170px", // Tamanho do ícone (largura)
              height: "100px", // Tamanho do ícone (altura)
              opacity: "100%",
              position: "relative", // Garante que o z-index funcione
              zIndex: 10, // Garante que a logo fique na frente da imagem de fundo
            }}
          />
        </Link>

        {/* Botões "Vender" e "Buscar Fotos" */}
        <div className="flex items-center space-x-5">
          <Link href="/buscar_fotos">
            <button className="text-yellow-400 transition-all duration-300 hover:text-yellow-600 hover:underline">
              Buscar Fotos
            </button>
          </Link>
          <Link href="/vender">
            <button className="text-yellow-400 transition-all duration-300 hover:text-yellow-600 hover:underline">
              Vender
            </button>
          </Link>
        </div>
      </div>

      {/* Botões "Entrar na conta", "Criar conta" e "Baixar Fotos" à direita */}
      <div className="flex items-center space-x-4">
        <Link href="/entrar_na_conta">
          <button className="bg-blue-950 text-white border-2 border-blue-950 rounded-md px-4 py-2 transition-all duration-300 hover:bg-blue-800 hover:text-yellow-400 hover:underline focus:outline-none">
            Entrar
          </button>
        </Link>
        <Link href="/criar_conta">
          <button className="bg-blue-950 text-white border-2 border-blue-950 rounded-md px-4 py-2 transition-all duration-300 hover:bg-blue-800 hover:text-yellow-400 hover:underline focus:outline-none">
            Criar conta
          </button>
        </Link>
        <Link href="/baixar_fotos">
          <button className="text-yellow-400 transition-all duration-300 hover:text-yellow-600 hover:underline">
            Baixar Fotos
          </button>
        </Link>
        {/* Ícone do carrinho de compras */}
        <Link href="/carrinho">
          <div className="flex relative">
            <IconShoppingCart size={32} stroke={2} color="#ca8a04" />
            <div
              className="
                absolute -top-2.5 -right-2.5 w-6 h-6 bg-yellow-700 rounded-full
                flex justify-center items-center text-xs
              "
            >
              {qtdeDeItens}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
