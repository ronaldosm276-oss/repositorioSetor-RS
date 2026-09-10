import { Component, signal } from '@angular/core';
import { SetorService } from '../../services/setor-service';
import { ProdutoService } from '../../services/produto-service';
import { Setor } from '../../model/Setor';

import { Produto } from '../../model/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setor-lista-component',
  imports: [],
  templateUrl: './setor-lista-component.html',
  styleUrl: './setor-lista-component.css',
})
export class SetorListaComponent {
  listaSetores = signal<Setor[]>([])
  listaProdutos = signal<Produto[]>([])
  idSetorExpandido = signal<number>(0)

  constructor(
    private setorService: SetorService,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarSetores()
    this.listarProdutos()
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

  listarProdutos() {
    this.produtoService.listarProdutos()
      .subscribe({
        next: (dados) => {
          this.listaProdutos.set(dados)
        },
        error: (erro) => {
          console.log('Erro ao listar produtos', erro)
        }
      })
  }

  editarSetor(setor: Setor) {
    this.router.navigate(['/SETOR', setor.idsetor])
  }

  excluirSetor(setor: Setor) {
    if (confirm(`Deseja excluir o setor ${setor.setor}?`)) {
      this.setorService.excluirSetor(setor.idsetor)
        .subscribe({
          next: () => {
            this.listaSetores.update(lista => lista.filter(s => s.idsetor !== setor.idsetor))
          },
          error: (erro) => {
            if (erro.status === 409) {
              alert('Não é possível excluir: existem produtos vinculados a este setor.')
            } else {
              console.log('Erro ao excluir setor', erro)
            }
          }
        })
    }
  }

  toggleExpand(idsetor: number) {
    if (this.idSetorExpandido() === idsetor) {
      this.idSetorExpandido.set(0)
    } else {
      this.idSetorExpandido.set(idsetor)
    }
  }

  produtosDoSetor(idsetor: number): Produto[] {
    return this.listaProdutos().filter(p => p.idsetor === idsetor)
  }
  excluirProduto(produto: Produto) {
  if (confirm(`Deseja excluir o produto ${produto.produto}?`)) {
    this.produtoService.excluirProduto(produto.idproduto).subscribe({
      next: () => {
        this.listaProdutos.update((lista) =>
          lista.filter((p) => p.idproduto !== produto.idproduto)
        );
      },
      error: (erro) => {
        console.log('Erro ao excluir produto', erro);
      }

    })}}}