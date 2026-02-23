import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";

import { colunasDocumentos } from "./documentos.columns";
import { buscarDocumentos } from "./documentos.service";

export default function DocumentosPage() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarDocumentos() {
      try {
        setLoading(true);
        const documentos = await buscarDocumentos();
        setDados(documentos);

      } catch (error) {
        console.error("Erro ao buscar Documento:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDocumentos();
  }, []);

  return (
    <ListagemLayout
      titulo="Lista de Documentos"
      subtitulo="Gerencie e visualize todos os documentos cadastrados "
      placeholderPesquisa="Buscar documento..."
      pesquisa={pesquisa}
      onPesquisa={(e) => setPesquisa(e.target.value)}
    >
      <TituloTabela
        titulo="Documentos Cadastrados"
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
          colunas={colunasDocumentos}
          chaveSelecao="id"
        />
      )}
    </ListagemLayout>
  );
}