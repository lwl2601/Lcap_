import { useState } from "react";
import { useRouter } from "next/router";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      nome,
      sobrenome,
      telefone,
      email,
      senha,
    };

    try {
      const response = await fetch("/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Se o cadastro for bem-sucedido, redireciona para a página de login
        router.push("/login");
      } else {
        // Se já existe o cadastro, exibe a mensagem de erro
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("Erro ao criar conta. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="flex min-h-screen justify-end bg-slate-700 items-center">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        <div className="flex flex-col items-center justify-start w-full md:w-1/2 p-7 bg-slate-700">
          <div className="mb-6">
            <img
              src="https://static.wixstatic.com/shapes/ae1269_f0cba43aea484d9b91bf9235a6f6f7ae.svg"
              alt="Logo"
              className="w-0 md:w-60 h-auto"
            />
          </div>

          <h1 className="text-2xl font-bold mb-2 text-yellow-400">
            Criar Conta
          </h1>
          <p className="mb-4 text-yellow-400">Preencha os dados abaixo</p>

          {/* Mensagem de erro */}
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-sm md:max-w-md"
          >
            <label htmlFor="nome" className="mb-1 text-sm text-yellow-400">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              className="mb-4 p-2 border text-black border-gray-300 rounded-md w-full"
            />

            <label htmlFor="sobrenome" className="mb-1 text-sm text-yellow-400">
              Sobrenome
            </label>
            <input
              type="text"
              id="sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              placeholder="Sobrenome"
              className="mb-4 p-2 border text-black border-gray-300 rounded-md w-full"
            />

            <label htmlFor="telefone" className="mb-1 text-sm text-yellow-400">
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Telefone"
              className="mb-4 p-2 border text-black border-gray-300 rounded-md w-full"
            />

            <label htmlFor="email" className="mb-1 text-sm text-yellow-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              className="mb-4 p-2 border text-black border-gray-300 rounded-md w-full"
            />

            <label htmlFor="senha" className="mb-1 text-sm text-yellow-400">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="******"
              maxLength="35"
              className="mb-4 p-2 border text-black border-gray-300 rounded-md w-full"
            />

            <button
              type="submit"
              className="bg-blue-950 text-yellow-400 rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300 w-full"
            >
              Criar Conta
            </button>
          </form>
        </div>

        <div className="flex w-full md:w-1/2 justify-center items-center">
          <img
            src="https://static.wixstatic.com/media/ae1269_222e042fee6b46079f87cbee97aa49b8~mv2.jpeg"
            alt="Fotógrafo"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
