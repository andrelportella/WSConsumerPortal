import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../classes/models/empresa.classe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) {

  }
  public getListaEmpresaWS(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>("http://localhost:8080/testes");
  }

}
