import { useEffect, useState } from "react";
import { Table } from "../../components/table";
import { getList } from "../../services/pesquisa-service";
import type { EstatisticaDescritiva } from "../../types/api-requests";

export function GamePage() {
    const [lista, setLista] = useState<EstatisticaDescritiva[]>([]);

    useEffect(() => {
        getList("games").then(setLista);
    }, []);

    return (<>
        <div className="container">
            {Table("Jogo Online", lista)}
        </div>
    </>
    )
}