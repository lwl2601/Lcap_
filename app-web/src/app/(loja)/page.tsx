/* eslint-disable react/jsx-no-undef */
"use client";
import { useState } from "react";
import CartaoProduto from "@/components/produto/CartaoProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import {
  IconLocation,
  IconBrandWhatsapp,
  IconChartCovariate,
} from "@tabler/icons-react";
import Pesquisa from "./Pesquisa/Pesquisa";

export default function Home() {
  // Definindo o estado para controlar quais perguntas estão abertas
  const [openQuestion, setOpenQuestion] = useState(null);

  // Função para alternar a abertura das respostas
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Estilo da barra de pesquisa
  const barraPesquisaEstilo = {
    flex: "10", // Ocupa o mesmo espaço flexível que os outros componentes
    maxWidth: "1900px", 
    padding: "10px",
    marginTop: "10px", // Ajuste da margem superior
    height: "auto", // Define uma altura automática ou fixa conforme necessário
    display: "flex",
    justifyContent: "center", // Alinha os elementos à direita
    alignItems: "center", // Garante que o conteúdo dentro da barra seja alinhado verticalmente
  };

  return (
    <Pagina>
      {/* Seção Principal com Imagem de Fundo */}
      <div
        className="w-screen h-screen flex flex-col overflow-hidden m-0 p-0"
        style={{
          backgroundImage: `url(https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          left: "-5%",
          width: "99vw",
          position: "relative",
          top: -170,
        }}
      >
        <div
          className="relative flex items-center justify-center text-center text-yellow-500"
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            transition: "all 0.3s ease-in-out",
            top: "290px",
            fontFamily: "'Merriweather', serif",
          }}
        >
          Reviva seus melhores momentos e adquira suas fotos praticando as
          atividades que ama.
        </div>

        {/* Barra de pesquisa */}
        <div style={barraPesquisaEstilo}>
          <Pesquisa />
        </div>
      </div>

      {/* Categorias de cada foto */}
      <div className="flex gap-5 -mt-20 justify-center flex-wrap">
        {produtos.map((produto) => (
          <CartaoProduto key={produto.id} produto={produto} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center">
        {/* Texto explicativo */}
        <div className="lg:w-1/2 flex items-center justify-center p-4 text-center">
          <p className="text-lg text-yellow-500 font-medium leading-relaxed">
            Descubra as respostas para as perguntas mais comuns sobre a Lcap
            Photoshop e explore como transformamos ideias criativas em
            realidade. Veja o que fazemos para trazer inovação e excelência em
            cada projeto.
          </p>
        </div>

        {/* Lista de perguntas frequentes */}
        <div className="lg:w-1/2 flex items-center justify-center p-4">
          <ul className="w-full list-none space-y-4 text-lg text-yellow-500">
            {[
              {
                question: "O que é a Lcap?",
                answer: "A Lcap é uma plataforma de fotografia...",
              },
              {
                question: "Como comprar minhas fotos? Remover a marca d'água?",
                answer: "Você pode comprar suas fotos...",
              },
              {
                question: "Quanto tempo minha foto fica disponível?",
                answer: "Suas fotos ficarão disponíveis por...",
              },
              {
                question: "Como encontrar e contratar um fotógrafo?",
                answer: "Para contratar um fotógrafo...",
              },
              {
                question: "Como ser um fotógrafo parceiro da Lcap?",
                answer: "Se você quer ser parceiro...",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center border-b border-gray-300 pb-6"
              >
                <div className="mr-2">
                  <IconChartCovariate size={25} />
                </div>
                <div className="flex-1">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left focus:outline-none"
                  >
                    {item.question}
                  </button>
                  {openQuestion === index && (
                    <p className="mt-2 text-white">{item.answer}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/555584380147"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-6 bg-green-500 text-blue-950 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out flex items-center justify-center"
        aria-label="Chat no WhatsApp"
      >
        Fale Conosco!ㅤ
        <IconBrandWhatsapp size={24} />
      </a>
    </Pagina>
  );
}
