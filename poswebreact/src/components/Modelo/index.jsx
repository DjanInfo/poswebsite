import { useState } from "react";
import TituloTopo from "../TituloTopo";
import ControleLista from "../ControleLista";

export default function Modelo({ children }) {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Container central da página */}
      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-8
        flex
        flex-col
        gap-6
      ">
        
        {/* Header da página */}
        <div className="flex justify-between items-start">
          <TituloTopo
            titulo="Lista de Alunos"
            subtitulo="Gerencie e visualize todos os alunos matriculados"
          />

          <ControleLista
            pesquisa={pesquisa}
            onPesquisa={(e) => setPesquisa(e.target.value)}
            onFiltro={() => console.log("filtro")}
            onExportar={() => console.log("exportar")}
            placeholderPesquisa="Buscar aluno..."
          />
        </div>

        <div className="flex flex-col gap-6">
          {children}
        </div>

      </div>
    </div>
  );
}