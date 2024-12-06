import React, { useState } from "react";
import PhoneNumberInput from "../(loja)/telefone_numero/desiner";

const Fotografo = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
    console.log(name, surname, phone, email);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 md:p-10">
      {/* Seção esquerda */}
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400">
          A melhor plataforma para venda de fotos, na Lcap você faz parte de uma
          comunidade que apoia seu talento. Bora crescer juntos!
        </h1>
        <div className="space-y-3 mt-4">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Melhor taxa do mercado</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Reconhecimento facial</span>
          </div>
        </div>
      </div>

      {/* Seção direita */}
      <div className="md:w-1/2 bg-slate-500 p-6 rounded-md shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sobrenome
            </label>
            <input
              type="text"
              placeholder="Digite seu sobrenome"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

            <div> 
              <PhoneNumberInput />      
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
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fotografo;
