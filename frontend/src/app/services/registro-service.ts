import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../app.routes';
import { PesquisaPage, RequestPesquisaDto, ResponsePesquisaDto } from '../pesquisa-types';


@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private http = inject(HttpClient);

  save(dto: RequestPesquisaDto): Observable<ResponsePesquisaDto> {
    return this.http.post<ResponsePesquisaDto>(`${BASE_URL}/respostas`, dto);
  }

  update(id: number, dto: RequestPesquisaDto): Observable<ResponsePesquisaDto> {
    return this.http.put<ResponsePesquisaDto>(`${BASE_URL}/respostas/${id}`, dto);
  }

  find(id: number): Observable<ResponsePesquisaDto> {
    return this.http.get<ResponsePesquisaDto>(`${BASE_URL}/respostas/${id}`);
  }

  findAll(page = 0, size = 20): Observable<PesquisaPage> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PesquisaPage>(`${BASE_URL}/respostas`, { params });
  }

  delete(id: number) {
    this.http.delete<void>(`${BASE_URL}/respostas/${id}`);
  }
}
