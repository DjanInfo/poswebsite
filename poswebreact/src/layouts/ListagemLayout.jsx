import TituloTopo from "../components/TituloTopo";
import ControleLista from "../components/ControleLista";
import Card from "../components/CardTopo/Card";

  
  export default function ListagemLayout({
  titulo,
  subtitulo,
  placeholderPesquisa,
  pesquisa,
  onPesquisa,
  cards,
  children
}) {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">

        <div className="flex justify-between items-start">
          <TituloTopo titulo={titulo} subtitulo={subtitulo} />

          <ControleLista
            pesquisa={pesquisa}
            onPesquisa={onPesquisa}
            placeholderPesquisa={placeholderPesquisa}
          />
        </div>

        {cards && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        )}

        {children}

      </div>
    </div>
  );
}
