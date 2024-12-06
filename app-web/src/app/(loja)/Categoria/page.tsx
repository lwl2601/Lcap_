import React, { useState } from "react";

interface Produto {
  id: number;
  nome: string;
  name: string | null;
  imagens: string | null;
  preco: number;
  descricao: string;
  imagem: string;
  alias?: string;
}

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Futebol",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_969d6553cad14534bc2fccacf0927bfc~mv2.png",
    alias: "futebol",
  },
  {
    id: 3,
    nome: "Basquete",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_bf87d4d092d546118ee7cdf0f5b313a8~mv2.jpg",
  },
  {
    id: 4,
    nome: "Tênis",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 5,
    nome: "Voleibol",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 6,
    nome: "Golfe",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 7,
    nome: "Beisebol",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 8,
    nome: "Rugby",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 9,
    nome: "Tênis de Mesa",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 10,
    nome: "Badminton",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 11,
    nome: "Futebol Americano",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 12,
    nome: "Hóquei no Gelo",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 13,
    nome: "Natação",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 14,
    nome: "Atletismo",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 15,
    nome: "Handebol",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 16,
    nome: "Ciclismo",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 17,
    nome: "Boxe",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 18,
    nome: "MMA",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 19,
    nome: "Automobilismo",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 20,
    nome: "Esgrima",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 21,
    nome: "Ginástica",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 22,
    nome: "Surf",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 23,
    nome: "Skate",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 24,
    nome: "Vela",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 25,
    nome: "Remo",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 26,
    nome: "Tiro com Arco",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 27,
    nome: "Pentatlo Moderno",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 28,
    nome: "Hóquei em Campo",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 29,
    nome: "Futebol 7",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 30,
    nome: "Futebol 5",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 31,
    nome: "Goalball",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  {
    id: 31,
    nome: "Goalball",
    name: null,
    imagens: null,
    preco: 0,
    descricao: "",
    imagem:
      "https://static.wixstatic.com/media/ae1269_f06e4421f32a4c2f9bfe5ad80ee167e8~mv2.png",
  },
  // Adicione os outros produtos aqui...
];
const CategoriaButton: React.FC = () => {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  const alternarCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
  };

  const outroBotaoHandler = () => {
    // Lógica para o segundo botão
    alert("Botão 2 clicado!");
  };

  return (
    <div>
      <button
        onClick={alternarCategorias}
        style={{
          width: "300px",
          height: "auto",
          backgroundColor: "#d7af13",
          color: "white",
          border: "none",
          textAlign: "center",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto", // Centraliza o botão na página com margem
        }}
      >
        Categorias
      </button>

      {mostrarCategorias && (
        <ul
          style={{
            backgroundColor: "white", // Define o fundo branco
            color: "black",
            padding: "20px", // Espaçamento interno
            listStyle: "none", // Remove as bolinhas padrão da lista
            margin: "20px auto", // Centraliza a lista na página
            width: "300px", // Define a largura da lista
            borderRadius: "5px", // Adiciona bordas arredondadas
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Adiciona uma leve sombra para destaque
            maxHeight: "600px", // Define a altura máxima da lista
            overflowY: "auto", // Adiciona a barra de rolagem vertical
          }}
        >
          {produtos.map((produto) => (
            <li key={produto.id} style={{ padding: "10px 0" }}>
              {produto.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriaButton;
