import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function Zap() {
return(
    <div>
              {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/555584380147"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-6 bg-green-500 text-blue-950 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out flex items-center justify-center"
        aria-label="Chat no WhatsApp"
      >
        Fale Conosco!ㅤ
        <IconBrandWhatsapp size={24} />
      </a>
      </div>
    )
}