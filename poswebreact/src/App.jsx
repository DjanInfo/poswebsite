import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import ProcessosSeletivos from "./components/ProcessosSeletivos"
import Noticias from "./components/Noticias"
import Numeros from "./components/Numeros"
import Footer from "./components/Footer"
import TituloTabela from "./components/TituloTabela"
import Alunos from "./pages/alunos/Aluno"
import AlunoCreate from "./pages/alunos/alunoCreate"
import AlunoShow from "./pages/alunos/alunoShow"
import AlunoEdit from "./pages/alunos/alunoEdit"
import ModeloPage from "./pages/modelo/AlunoPage";
import ModeloCreatePage from "./pages/modelo/AlunoCreatePage"
import ModeloShowPage from "./pages/modelo/AlunoShowPage"
import ModeloEditPage from "./pages/modelo/AlunoEditPage"
import Ouvidoria from "./pages/ouvidoria/OuvidoriaPage";
import NoticiaPage from "./pages/noticias/NoticiaPage"
import DocentePage from "./pages/Docente/Docentepage";
import InscricaoPage from "./pages/inscricoes/InscricoesPage";
import InscricoesEditPage from "./pages/inscricoes/InscricoesEditPage";
import InscricoesShowPage from "./pages/inscricoes/InscricoesShowPage";
import DisciplinasPage from "./pages/disciplinas/Disciplina"
import DisciplinaVisualizar from "./pages/disciplinas/disciplinavisualizar"
import DisciplinasEditPage from "./pages/disciplinas/DisciplinaEditPage"
import DisciplinaCreatePage from "./pages/disciplinas/DisciplinaCreatePage"


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProcessosSeletivos />
      <Noticias />
      <Numeros />
  
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelo" element={<ModeloPage />} />
        <Route path="/modelo/novo" element={<ModeloCreatePage />} />
        <Route path="/modelo/:matricula" element={<ModeloShowPage />} />
        <Route path="/modelo/:matricula/editar" element={<ModeloEditPage />} />
        <Route path="/aluno" element={<Alunos />} />
        <Route path="/aluno/novo" element={<AlunoCreate />} />
        <Route path="/aluno/:matricula" element={<AlunoShow />} />
        <Route path="/aluno/:matricula/editar" element={<AlunoEdit />} />
        <Route path="/ouvidoria" element={<Ouvidoria/>} />
        <Route path="/noticias" element={<NoticiaPage />} />
        <Route path="/docentes" element={<DocentePage />} />
        <Route path="/inscricoes" element={<InscricaoPage />} />
        <Route path="/inscricoes/:id" element={<InscricoesShowPage />} />
        <Route path="/inscricoes/:id/editar" element={<InscricoesEditPage />} />
        <Route path="/inscricoes/:id" element={<InscricaoPage />} />
        <Route path="/disciplinas" element={<DisciplinasPage/>} />
        <Route path="/disciplinas/:id" element={<DisciplinaVisualizar/>}/>
        <Route path="/disciplinas/:id/editar" element={<DisciplinasEditPage/>}/>
        <Route path="/disciplinas/nova" element={<DisciplinaCreatePage/>}/>
      </Routes>

      <Footer />
    </>
  );
}
