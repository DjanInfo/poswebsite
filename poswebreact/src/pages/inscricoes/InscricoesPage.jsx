import { useEffect, useState } from "react";
import ListagemLayout from "../../layouts/ListagemLayout";
import Tabela from "../../components/Tabela";
import TituloTabela from "../../components/TituloTabela";

import { colunasInscricoes } from "./inscricoes.columns";
import { buscarInscricoes } from "./inscricoes.service";

export default function InscricoesPage(){
    const [dados, setDados] = useState([]);
      const [paginaAtual, setPaginaAtual] = useState(1);
      const [pesquisa, setPesquisa] = useState("");
      const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function carregarInscricoes() {
          try {
            setLoading(true);
            const Inscricoes = await buscarInscricoes();
            setDados(Inscricoes);
    
          } catch (error) {
            console.error("Erro ao buscar Inscricoes:", error);
          } finally {
            setLoading(false);
          }
        }
    
        carregarInscricoes();
      }, []);

      return (
        <ListagemLayout
          titulo="Lista de Inscrições"
          subtitulo="Gerencie e visualize as inscrições"
          placeholderPesquisa="inscrição"
          pesquisa={pesquisa}
          onPesquisa={(e) => setPesquisa(e.target.value)}
        >
          <TituloTabela
            titulo="Alunos Matriculados"
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
              colunas={colunasInscricoes}
              chaveSelecao="inscricao"
            />
          )}
        </ListagemLayout>
      );
}