import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiltroTitulo } from '../classes/filters/titulo-parameters.classe';
import { Titulo } from '../classes/models/titulo.classe';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  constructor(private http: HttpClient) { }

  public importTitles(param: FiltroTitulo): Observable<Titulo[]> {
    return this.http.post<Titulo[]>("http://localhost:8080/titulo/importar",
      null, {
      params: { ...param }
    }
    );
  }

  public getTitles(param: FiltroTitulo): Observable<Titulo[]> {
    return this.http.get<Titulo[]>("http://localhost:8080/titulo", {
      params: { ...param }
    }
    );
  }
}
