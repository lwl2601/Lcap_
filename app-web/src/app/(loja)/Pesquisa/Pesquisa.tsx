import { IconLocation } from "@tabler/icons-react";

export default function Pesquisa (){

    return (
      <div>
        <div className="flex items-center justify-center  ">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="  h-11 w-80 md:w-50 text-blue-950 px-5 py-2 border-2 border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              style={{
                transition: "all 0.3s ease-in-out",
              }}
              aria-label="Barra de pesquisa"
            />
            <button
              className="absolute right-0 h-11 w-12 flex items-center justify-center bg-yellow-600 border-30 border-yellow  transform transition-transform duration-300 ease-in-out hover:scale-110"
              aria-label="Buscar localização"
            >
              <IconLocation size={20} className="border-3" />
            </button>
          </div>
        </div>
      </div>
    );
}