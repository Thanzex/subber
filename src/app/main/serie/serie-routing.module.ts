import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieViewComponent } from './serie-view/serie-view.component';
import { StagioneViewComponent } from './stagione-view/stagione-view.component';
import { EpisodioViewComponent } from './episodio-view/episodio-view.component';
import { SerieHomeComponent } from './serie-home/serie-home.component';


const routes: Routes = [
  { path: '', children: [
      { path: ':id', component: SerieViewComponent},
      { path: ':id/:stagione', component: StagioneViewComponent},
      { path: ':id/:stagione/:episodio', component: EpisodioViewComponent},
      { path: '', component:SerieHomeComponent },
      { path: '**', redirectTo:'' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerieRoutingModule { }
