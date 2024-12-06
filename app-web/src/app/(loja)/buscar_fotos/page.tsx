"use client";
import Capa from "../../../components/template/FunçãoCabecalho";
import Album from "../Album/ft_buscar_fotos";
import AlbumGallery from "../Album/galeria";
import Calendario from "../calendario/page"; // Certifique-se de que este caminho esteja correto
import CategoriaButton from "../Categoria/page";
import Cidades from "../cidades/cidades"; // Certifique-se de que este caminho esteja correto
import Pesquisa from "../Pesquisa/Pesquisa";
import Zap from "../telefone_numero/zap"; // Certifique-se de que este caminho esteja correto

export default function BuscarFotos() {
  return (
    <div className="flex flex-col items-center justify-start h-screen p-5">
      <Capa />
      <Zap />
      <div className="flex h-full w-full max-w-[1200px] mt-5 gap-5">
        {/* Barra de pesquisa com altura mínima definida */}
        <div className="flex-1 max-w-[400px] min-h-[70px] mt-5">
          <Pesquisa />
        </div>
        <div className="flex-1">
          <CategoriaButton />
        </div>
        <div className="flex-1">
          <Cidades />
        </div>
        <div className="flex-1">
          <Calendario />
        </div>
      </div>
      <Album />
      <AlbumGallery />
    </div>
  );
}
