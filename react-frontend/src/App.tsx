import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Cadastro } from "./pages/cadastro";
import { CalcadoPage } from "./pages/calcado-page";
import { CantorPage } from "./pages/cantor-page";
import { EsportePage } from "./pages/esporte-page";
import { FilmePage } from "./pages/filme-page";
import { GamePage } from "./pages/game-page";
import { JogadorPage } from "./pages/jogador-page";
import { LugarPage } from "./pages/lugar-page";
import { MarcaPage } from "./pages/marca-page";
import { MateriaPage } from "./pages/materia-page";
import { MemePage } from "./pages/meme-page";
import { RelatorioPesquisa } from "./pages/realtorio-pesquisa";
import { SonoPage } from "./pages/sono-page";
import { ViagemPage } from "./pages/viagem-page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RelatorioPesquisa />} />
        <Route path="/tabela-pesquisa" element={<RelatorioPesquisa />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/cantor" element={<CantorPage />} />
        <Route path="/jogador" element={<JogadorPage />} />
        <Route path="/meme" element={<MemePage />} />
        <Route path="/calcado" element={<CalcadoPage />} />
        <Route path="/esporte" element={<EsportePage />} />
        <Route path="/filme" element={<FilmePage />} />
        <Route path="/lugar" element={<LugarPage />} />
        <Route path="/marca" element={<MarcaPage />} />
        <Route path="/materia" element={<MateriaPage />} />
        <Route path="/viagem" element={<ViagemPage />} />
        <Route path="/sono" element={<SonoPage />} />
        <Route path="*" element={<h1>404 - Não encontrado</h1>} />
      </Routes>
    </>
  );
}

export default App;
