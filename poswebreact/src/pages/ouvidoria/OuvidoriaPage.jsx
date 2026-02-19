import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";

import { colunasOuvidoria } from "./ouvidoria.columns";
import { buscarOuvidorias } from "./ouvidoria.service";

export default function AlunoPage() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarOuvidorias() {
      try {
        setLoading(true);
        const alunos = await buscarOuvidorias();
        setDados(alunos);

      } catch (error) {
        console.error("Erro ao buscar ouvidorias:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarOuvidorias();
  }, []);

  return (
    <ListagemLayout
      titulo="Lista de Ouvidorias"
      subtitulo="Gerencie e visualize todos os Ouvidorias Enviadas"
      placeholderPesquisa="Buscar ouvidoria..."
      pesquisa={pesquisa}
      onPesquisa={(e) => setPesquisa(e.target.value)}
    >
      <TituloTabela
        titulo="Ouvidorias Enviadas"
        paginaAtual={paginaAtual}
        totalPaginas={1}
        totalRegistros={dados.length}
        inicio={1}
        fim={dados.length}
        onPaginaChange={setPaginaAtual}
      />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Tabela
          dados={dados}
          colunas={colunasOuvidoria}
          chaveSelecao="id"
        />
      )}
    </ListagemLayout>
  );
}
