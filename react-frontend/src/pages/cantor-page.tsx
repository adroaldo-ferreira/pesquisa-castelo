import { PaginaDescritiva } from "./models/pagina-descritiva";

export function CantorPage() {
  return (
    <PaginaDescritiva titulo="Cantor Favorito" endpoint="cantores" nomeCampo="Cantor" />
  );
}
