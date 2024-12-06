import Link from "next/link";
import useCarrinho from "@/data/hooks/useCarrinho";
import Produto from "@/data/model/Produto";
import Image from "next/image";

export interface CartaoProdutoProps {
  produto: Produto;
}


// Função para truncar a descrição do produto
const truncateDescription = (descricao: string, limit: number = 50): string => {
  return descricao.length > limit
    ? descricao.substring(0, limit) + "..."
    : descricao;
};

export default function CartaoProduto(props: CartaoProdutoProps) {
  const { adicionar } = useCarrinho();
  const { nome, imagem, preco,alias } = props.produto;

  // Categoria do Produto, fora do cartão principal
  return (
    <>
      <div className="absolute  text-yellow-500 "
            style={{ fontSize:'50px',fontWeight:'bold', top: '810px', left: '70px' }}>
        Categorias
      </div>

      {/* Cartão do Produto */}
      <div className="flex flex-col w-72 bg-zinc-950 rounded-lg shadow-lg overflow-hidden mt-10 ml-10">
        <Link href={`/${alias}`}>
          {/* Imagem do Produto */}
          <div className="relative w-full h-52">
            <Image src={imagem} alt={nome} layout="fill" objectFit="cover" />
          </div>

          {/* Informações do Produto */}
          <div className="flex-1 flex flex-col gap-4 p-5">
            {/* Título do Produto */}
            <h2
              className="relative text-xl  font-bold text-yellow-500 transition-all duration-100 hover:text-yellow-700 hover:underline"
              style={{
                minHeight: "3rem", // Altura mínima para duas linhas
                lineHeight: "1.5rem", // Altura da linha
              }}
            >
              {nome}
            </h2>

            {/* Alinhamento horizontal para preço e botão */}
            <div
              className="flex justify-between items-center mt-auto"
              style={{ paddingBottom: "10px" }}
            >
              {/* Código para o preço e o botão "Eu quero" */}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
