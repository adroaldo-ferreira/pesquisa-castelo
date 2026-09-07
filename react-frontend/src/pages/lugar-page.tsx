import { useEffect, useState } from "react";
import { Table } from "../components/table";
import { getList } from "../requests/get-list";
import type { EstatisticaDescritiva } from "../types/api-requests";

export function LugarPage() {
  const [lista, setLista] = useState<EstatisticaDescritiva[]>([]);

  useEffect(() => {
    getList("lugares").then(setLista);
  }, []);

  return (
    <>
      <div className="container">{Table("Lugares preferidos", lista)}</div>
    </>
  );
}
