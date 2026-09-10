import { Injectable } from '@angular/core';

import { Setor } from '../model/Setor';
import { HttpClient } from '@angular/common/http';
//precisamos desse componente para conexões http
import { Observable } from 'rxjs';
// observable serve para aguardar dados chegarem sem dar travamento na página por assincronia?

@Injectable({
  providedIn: 'root',
})

  
export class SetorService {
  constructor(private conexao: HttpClient){}

  private urlApi = `http://127.0.0.1:8000/setores/`

  listarSetores(): Observable<Setor[]>{
 
  return this.conexao.get<Setor[]>(this.urlApi)
  }

  criarSetor(setor: Setor): Observable<Setor>{
 
  return this.conexao.post<Setor>(this.urlApi, setor)
  }

  buscarPorID(idsetor: number): Observable<Setor>{

    return this.conexao.get<Setor>(this.urlApi+`${idsetor}`)
  }

  atualizarSetor(idsetor: number, setor: Setor): Observable<Setor>{

    return this.conexao.put<Setor>(this.urlApi+`${idsetor}`, setor)
  }

  excluirSetor(idsetor: number): Observable<void>{

    return this.conexao.delete<void>(this.urlApi+`${idsetor}`)
  }

}
