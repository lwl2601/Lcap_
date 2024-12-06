app.post("/api/usuarios", async (req, res) => {
  try {
    const { nome, sobrenome, telefone, email, senha } = req.body;

    // Verificar se o usuário já existe
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ message: "E-mail já registrado." });
    }

    // Criar novo usuário
    const usuario = new Usuario({ nome, sobrenome, telefone, email, senha });
    await usuario.save();

    // Retornar sucesso ao cliente
    res.status(201).json({ message: "Conta criada com sucesso!" });
  } catch (error) {
    console.error("Erro ao criar conta:", error);
    res.status(500).json({ message: "Erro ao criar conta." });
  }
});
