import { TituloListaComponent } from './../../pages/titulo-lista/titulo-lista.component';
import { Routes } from '@angular/router';
import { TitleListComponent } from 'app/pages/title-list/title-list.component';

import { TableListComponent } from '../../pages/table-list/table-list.component';
import { TituloScreenComponent } from '../../pages/titulo-screen/titulo-screen.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'teste', component: TableListComponent },
    { path: 'titulos', component: TituloScreenComponent },
    { path: 'consultatitulo', component: TitleListComponent },
    { path: 'listatitulo', component: TituloListaComponent }
];
