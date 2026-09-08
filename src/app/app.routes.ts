import { Routes } from '@angular/router';
import { SetorComponent } from './components/setor-component/setor-component';
export const routes: Routes = [

     {
        path: '',
        redirectTo: "",
        pathMatch: 'full'
    },
    {
        path: 'SETOR',
        component: SetorComponent
    }
    
];
