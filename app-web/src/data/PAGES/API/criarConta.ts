import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../model/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    const { nome, sobrenome, telefone, email, senha } = req.body;

    try {
      // Verifique se o usuário já existe
      const userExistente = await User.findOne({ email });
      if (userExistente) {
        return res.status(400).json({ mensagem: "Usuário já existe." });
      }

      // Crie um novo usuário
      const novoUsuario = new User({
        nome,
        sobrenome,
        telefone,
        email,
        senha, // Idealmente, a senha deve ser criptografada antes de salvar
      });

      await novoUsuario.save();
      res.status(201).json({ mensagem: "Conta criada com sucesso!" });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro ao criar conta.", error });
    }
  } else {
    res.status(405).json({ mensagem: "Método não permitido." });
  }
}
function dbConnect() {
  throw new Error("Function not implemented.");
}

