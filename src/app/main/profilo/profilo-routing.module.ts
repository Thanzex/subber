import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfiloViewComponent } from './pagine/profilo-view/profilo-view.component';
import { TraduzioniViewComponent } from './pagine/traduzioni-view/traduzioni-view.component';
import { ValutazioniViewComponent } from './pagine/valutazioni-view/valutazioni-view.component';
import { ProfiloModificaComponent } from './pagine/profilo-modifica/profilo-modifica.component';
import { AutoRedirectGuard } from './guards/auto-redirect.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', canActivate:[AutoRedirectGuard] },
  {
    path: ':nick', children: [
      { path: '', component: ProfiloViewComponent },
      { path: 'traduzioni', component: TraduzioniViewComponent },
      { path: 'valutazioni', component: ValutazioniViewComponent },      
      { path: 'modifica', component: ProfiloModificaComponent },      
    ]
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfiloRoutingModule { }
