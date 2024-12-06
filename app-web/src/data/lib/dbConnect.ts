import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/Lcap"; // Substitua "nome_do_banco" pelo nome do seu banco de dados.

if (!MONGODB_URI) {
  throw new Error("Por favor, defina a variável de ambiente MONGODB_URI");
}

// Verifica se já existe uma conexão em cache para evitar múltiplas conexões.
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("Conectado ao MongoDB");
        return mongoose;
      })
      .catch((err) => {
        console.error("Erro ao conectar ao MongoDB:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
