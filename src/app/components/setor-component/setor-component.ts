import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SetorService } from '../../services/setor-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { SetorListaComponent } from '../setor-lista-component/setor-lista-component';

@Component({
  selector: 'app-setor-component',
  imports: [FormsModule, SetorListaComponent],
  templateUrl: './setor-component.html',
  styleUrl: './setor-component.css',
})
export class SetorComponent {

  setor = ''
  editar = false
  idsetor = 0

  constructor(
    private setorService: SetorService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
  this.idsetor = Number(this.route.snapshot.paramMap.get('id'))
  console.log('ID capturado da URL:', this.idsetor)

  if (this.idsetor > 0) {
    this.editar = true
    this.carregarSetor(this.idsetor)
  }
}
cancelarEdicao() {
  this.setor = '';
  this.editar = false;
}
carregarSetor(id: number) {
  this.setorService.buscarPorID(id)
    .subscribe({
      next: (dados) => {
        console.log('Dado recebido do backend:', dados)
        this.setor = dados.setor
        this.cdr.detectChanges()
      },
      error: (erro) => {
        console.log('Erro ao carregar setor', erro)
      }
    })
}
  salvar() {
    const objSetor = { idsetor: this.idsetor, setor: this.setor }

    if (!this.editar) {
      this.setorService.criarSetor(objSetor)
        .subscribe({
          next: () => {
            this.router.navigate(['/SETOR-LISTA'])
          },
          error: (erro) => {
            console.log('Erro ao criar setor', erro)
          }
        })
    } else {
      this.setorService.atualizarSetor(this.idsetor, objSetor)
        .subscribe({
          next: () => {
            this.router.navigate(['/SETOR-LISTA'])
          },
          error: (erro) => {
            console.log('Erro ao atualizar setor', erro)
          }

          
        })
    }
  }
}