import { useEffect, useState } from "react";
import { Table } from "../components/table";
import { getList } from "../services/pesquisa-service";
import type { EstatisticaDescritiva } from "../types/api-requests";

export function JogadorPage() {
  const [lista, setLista] = useState<EstatisticaDescritiva[]>([]);

  useEffect(() => {
    getList("jogadores").then(setLista);
  }, []);

  return (
    <>
      <div className="container">{Table("Jogadores", lista)}</div>
    </>
  );
}
