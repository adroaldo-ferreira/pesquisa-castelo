import { PaginaNumerica } from "./models/pagina-numerica";

export function SonoPage() {
  return (
    <PaginaNumerica titulo="Horas de sono" endpoint="horas-sono" nomeCampo="Horas de sono" />
  );
}
