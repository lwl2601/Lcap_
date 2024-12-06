import FunçãoCabecalho from "./FunçãoCabecalho";
import Carrinho from './Carrinho'
import Logo from './Logo'

export default function Cabecalho() {
    return (
      <header
        className="
                flex justify-between items-center
                bg-zinc-0 h50 px-10
            "
      >
        <FunçãoCabecalho />
      </header>
    );
}
