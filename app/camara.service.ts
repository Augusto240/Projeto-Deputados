import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {
  private URL = `https://dadosabertos.camara.leg.br/api/v2`
  constructor(private httpClient: HttpClient) { }

  obterTodosDeputados(): Observable<any>{
    return this.httpClient.get(`${this.URL}/deputados?ordem=ASC&ordenarPor=nome`)
  }

  obterPartidos(): Observable<any>{
    return this.httpClient.get(`${this.URL}/partidos?ordem=ASC&ordenarPor=sigla`)
  }

}
