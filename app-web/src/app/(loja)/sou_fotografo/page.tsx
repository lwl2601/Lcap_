"use client";
import Capa from "../../../components/template/FunçãoCabecalho";
import Criar_Conta_Lcap from "../../criar_conta/criar_Conta_Lcap";
import Fotografo from "../../criar_conta/fotografo";
import Zap from "../telefone_numero/zap";

// Adicione esta linha para especificar que o código é executado no lado do cliente

export default function entrar_na_conta() {
  return (
    <div>
      <Capa />
      <Fotografo/>
      <Zap />
    </div>
  );
}
