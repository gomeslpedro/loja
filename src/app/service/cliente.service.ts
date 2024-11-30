import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http : HttpClient) { }

  inserir(obj: Cliente): Observable<Object> {
    return this.http.post("http://localhost:8090/api/clientes/novo", obj, { responseType: 'text' }).pipe(
      catchError((error) => {
        return throwError(() => error); 
      })
    );
  }


  alterar(obj: Cliente) : Observable<Object> {
    return this.http.put("http://localhost:8090/api/clientes", obj);
  }

  pesquisar(codigo: number) : Observable<any> {
    return this.http.get("http://localhost:8090/api/cliente/"+ codigo);
  }

  remover(codigo: number) : Observable<any> {
    return this.http.delete("http://localhost:8090/api/cliente/"+ codigo);
  }

  validarLogin(email: string, senha: string) {
    return this.http.post('http://localhost:8090/api/clientes/login', { email, senha }, { responseType: 'text' });
  }
  
}