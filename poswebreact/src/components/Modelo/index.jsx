import Texto_Escuro from "../TextoEscuro";
import Card from "../CardTopo/Card";

export default function Modelo() {
  return (

    <div className="px-6 py-4">
      
      <Texto_Escuro>Modelo </Texto_Escuro>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <Card
          titulo="Total de Alunos"
          valor="1,247"
          corTexto="text-blue-500"
          corBg="bg-blue-500/20"
          icone="👥"
        />
        <Card
          titulo="Ativos"
          valor="1,198"
          corTexto="text-green-500"
          corBg="bg-green-500/20"
          icone="✅"
        />
        <Card
          titulo="Inativos"
          valor="49"
          corTexto="text-red-500"
          corBg="bg-red-500/20"
          icone="❌"
        />
        <Card
          titulo="Novos este mês"
          valor="87"
          corTexto="text-purple-500"
          corBg="bg-purple-500/20"
          icone="⭐"
        />

      </div>
    </div>
  );
}
