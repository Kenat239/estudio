import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pagesRoutes: Routes = [
    { path: '',
    component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Inicio'} },
        {path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'}},
        {path: 'graficas1', component: Graficas1Component, data: {titulo: 'Gráficos'}},
        {path: 'promesas', component: PromisesComponent, data: {titulo: 'Promesas'}},
        {path: 'rxjs', component: RxjsComponent, data: {titulo: 'Observables'}},
        {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Herramientas'}},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
}

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
