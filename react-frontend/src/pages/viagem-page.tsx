import { useEffect, useState } from "react";
import { Table } from "../components/table";
import { getList } from "../requests/get-list";
import type { EstatisticaDescritiva } from "../types/api-requests";

export function ViagemPage() {
  const [lista, setLista] = useState<EstatisticaDescritiva[]>([]);

  useEffect(() => {
    getList("viagens").then(setLista);
  }, []);

  return (
    <>
      <div className="container">{Table("Viagem dos sonhos", lista)}</div>
    </>
  );
}
