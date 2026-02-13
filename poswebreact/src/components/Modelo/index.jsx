import { useState } from "react";
import Texto_Escuro from "../TextoEscuro";
import TituloTabela from "../TituloTabela";

export default function Modelo() {
  const [paginaAtual, setPaginaAtual] = useState(1);

  return (
    <>
      <Texto_Escuro>Modelo</Texto_Escuro>

      <TituloTabela
        titulo="Alunos Matriculados"
        paginaAtual={paginaAtual}
        totalPaginas={3}
        totalRegistros={1247}
        inicio={1}
        fim={10}
        onPaginaChange={setPaginaAtual}
      />
    </>
  );
}