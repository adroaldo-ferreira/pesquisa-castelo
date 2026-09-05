import type { EstatisticaDescritiva } from "../../types/api-requests";

export function Table(title: string, lista: EstatisticaDescritiva[]) {

    const totalQuantidade = lista.reduce((acc, item) => acc + item.quantidade, 0);

    return (
        <div>
            <h1>{title}</h1>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Percentual</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.resposta}</td>
                                <td>{item.quantidade}</td>
                                <td>{((item.quantidade / totalQuantidade) * 100).toFixed(2)}%</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
