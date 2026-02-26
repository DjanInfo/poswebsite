<<<<<<< HEAD
import { useEffect, useState, useMemo } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";
import { useNavigate } from "react-router-dom";

import { buscarDocumentos, excluirDocumento } from "./documentos.service";
import { colunasDocumentos } from "./documentos.columns";
=======
import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";

import { colunasDocumentos } from "./documentos.columns";
import { buscarDocumentos } from "./documentos.service";
>>>>>>> 9097860fee835603fbdfd784844faed7ca8331ce

export default function DocumentosPage() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

<<<<<<< HEAD
  const navigate = useNavigate();

=======
>>>>>>> 9097860fee835603fbdfd784844faed7ca8331ce
  useEffect(() => {
    async function carregarDocumentos() {
      try {
        setLoading(true);
        const documentos = await buscarDocumentos();
        setDados(documentos);
<<<<<<< HEAD
      } catch (error) {
        console.error("Erro ao buscar documentos:", error.response?.data || error.message);
        alert("Erro ao carregar documentos");
=======

      } catch (error) {
        console.error("Erro ao buscar Documento:", error);
>>>>>>> 9097860fee835603fbdfd784844faed7ca8331ce
      } finally {
        setLoading(false);
      }
    }

    carregarDocumentos();
  }, []);

<<<<<<< HEAD
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
=======
  return (
    <ListagemLayout
      titulo="Lista de Documentos"
      subtitulo="Gerencie e visualize todos os documentos cadastrados "
      placeholderPesquisa="Buscar documento..."
      pesquisa={pesquisa}
      onPesquisa={(e) => setPesquisa(e.target.value)}
    >
>>>>>>> 9097860fee835603fbdfd784844faed7ca8331ce
      <TituloTabela
        titulo="Documentos Cadastrados"
        paginaAtual={paginaAtual}
        totalPaginas={1}
<<<<<<< HEAD
        totalRegistros={dadosFiltrados.length}
        inicio={dadosFiltrados.length > 0 ? 1 : 0}
        fim={dadosFiltrados.length}
=======
        totalRegistros={dados.length}
        inicio={1}
        fim={dados.length}
>>>>>>> 9097860fee835603fbdfd784844faed7ca8331ce
        onPaginaChange={setPaginaAtual}
      />

      {loading ? (
<<<<<<< HEAD
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
=======
        <p>Carregando...</p>
      ) : (
        <Tabela
          dados={dados}
          colunas={colunasDocumentos}
          chaveSelecao="id"
>>>>>>> 9097860fee835603fbdfd784844faed7ca8331ce
        />
      )}
    </ListagemLayout>
  );
}