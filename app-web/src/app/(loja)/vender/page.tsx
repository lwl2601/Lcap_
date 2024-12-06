"use client";
import Capa from "../../../components/template/FunçãoCabecalho";
import Criar_conta from "../../criar_conta/criar_conta";
import Zap from "../telefone_numero/zap";

 // Adicione esta linha para especificar que o código é executado no lado do cliente


export default function baixar_fotos() {
  return (
    <div >
        <Capa/>
        <Criar_conta/>
        <Zap/>
        </div>
  )
}
