"use client";
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function LojaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvedorCarrinho>
      <div
        className="min-h-screen flex flex-col rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundImage: `url(https://static.wixstatic.com/media/ae1269_22d2b29ae7ca426bbe91b332fceeafee~mv2.png)`,
          backgroundSize: "cover", // Garante que a imagem cubra todo o contêiner
          backgroundPosition: "center", // Centraliza a imagem
          opacity: "90%",
        }}
      >
        {/* Conteúdo da Página */}
        <main className="flex-1 p-8">{children}</main>

        {/* Rodapé da Loja */}
        <footer className="bg-black-900 text-white p-4 flex justify-between items-center">
          {/* Seção de ícones de redes sociais */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="text-white hover:text-gray-400"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="text-white hover:text-gray-400"
              />
            </a>
            <a
              href="https://wa.me/555584380147"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="lg"
                className="text-white hover:text-gray-400"
              />
            </a>
          </div>

          {/* Texto do rodapé */}
          <p className="text-sm">
            © 2024 - Lcap Photoshop. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </ProvedorCarrinho>
  );
}
