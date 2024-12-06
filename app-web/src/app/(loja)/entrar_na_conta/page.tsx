"use client";
import Capa from "../../../components/template/FunçãoCabecalho";
import Entrar from "../../criar_conta/entrar";
import Zap from "../telefone_numero/zap";

// Adicione esta linha para especificar que o código é executado no lado do cliente

export default function criar_conta() {
  return (
    <div>
      < Entrar/>
      <Zap />
    </div>
  );
}
