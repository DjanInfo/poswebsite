import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import ProcessosSeletivos from "./components/ProcessosSeletivos"
import Noticias from "./components/Noticias"
import Numeros from "./components/Numeros"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Hero />
        <Features />
        <ProcessosSeletivos />
        <Noticias />
        <Numeros />
      </main>

      <Footer />
    </>
  )
}
