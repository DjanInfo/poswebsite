import { useEffect, useState,useMemo } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";
import { useNavigate } from "react-router-dom";

import { buscarDocentes, excluirDocente } from "./docente.service";
import { colunasDocentes } from "./docente.columns";


export default function DocentePage() {
  const [dados, setDados] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // =============================
  // CARREGAR DOCENTES
  // =============================
  useEffect(() => {
    async function carregarDocentes() {
      try {
        setLoading(true);
        const docente = await buscarDocentes();
        setDados(docente);

      } catch (error) {
        console.error("Erro ao buscar Docente:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    }

    carregarDocentes();
  }, []);

  // =============================
  // DELETE
  // =============================
  async function handleDelete(id) {
    const confirmar = window.confirm("Tem certeza que deseja excluir este docente?");
    if (!confirmar) return;

    try {
      await excluirDocente(id);

      setDados((prev) => 
        prev.filter((docente) => docente.id !== id)
      );
    } catch (error) {
      console.error("Erro ao excluir:", error.response?.data || error.message);
      alert("Erro ao excluir docente");
    }  
  }

  // =============================
  // FILTRO DE PESQUISA (CLIENT SIDE)
  // =============================
  const dadosFiltrados = useMemo(() => {
    if (!pesquisa.trim()) return dados;

    const termo = pesquisa.toLowerCase();

    return dados.filter((docente) => 
      docente.nome?.toLowerCase().includes(termo) ||
      docente.email?.toLowerCase().includes(termo) ||
      docente.id?.toLowerCase().includes(termo)
    );
  }, [dados, pesquisa]);

  return (
    <ListagemLayout
      titulo="Lista de Docentes"
      subtitulo="Gerencie e visualize todos os docentes cadastrados"
      placeholderPesquisa="Buscar docente..."
      pesquisa={pesquisa}
      onPesquisa={(e) => setPesquisa(e.target.value)}
      onAdicionar={() => navigate("/docentes/novo")}
      textoBotao="Novo Docente"
    >
      <TituloTabela
        titulo="Docentes Cadastrados"
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
          colunas={colunasDocentes}
          chaveSelecao="id"
          onAcaoClick={(acao, item) => {
            if (acao === "visualizar") {
              navigate(`/docentes/${item.id}`);
            }

            if (acao === "editar") {
              navigate(`/docentes/${item.id}/editar`);
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
