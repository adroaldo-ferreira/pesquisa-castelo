import { useState } from "react";
import { insertReport } from "../../services/pesquisa-service";

export function Cadastro() {
    const valorInicial = {
        jogoOnlineFavorito: "",
        esporteFavorito: "",
        viagemDosSonhos: "",
        memeFavorito: "",
        calcadoFavorito: "",
        cantorFavorito: "",
        jogadorFavorito: "",
        filmeFavorito: "",
        materiaPreferida: "",
        lugarFavorito: "",
        marcaPreferida: "",
        horasSono: 0,
    };

    const [cadastro, setCadastro] = useState(valorInicial);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        setCadastro((prev) => ({
            ...prev,
            [name]: name === "horasSono" ? Number(value) : value,
        }));
    };

    const salvarPesquisa = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        try {
            const response = await insertReport(cadastro);

            console.log("Response:", response);

            setCadastro(valorInicial);
        } catch (error) {
            console.error("Erro ao cadastrar pesquisa:", error);
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-md-5">

                            <h1 className="h3 text-center mb-4">
                                Cadastro de pesquisa
                            </h1>

                            <form onSubmit={salvarPesquisa}>
                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="jogoOnlineFavorito"
                                            className="form-label"
                                        >
                                            Jogo online favorito
                                        </label>

                                        <input
                                            id="jogoOnlineFavorito"
                                            name="jogoOnlineFavorito"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.jogoOnlineFavorito}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="esporteFavorito"
                                            className="form-label"
                                        >
                                            Esporte favorito
                                        </label>

                                        <input
                                            id="esporteFavorito"
                                            name="esporteFavorito"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.esporteFavorito}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="viagemDosSonhos"
                                            className="form-label"
                                        >
                                            Viagem dos sonhos
                                        </label>

                                        <input
                                            id="viagemDosSonhos"
                                            name="viagemDosSonhos"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.viagemDosSonhos}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="memeFavorito"
                                            className="form-label"
                                        >
                                            Meme favorito
                                        </label>

                                        <input
                                            id="memeFavorito"
                                            name="memeFavorito"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.memeFavorito}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="calcadoFavorito"
                                            className="form-label"
                                        >
                                            Calçado favorito
                                        </label>

                                        <input
                                            id="calcadoFavorito"
                                            name="calcadoFavorito"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.calcadoFavorito}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="cantorFavorito"
                                            className="form-label"
                                        >
                                            Cantor favorito
                                        </label>

                                        <input
                                            id="cantorFavorito"
                                            name="cantorFavorito"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.cantorFavorito}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="jogadorFavorito"
                                            className="form-label"
                                        >
                                            Jogador favorito
                                        </label>

                                        <input
                                            id="jogadorFavorito"
                                            name="jogadorFavorito"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.jogadorFavorito}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="filmeFavorito"
                                            className="form-label"
                                        >
                                            Filme favorito
                                        </label>

                                        <input
                                            id="filmeFavorito"
                                            name="filmeFavorito"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.filmeFavorito}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="materiaPreferida"
                                            className="form-label"
                                        >
                                            Matéria preferida
                                        </label>

                                        <input
                                            id="materiaPreferida"
                                            name="materiaPreferida"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.materiaPreferida}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="lugarFavorito"
                                            className="form-label"
                                        >
                                            Lugar favorito
                                        </label>

                                        <input
                                            id="lugarFavorito"
                                            name="lugarFavorito"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.lugarFavorito}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="marcaPreferida"
                                            className="form-label"
                                        >
                                            Marca preferida
                                        </label>

                                        <input
                                            id="marcaPreferida"
                                            name="marcaPreferida"
                                            type="text"
                                            className="form-control"
                                            required
                                            value={cadastro.marcaPreferida}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="horasSono"
                                            className="form-label"
                                        >
                                            Horas de sono
                                        </label>

                                        <input
                                            id="horasSono"
                                            name="horasSono"
                                            type="number"
                                            min="0"
                                            max="24"
                                            className="form-control"
                                            required
                                            value={cadastro.horasSono}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-12 d-grid mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Cadastrar
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
