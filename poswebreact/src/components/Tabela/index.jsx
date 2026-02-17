import { useState } from "react";
import TabelaHeader from "./TabelaHeader";
import LinhaTabela from "./LinhaTabela";

export default function Tabela({ 
  dados,                 
  colunas,               
  chaveSelecao = "id",    
  onAcaoClick,            
  customRenderers = {}    
}) {
  const [selecionados, setSelecionados] = useState([]);

  const toggleSelecionar = (chave) => {
    if (selecionados.includes(chave)) {
      setSelecionados(selecionados.filter(id => id !== chave));
    } else {
      setSelecionados([...selecionados, chave]);
    }
  };

  const selecionarTodos = () => {
    if (selecionados.length === dados.length) {
      setSelecionados([]);
    } else {
      setSelecionados(dados.map(item => item[chaveSelecao]));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <TabelaHeader 
            colunas={colunas.map(c => c.titulo)}
            todosSelecionados={selecionados.length === dados.length && dados.length > 0}
            onSelecionarTodos={selecionarTodos}
          />
          <tbody className="bg-white divide-y divide-gray-200">
            {dados.map((item) => (
              <LinhaTabela
                key={item[chaveSelecao]}
                item={item}
                colunas={colunas}
                selecionado={selecionados.includes(item[chaveSelecao])}
                onSelecionar={() => toggleSelecionar(item[chaveSelecao])}
                onAcaoClick={onAcaoClick}
                customRenderers={customRenderers}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}