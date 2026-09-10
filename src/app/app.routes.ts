import { Routes } from '@angular/router';
import { SetorComponent } from './components/setor-component/setor-component';
import { SetorListaComponent } from './components/setor-lista-component/setor-lista-component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "",
        pathMatch: 'full'
    },
    {
        path: 'SETOR',
        component: SetorComponent
    },
    {
        path: 'SETOR/:id',
        component: SetorComponent
    },
    // {
    //     path: 'SETOR-LISTA',
    //     component: SetorListaComponent
    // }
];