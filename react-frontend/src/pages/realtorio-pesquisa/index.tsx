import { useEffect, useState } from "react";
import { getReportPage } from "../../services/pesquisa-service";
import type { PesquisaPage } from "../../types/api-requests";

export function RelatorioPesquisa() {
    const [lista, setLista] = useState<PesquisaPage>({
        content: [],
        page: {
            totalElements: 0,
            totalPages: 0,
            size: 0,
            number: 0,
        },
    });

    const excluirRegistro = (id: number) => {
        console.log("Excluir registro:", id);
    };

    useEffect(() => {
        getReportPage().then(setLista);
    }, []);

    return (
        <div className="container py-4">
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-primary text-white py-3">
                    <h2 className="h4 mb-0">Tabela de Pesquisa</h2>
                </div>

                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered align-middle mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Jogo</th>
                                    <th scope="col">Esporte</th>
                                    <th scope="col">Viagem</th>
                                    <th scope="col">Meme</th>
                                    <th scope="col">Calçado</th>
                                    <th scope="col">Cantor</th>
                                    <th scope="col">Jogador</th>
                                    <th scope="col">Filme</th>
                                    <th scope="col">Matéria</th>
                                    <th scope="col">Lugar</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Sono</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {lista.content.length > 0 ? (
                                    lista.content.map((cat) => (
                                        <tr key={cat.id}>
                                            <td className="text-muted fw-semibold">
                                                {cat.id}
                                            </td>

                                            <td className="fw-medium">
                                                {cat.jogoOnlineFavorito}
                                            </td>

                                            <td className="text-muted">
                                                {cat.esporteFavorito}
                                            </td>

                                            <td className="text-muted">
                                                {cat.viagemDosSonhos}
                                            </td>

                                            <td className="text-muted">
                                                {cat.memeFavorito}
                                            </td>

                                            <td className="text-muted">
                                                {cat.calcadoFavorito}
                                            </td>

                                            <td className="text-muted">
                                                {cat.cantorFavorito}
                                            </td>

                                            <td className="text-muted">
                                                {cat.jogadorFavorito}
                                            </td>

                                            <td className="text-muted">
                                                {cat.filmeFavorito}
                                            </td>

                                            <td className="text-muted">
                                                {cat.materiaPreferida}
                                            </td>

                                            <td className="text-muted">
                                                {cat.lugarFavorito}
                                            </td>

                                            <td className="text-muted">
                                                {cat.marcaPreferida}
                                            </td>

                                            <td className="text-muted">
                                                {cat.horasSono}
                                            </td>

                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() =>
                                                        excluirRegistro(cat.id)
                                                    }
                                                >
                                                    <i className="bi bi-trash"></i>{" "}
                                                    Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={14}
                                            className="text-center py-5 text-muted"
                                        >
                                            <div className="fw-semibold">
                                                Nenhuma pesquisa encontrada
                                            </div>

                                            <small>
                                                Não há respostas para exibir no
                                                momento.
                                            </small>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

