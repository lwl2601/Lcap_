import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
  senha: string;
}

const UserSchema: Schema = new Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

// Middleware para criptografar a senha antes de salvar
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("senha")) return next();
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
