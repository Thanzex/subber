import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'serie', loadChildren: () => import('./serie/serie.module').then(m => m.SerieModule) },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { } 
