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
import ModeloPage from "./pages/modelo/AlunoPage";
import DocentePage from "./pages/Docente/Docentepage";
import InscricaoPage from "./pages/inscricoes/InscricoesPage";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProcessosSeletivos />
      <Noticias />
      <Numeros />
      <TituloTabela />
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
        <Route path="/docentes" element={<DocentePage />} />
        <Route path="/inscricoes" element={<InscricaoPage />} />
        <Route path="/inscricoes/:id" element={<InscricaoPage />} />
      </Routes>

      <Footer />
    </>
  );
}
