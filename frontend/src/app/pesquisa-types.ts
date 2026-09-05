export type RequestPesquisaDto = {
  jogoOnlineFavorito: string;
  esporteFavorito: string;
  viagemDosSonhos: string;
  memeFavorito: string;
  calcadoFavorito: string;
  cantorFavorito: string;
  jogadorFavorito: string;
  filmeFavorito: string;
  materiaPreferida: string;
  lugarFavorito: string;
  marcaPreferida: string;
  horasSono: number;
};

export type ResponsePesquisaDto = {
  id: number;
  jogoOnlineFavorito: string;
  esporteFavorito: string;
  viagemDosSonhos: string;
  memeFavorito: string;
  calcadoFavorito: string;
  cantorFavorito: string;
  jogadorFavorito: string;
  filmeFavorito: string;
  materiaPreferida: string;
  lugarFavorito: string;
  marcaPreferida: string;
  horasSono: number;
  createdAt: string;
  updatedAt: string;
};

export type PesquisaPage = {
  content: ResponsePesquisaDto[];
  page: {
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
  }
}

export type EstatisticaDescritiva = {
  resposta: string;
  quantidade: number;
}

export type EstatisticaNumerica = {
  horas: number;
  quantidade: number;
}
