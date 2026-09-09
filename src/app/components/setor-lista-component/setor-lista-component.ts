import { Component, signal } from '@angular/core';

import { SetorService } from '../../services/setor-service';
import { Setor } from '../../model/Setor';

@Component({
  selector: 'app-setor-lista-component',
  imports: [],
  templateUrl: './setor-lista-component.html',
  styleUrl: './setor-lista-component.css',
})



export class SetorListaComponent {
  listaSetores = signal<Setor[]>([])

  constructor(private setorService: SetorService) {}

  ngOnInit() {
    this.listarSetores()
  }

  listarSetores() {
    this.setorService.listarSetores()
      .subscribe({
        next: (dados) => {
          this.listaSetores.set(dados)
        },
        error: (erro) => {
          console.log('Erro ao listar setores', erro)
        }
      })
  }
}

