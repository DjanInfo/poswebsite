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
import Ouvidoria from "./pages/ouvidoria/OuvidoriaPage";


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
  )
}

export default function App() {
  return (
   <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelo" element={<ModeloPage />} />
        <Route path="/ouvidoria" element={<Ouvidoria/>} />
      </Routes>

      <Footer />
    </>
  )
}
