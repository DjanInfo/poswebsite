import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";

import { colunasEditais } from "./editais.columns";
import { buscarEditais } from "./editais.service";

export default function EditalPage() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarEditais() {
      try {
        setLoading(true);
        const editais = await buscarEditais();
        setDados(editais);

      } catch (error) {
        console.error("Erro ao buscar editais:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarEditais();
  }, []);

  return (
    <ListagemLayout
      titulo="Lista de Editais"
      subtitulo="Gerencie e visualize todos os editais publicados"
      placeholderPesquisa="Buscar edital..."
      pesquisa={pesquisa}
      onPesquisa={(e) => setPesquisa(e.target.value)}
    >
      <TituloTabela
        titulo="Editais Publicados"
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
          colunas={colunasEditais}
          chaveSelecao="id"
        />
      )}
    </ListagemLayout>
  );
}