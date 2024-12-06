"use client"; // Adicione esta linha para especificar que o código é executado no lado do cliente

import React, { useState } from "react";
import DDD from "../(loja)/telefone_numero/ddd";
import PhoneNumberInput from "../(loja)/telefone_numero/desiner";

const Criar_conta: React.FC = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        {/* Seção de Reconhecimento Facial à Esquerda */}
        <div className="lg:w-1/2 bg-blue-100 p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Melhor plataforma para venda de fotos
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Na Banlek você faz parte de uma comunidade que apoia seu talento.
            Bora crescer juntos! Melhor taxa do mercado.
          </p>
          <div className="mt-4 w-full">
            {/* Placeholder para reconhecimento facial */}
            <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Reconhecimento Facial</span>
            </div>
          </div>
        </div>

        {/* Seção de Cadastro à Direita */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
            Criar Conta
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sobrenome
              </label>
              <input
                type="text"
                placeholder="Digite seu sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
                <PhoneNumberInput/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Próximo
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Ao criar e enviar o formulário você estará concordando com a{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Política de Privacidade
              </a>{" "}
              e os{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Termos de Serviço
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Criar_conta;
