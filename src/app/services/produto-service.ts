import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private urlApi = `http://127.0.0.1:8000/produtos/`;

  constructor(private conexao: HttpClient) {}

  listarProdutos(): Observable<Produto[]> {
    return this.conexao.get<Produto[]>(this.urlApi);
  }

  excluirProduto(idproduto: number): Observable<void> {
    return this.conexao.delete<void>(`${this.urlApi}${idproduto}`);
  }
}