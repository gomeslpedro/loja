import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private baseUrl = 'http://localhost:8090/api/produtos'; 

  constructor(private http: HttpClient) {}

  
  inserir(produto: Produto): Observable<Object> {
    return this.http.post(`${this.baseUrl}/novo`, produto);
  }

 
  alterar(produto: Produto): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${produto.id}`, produto);
  }


  pesquisar(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${id}`);
  }


  remover(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
  listarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }
}
