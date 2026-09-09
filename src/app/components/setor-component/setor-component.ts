import { Component } from '@angular/core';
import { MenuComponent } from "../menu-component/menu-component";
import { FormsModule } from '@angular/forms';
import { Setor } from '../../model/Setor';

@Component({
  selector: 'app-setor-component',
  imports: [MenuComponent, FormsModule],
  templateUrl: './setor-component.html',
  styleUrl: './setor-component.css',
})
export class SetorComponent {

  setor = ''
  editar = false
  idsetor = 0

  constructor(){}

}