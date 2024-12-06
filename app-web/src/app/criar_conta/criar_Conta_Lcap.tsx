"use client"; // Adicione esta linha para especificar que o código é executado no lado do cliente

import React, { useState } from "react";
import PhoneNumberInput from "../(loja)/telefone_numero/desiner";

const Criar_Conta_Lcap: React.FC = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Funções de validação da senha
  const validaSenha = (senha: string) => {
    const regras = [
      { regex: /[A-Z]/, texto: "Uma letra maiúscula" },
      { regex: /[0-9]/, texto: "Um número" },
      { regex: /[^A-Za-z0-9]/, texto: "Um caractere especial" },
      { regex: /^.{8,30}$/, texto: "Entre 8 e 30 caracteres" },
    ];
    return regras.map((regra) => ({
      ...regra,
      cumprido: regra.regex.test(senha),
    }));
  };

  const regrasSenha = validaSenha(senha);
  const senhasCombinam = senha === confirmarSenha;

  // Verificação se todos os campos estão preenchidos
  const camposPreenchidos =
    nome && sobrenome && telefone && email && senha && confirmarSenha;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!camposPreenchidos) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!senhasCombinam) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const response = await fetch("/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, sobrenome, telefone, email, senha }),
      });

      if (response.ok) {
        alert("Conta criada com sucesso!");
        // Resetar o estado ou redirecionar para outra página
        setNome("");
        setSobrenome("");
        setTelefone("");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
      } else {
        const error = await response.json();
        alert(`Erro: ${error.message}`);
      }
    } catch (err) {
      console.error("Erro ao criar conta:", err);
      alert("Ocorreu um erro ao criar a conta. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        {/* Seção de Reconhecimento Facial à Esquerda */}
        <div className="lg:w-1/2 bg-blue-100 p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Melhor plataforma para venda de fotos
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Na Lcap você faz parte de uma comunidade que apoia seu talento. Bora
            crescer juntos! Melhor taxa do mercado.
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
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
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

            {/* Campo de Senha */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="mt-1 block w-full border text-black border-gray-300 rounded-md p-2"
                required
              />
              <ul className="mt-2">
                {regrasSenha.map((regra, index) => (
                  <li
                    key={index}
                    className={`text-sm ${
                      regra.cumprido ? "text-green-600" : "text-black"
                    }`}
                  >
                    {regra.texto}
                  </li>
                ))}
              </ul>
            </div>

            {/* Campo de Confirmar Senha */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmar Senha
              </label>
              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="mt-1 block w-full border text-black border-gray-300 rounded-md p-2"
                required
              />
              <p
                className={`text-sm mt-2 ${
                  senhasCombinam ? "text-green-600" : "text-red-600"
                }`}
              >
                {senhasCombinam ? "Senhas combinam" : "Senhas não combinam"}
              </p>
            </div>

            {/* Mostrar/Ocultar Senha */}
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={mostrarSenha}
                  onChange={() => setMostrarSenha(!mostrarSenha)}
                />
                <span className="ml-2 text-sm text-gray-700">
                  Mostrar Senha
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              disabled={
                !camposPreenchidos ||
                !regrasSenha.every((r) => r.cumprido) ||
                !senhasCombinam
              }
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

export default Criar_Conta_Lcap;
