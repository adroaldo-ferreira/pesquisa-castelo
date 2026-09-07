import { useEffect, useState } from "react";
import { Table } from "../components/table";
import { getList } from "../requests/get-list";
import type { EstatisticaDescritiva } from "../types/api-requests";

export function FilmePage() {
  const [lista, setLista] = useState<EstatisticaDescritiva[]>([]);

  useEffect(() => {
    getList("filmes").then(setLista);
  }, []);

  return (
    <>
      <div className="container">{Table("Filmes", lista)}</div>
    </>
  );
}
