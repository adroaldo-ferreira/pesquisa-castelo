import { useEffect, useState } from "react";
import { Table } from "../../components/table";
import { getList } from "../../requests/get-list";
import type { EstatisticaDescritiva } from "../../types/api-requests";

export function EsportePage() {
  const [lista, setLista] = useState<EstatisticaDescritiva[]>([]);

  useEffect(() => {
    getList("esportes").then(setLista);
  }, []);

  return (
    <>
      <div className="container">{Table("Esportes", lista)}</div>
    </>
  );
}
