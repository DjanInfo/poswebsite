import { useEffect, useState, useMemo } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";
import { useNavigate } from "react-router-dom";

import { buscarDocumentos, excluirDocumento } from "./documentos.service";
import { colunasDocumentos } from "./documentos.columns";

export default function DocumentosPage() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function carregarDocumentos() {
      try {
        setLoading(true);
        const documentos = await buscarDocumentos();
        setDados(documentos);
      } catch (error) {
        console.error("Erro ao buscar documentos:", error.response?.data || error.message);
        alert("Erro ao carregar documentos");
      } finally {
        setLoading(false);
      }
    }

    carregarDocumentos();
  }, []);

  async function handleDelete(id) {
    const confirmar = window.confirm("Tem certeza que deseja excluir este documento?");
    if (!confirmar) return;

    try {
      await excluirDocumento(id);

      setDados((prev) =>
        prev.filter((documento) => documento.id !== id)
      );
    } catch (error) {
      console.error("Erro ao excluir:", error.response?.data || error.message);
      alert("Erro ao excluir documento");
    }
  }

  const dadosFiltrados = useMemo(() => {
    if (!pesquisa.trim()) return dados;

    const termo = pesquisa.toLowerCase();

    return dados.filter((documento) =>
      documento.nome?.toLowerCase().includes(termo) ||
      documento.email?.toLowerCase().includes(termo) ||
      documento.id?.toString().includes(termo)
    );
  }, [dados, pesquisa]);

  return (
      <ListagemLayout
        titulo="Lista de Documentos"
        subtitulo="Gerencie e visualize todos os documentos cadastrados"
        placeholderPesquisa="Buscar documento..."
        pesquisa={pesquisa}
        onPesquisa={(e) => setPesquisa(e.target.value)}
        onAdicionar={() => navigate("/documentos/novo")}
        textoBotao="Novo Documento"
      >
      <TituloTabela
        titulo="Documentos Cadastrados"
        paginaAtual={paginaAtual}
        totalPaginas={1}
        totalRegistros={dadosFiltrados.length}
        inicio={dadosFiltrados.length > 0 ? 1 : 0}
        fim={dadosFiltrados.length}
        onPaginaChange={setPaginaAtual}
      />

      {loading ? (
        <p className="p-6">Carregando...</p>
      ) : (
        <Tabela
          dados={dadosFiltrados}
          colunas={colunasDocumentos}
          chaveSelecao="id"
          onAcaoClick={(acao, item) => {
            if (acao === "visualizar") {
              navigate(`/documento/${item.id}`);
            }

            if (acao === "editar") {
              navigate(`/documento/${item.id}/editar`);
            }

            if (acao === "excluir") {
              handleDelete(item.id);
            }
          }}
        />
      )}
    </ListagemLayout>
  );
}