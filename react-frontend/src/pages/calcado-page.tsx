import { useEffect, useState } from "react";
import { Table } from "../components/table";
import { getList } from "../requests/get-list";
import type { EstatisticaDescritiva } from "../types/api-requests";

export function CalcadoPage() {
  const [lista, setLista] = useState<EstatisticaDescritiva[]>([]);

  useEffect(() => {
    getList("calcados").then(setLista);
  }, []);

  return (
    <>
      <div className="container">{Table("Calçado favorito", lista)}</div>
    </>
  );
}
