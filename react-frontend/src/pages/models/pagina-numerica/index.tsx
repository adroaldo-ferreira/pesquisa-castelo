import { useEffect, useState } from "react";
import { getNumericList } from "../../../services/pesquisa-service";
import type { EstatisticaNumerica } from "../../../types/api-requests";

interface PaginaNumericaProps {
  titulo: string;
  endpoint: string;
  nomeCampo: string;
}

export function PaginaNumerica({
  titulo,
  endpoint,
  nomeCampo,
}: PaginaNumericaProps) {
  const [lista, setLista] = useState<EstatisticaNumerica[]>([]);

  const totalQuantidade = lista.reduce((acc, item) => acc + item.quantidade, 0);

  useEffect(() => {
    getNumericList(endpoint).then(setLista);
  }, [endpoint]);

  return (
    <div>
      <h1>{titulo}</h1>

      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{nomeCampo}</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Percentual</th>
          </tr>
        </thead>

        <tbody>
          {lista.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.horas}</td>
              <td>{item.quantidade}</td>
              <td>
                {totalQuantidade > 0
                  ? ((item.quantidade / totalQuantidade) * 100).toFixed(2)
                  : "0.00"}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
